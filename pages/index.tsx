import type { NextPage } from "next";
import { useEffect, useState } from "react";
import axios from "axios";
import Head from "next/head";
import { IListCurrencies, listCurrencies } from "../lib/rates";

import Dropdown from "./components/Dropdown";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ToggleButton from "./components/ToggleButton";
import Flip from "./components/Flip";

const litreToGallon = (value: number, to: FluidMeasurement): number => {
  switch (to) {
    case "GALLON": {
      return value * 3.785;
    }
    case "LITRE": {
      return value / 3.785;
    }
    default: {
      return value;
    }
  }
};

const Home: NextPage = () => {
  // Data fetching states
  const [error, setError] = useState<string | undefined>(undefined);
  const [data, setData] = useState<IListCurrencies | undefined>(undefined);

  // From Data
  const [fromMeasure, setFromMeasure] = useState<FluidMeasurement>("GALLON");
  const [fromCurrency, setfromCurrency] = useState<Currency>("USD");
  const [fromValue, setFromValue] = useState<string>("1");

  // To Data
  const [toMeasure, setToMeasure] = useState<FluidMeasurement>("LITRE");
  const [toCurrency, setToCurrency] = useState<Currency>("CAD");
  const [toValue, setToValue] = useState<string>("4");

  const updateToPrice = () => {
    // Price in new currency, minus measurement changes.
    if (!listCurrencies[toCurrency]) {
      return;
    }

    const exchange = Number(fromValue) * listCurrencies[toCurrency].current!;

    // If the measurments are not the same, convert to the preferred measurment.
    if (fromMeasure !== toMeasure) {
      setToValue(litreToGallon(exchange, toMeasure).toFixed(2));
      return;
    }

    // If they are, just set for the exchange.
    setToValue(exchange.toFixed(2));
  };

  const flipValues = () => {
    const tempFrom = fromMeasure;
    const tempCurrency = fromCurrency;
    const tempValue = fromValue;

    setFromMeasure(toMeasure);
    setfromCurrency(toCurrency);
    setFromValue(toValue);
    setToMeasure(tempFrom);
    setToCurrency(tempCurrency);
    setToValue(tempValue);
  };

  // Pull new data when the page loads to ensure it is accurate.
  useEffect(() => {
    axios
      .get(`https://api.exchangerate.host/latest?base=${fromCurrency}`)
      .then(({ data }) => {
        // Currency codes & descriptions are stored locally, the current rates are fetched on page load.
        Object.keys(data.rates).forEach((rate) => {
          listCurrencies[rate].current = data.rates[rate];
        });

        // Store this data to the state so it can be accessed.
        setData(listCurrencies);
        updateToPrice();
      })
      .catch((err) => setError(err));
  }, [fromCurrency, toCurrency]);

  // Whenever state updates, re-run the price update to generate correct values.
  useEffect(() => {
    updateToPrice();

    // Disabled because the price update function doesn't need to call updates.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fromCurrency, fromValue, fromMeasure, toCurrency, toMeasure]);

  return (
    <>
      <Head>
        <title>Fuel Converter</title>
        <meta
          name="description"
          content="Convert fuel prices between regions and measurments."
        />
      </Head>

      <div className="container">
        <Header />

        <main>
          {error && <p>There was an error fetching this data</p>}
          {!data && <p>Fetching current rates..</p>}
          {data && (
            <div className="container">
              <div className="to-from">
                {/* FROM */}
                <div className="fuel-select">
                  <ToggleButton
                    name="from"
                    defaultChecked={fromMeasure}
                    onChange={(e) => setFromMeasure(e.target.value)}
                  />

                  {/* <button className="btn-swap">{fromMeasure}</button> */}
                  <Dropdown
                    label="Select a currency"
                    list={listCurrencies}
                    value={fromCurrency}
                    onChange={(newFrom) => setfromCurrency(newFrom)}
                  />

                  <input
                    className="input"
                    type="text"
                    placeholder="Enter a price"
                    value={fromValue}
                    onChange={(e) => {
                      setFromValue(e.target.value);
                      updateToPrice();
                    }}
                  />
                </div>
                <div className="flip" onClick={flipValues}>
                  <Flip />
                </div>
                {/* To */}
                <div className="fuel-select">
                  <ToggleButton
                    name="to"
                    defaultChecked={toMeasure}
                    onChange={(e) => setToMeasure(e.target.value)}
                  />
                  <Dropdown
                    label="Select a currency"
                    list={listCurrencies}
                    value={toCurrency}
                    onChange={(newTo) => setToCurrency(newTo)}
                  />

                  <input
                    className="input"
                    type="text"
                    value={toValue}
                    readOnly
                  />
                </div>
              </div>
            </div>
          )}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
