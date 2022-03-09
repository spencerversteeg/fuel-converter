import { useRef, useState, useEffect } from "react";
import { ArrowDown } from "./ArrowDown";

interface IListCurrencies {
  [key: string]: {
    description: string;
    code: string;
    current?: number;
  };
}

interface IDropdown {
  list: IListCurrencies;
  label: string;
  value: string | number;
  onChange: (value: any) => void;
  // onClick: (value: any) => void;
}

export const Dropdown: React.FC<IDropdown> = ({
  list,
  label,
  value,
  onChange,
  // onClick,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");
  const selected = useRef(null);

  const labelNames = Object.keys(list).map(
    (item) => `${list[item].code} - ${list[item].description} `
  );

  const flipOpen = () => setIsOpen(!isOpen);

  const close = (e: Event) => setIsOpen(e && e.target === selected.current);

  const filterResults = (options: any[]) =>
    options.filter(
      (option) => option.toLowerCase().indexOf(query.toLowerCase()) > -1
    );

  useEffect(() => {
    document.addEventListener("click", close);

    return () => {
      document.removeEventListener("click", close);
    };
  }, []);

  return (
    <div className="dropdown" onClick={flipOpen}>
      <div className="dropdown__control">
        <div className="dropdown__selected">
          <input
            type="text"
            ref={selected}
            placeholder={label}
            value={
              list[value]
                ? list[value].code + " - " + list[value].description
                : query
            }
            onChange={(e) => {
              setQuery(e.target.value), onChange(null);
            }}
            onClick={() => flipOpen}
          />
        </div>
        <div
          className={
            !isOpen
              ? "dropdown__arrow"
              : "dropdown__arrow dropdown__arrow--open"
          }
        >
          <ArrowDown />
        </div>
      </div>
      <div
        className={
          !isOpen
            ? "dropdown__options"
            : "dropdown__options dropdown__options--open"
        }
      >
        {filterResults(labelNames).map((listItem) => (
          <div
            className={
              value !== listItem
                ? "dropdown__option"
                : "dropdown__option dropdown__option--selected"
            }
            key={listItem}
            onClick={() => {
              setQuery("");
              flipOpen();
              onChange(listItem.substring(0, 3));
            }}
          >
            {listItem}
          </div>
        ))}
      </div>
    </div>
  );
};
