export interface IListCurrencies {
  [key: string]: {
    description: string;
    code: string;
    current?: number;
  };
}
// Data sourced from: https://exchangerate.host/
export const listCurrencies: IListCurrencies = {
  AED: {
    description: "United Arab Emirates Dirham",
    code: "AED",
    current: 1,
  },
  AFN: {
    description: "Afghan Afghani",
    code: "AFN",
    current: 1,
  },
  ALL: {
    description: "Albanian Lek",
    code: "ALL",
    current: 1,
  },
  AMD: {
    description: "Armenian Dram",
    code: "AMD",
    current: 1,
  },
  ANG: {
    description: "Netherlands Antillean Guilder",
    code: "ANG",
    current: 1,
  },
  AOA: {
    description: "Angolan Kwanza",
    code: "AOA",
    current: 1,
  },
  ARS: {
    description: "Argentine Peso",
    code: "ARS",
    current: 1,
  },
  AUD: {
    description: "Australian Dollar",
    code: "AUD",
    current: 1,
  },
  AWG: {
    description: "Aruban Florin",
    code: "AWG",
    current: 1,
  },
  AZN: {
    description: "Azerbaijani Manat",
    code: "AZN",
    current: 1,
  },
  BAM: {
    description: "Bosnia-Herzegovina Convertible Mark",
    code: "BAM",
    current: 1,
  },
  BBD: {
    description: "Barbadian Dollar",
    code: "BBD",
    current: 1,
  },
  BDT: {
    description: "Bangladeshi Taka",
    code: "BDT",
    current: 1,
  },
  BGN: {
    description: "Bulgarian Lev",
    code: "BGN",
    current: 1,
  },
  BHD: {
    description: "Bahraini Dinar",
    code: "BHD",
    current: 1,
  },
  BIF: {
    description: "Burundian Franc",
    code: "BIF",
    current: 1,
  },
  BMD: {
    description: "Bermudan Dollar",
    code: "BMD",
    current: 1,
  },
  BND: {
    description: "Brunei Dollar",
    code: "BND",
    current: 1,
  },
  BOB: {
    description: "Bolivian Boliviano",
    code: "BOB",
    current: 1,
  },
  BRL: {
    description: "Brazilian Real",
    code: "BRL",
    current: 1,
  },
  BSD: {
    description: "Bahamian Dollar",
    code: "BSD",
    current: 1,
  },
  BTC: {
    description: "Bitcoin",
    code: "BTC",
    current: 1,
  },
  BTN: {
    description: "Bhutanese Ngultrum",
    code: "BTN",
    current: 1,
  },
  BWP: {
    description: "Botswanan Pula",
    code: "BWP",
    current: 1,
  },
  BYN: {
    description: "Belarusian Ruble",
    code: "BYN",
    current: 1,
  },
  BZD: {
    description: "Belize Dollar",
    code: "BZD",
    current: 1,
  },
  CAD: {
    description: "Canadian Dollar",
    code: "CAD",
    current: 1,
  },
  CDF: {
    description: "Congolese Franc",
    code: "CDF",
    current: 1,
  },
  CHF: {
    description: "Swiss Franc",
    code: "CHF",
    current: 1,
  },
  CLF: {
    description: "Chilean Unit of Account (UF)",
    code: "CLF",
    current: 1,
  },
  CLP: {
    description: "Chilean Peso",
    code: "CLP",
    current: 1,
  },
  CNH: {
    description: "Chinese Yuan (Offshore)",
    code: "CNH",
    current: 1,
  },
  CNY: {
    description: "Chinese Yuan",
    code: "CNY",
    current: 1,
  },
  COP: {
    description: "Colombian Peso",
    code: "COP",
    current: 1,
  },
  CRC: {
    description: "Costa Rican Colón",
    code: "CRC",
    current: 1,
  },
  CUC: {
    description: "Cuban Convertible Peso",
    code: "CUC",
    current: 1,
  },
  CUP: {
    description: "Cuban Peso",
    code: "CUP",
    current: 1,
  },
  CVE: {
    description: "Cape Verdean Escudo",
    code: "CVE",
    current: 1,
  },
  CZK: {
    description: "Czech Republic Koruna",
    code: "CZK",
    current: 1,
  },
  DJF: {
    description: "Djiboutian Franc",
    code: "DJF",
    current: 1,
  },
  DKK: {
    description: "Danish Krone",
    code: "DKK",
    current: 1,
  },
  DOP: {
    description: "Dominican Peso",
    code: "DOP",
    current: 1,
  },
  DZD: {
    description: "Algerian Dinar",
    code: "DZD",
    current: 1,
  },
  EGP: {
    description: "Egyptian Pound",
    code: "EGP",
    current: 1,
  },
  ERN: {
    description: "Eritrean Nakfa",
    code: "ERN",
    current: 1,
  },
  ETB: {
    description: "Ethiopian Birr",
    code: "ETB",
    current: 1,
  },
  EUR: {
    description: "Euro",
    code: "EUR",
    current: 1,
  },
  FJD: {
    description: "Fijian Dollar",
    code: "FJD",
    current: 1,
  },
  FKP: {
    description: "Falkland Islands Pound",
    code: "FKP",
    current: 1,
  },
  GBP: {
    description: "British Pound Sterling",
    code: "GBP",
    current: 1,
  },
  GEL: {
    description: "Georgian Lari",
    code: "GEL",
    current: 1,
  },
  GGP: {
    description: "Guernsey Pound",
    code: "GGP",
    current: 1,
  },
  GHS: {
    description: "Ghanaian Cedi",
    code: "GHS",
    current: 1,
  },
  GIP: {
    description: "Gibraltar Pound",
    code: "GIP",
    current: 1,
  },
  GMD: {
    description: "Gambian Dalasi",
    code: "GMD",
    current: 1,
  },
  GNF: {
    description: "Guinean Franc",
    code: "GNF",
    current: 1,
  },
  GTQ: {
    description: "Guatemalan Quetzal",
    code: "GTQ",
    current: 1,
  },
  GYD: {
    description: "Guyanaese Dollar",
    code: "GYD",
    current: 1,
  },
  HKD: {
    description: "Hong Kong Dollar",
    code: "HKD",
    current: 1,
  },
  HNL: {
    description: "Honduran Lempira",
    code: "HNL",
    current: 1,
  },
  HRK: {
    description: "Croatian Kuna",
    code: "HRK",
    current: 1,
  },
  HTG: {
    description: "Haitian Gourde",
    code: "HTG",
    current: 1,
  },
  HUF: {
    description: "Hungarian Forint",
    code: "HUF",
    current: 1,
  },
  IDR: {
    description: "Indonesian Rupiah",
    code: "IDR",
    current: 1,
  },
  ILS: {
    description: "Israeli New Sheqel",
    code: "ILS",
    current: 1,
  },
  IMP: {
    description: "Manx pound",
    code: "IMP",
    current: 1,
  },
  INR: {
    description: "Indian Rupee",
    code: "INR",
    current: 1,
  },
  IQD: {
    description: "Iraqi Dinar",
    code: "IQD",
    current: 1,
  },
  IRR: {
    description: "Iranian Rial",
    code: "IRR",
    current: 1,
  },
  ISK: {
    description: "Icelandic Króna",
    code: "ISK",
    current: 1,
  },
  JEP: {
    description: "Jersey Pound",
    code: "JEP",
    current: 1,
  },
  JMD: {
    description: "Jamaican Dollar",
    code: "JMD",
    current: 1,
  },
  JOD: {
    description: "Jordanian Dinar",
    code: "JOD",
    current: 1,
  },
  JPY: {
    description: "Japanese Yen",
    code: "JPY",
    current: 1,
  },
  KES: {
    description: "Kenyan Shilling",
    code: "KES",
    current: 1,
  },
  KGS: {
    description: "Kyrgystani Som",
    code: "KGS",
    current: 1,
  },
  KHR: {
    description: "Cambodian Riel",
    code: "KHR",
    current: 1,
  },
  KMF: {
    description: "Comorian Franc",
    code: "KMF",
    current: 1,
  },
  KPW: {
    description: "North Korean Won",
    code: "KPW",
    current: 1,
  },
  KRW: {
    description: "South Korean Won",
    code: "KRW",
    current: 1,
  },
  KWD: {
    description: "Kuwaiti Dinar",
    code: "KWD",
    current: 1,
  },
  KYD: {
    description: "Cayman Islands Dollar",
    code: "KYD",
    current: 1,
  },
  KZT: {
    description: "Kazakhstani Tenge",
    code: "KZT",
    current: 1,
  },
  LAK: {
    description: "Laotian Kip",
    code: "LAK",
    current: 1,
  },
  LBP: {
    description: "Lebanese Pound",
    code: "LBP",
    current: 1,
  },
  LKR: {
    description: "Sri Lankan Rupee",
    code: "LKR",
    current: 1,
  },
  LRD: {
    description: "Liberian Dollar",
    code: "LRD",
    current: 1,
  },
  LSL: {
    description: "Lesotho Loti",
    code: "LSL",
    current: 1,
  },
  LYD: {
    description: "Libyan Dinar",
    code: "LYD",
    current: 1,
  },
  MAD: {
    description: "Moroccan Dirham",
    code: "MAD",
    current: 1,
  },
  MDL: {
    description: "Moldovan Leu",
    code: "MDL",
    current: 1,
  },
  MGA: {
    description: "Malagasy Ariary",
    code: "MGA",
  },
  MKD: {
    description: "Macedonian Denar",
    code: "MKD",
    current: 1,
  },
  MMK: {
    description: "Myanma Kyat",
    code: "MMK",
    current: 1,
  },
  MNT: {
    description: "Mongolian Tugrik",
    code: "MNT",
    current: 1,
  },
  MOP: {
    description: "Macanese Pataca",
    code: "MOP",
    current: 1,
  },
  MRO: {
    description: "Mauritanian Ouguiya (pre-2018)",
    code: "MRO",
    current: 1,
  },
  MRU: {
    description: "Mauritanian Ouguiya",
    code: "MRU",
    current: 1,
  },
  MUR: {
    description: "Mauritian Rupee",
    code: "MUR",
    current: 1,
  },
  MVR: {
    description: "Maldivian Rufiyaa",
    code: "MVR",
    current: 1,
  },
  MWK: {
    description: "Malawian Kwacha",
    code: "MWK",
    current: 1,
  },
  MXN: {
    description: "Mexican Peso",
    code: "MXN",
    current: 1,
  },
  MYR: {
    description: "Malaysian Ringgit",
    code: "MYR",
    current: 1,
  },
  MZN: {
    description: "Mozambican Metical",
    code: "MZN",
    current: 1,
  },
  NAD: {
    description: "Namibian Dollar",
    code: "NAD",
    current: 1,
  },
  NGN: {
    description: "Nigerian Naira",
    code: "NGN",
    current: 1,
  },
  NIO: {
    description: "Nicaraguan Córdoba",
    code: "NIO",
    current: 1,
  },
  NOK: {
    description: "Norwegian Krone",
    code: "NOK",
    current: 1,
  },
  NPR: {
    description: "Nepalese Rupee",
    code: "NPR",
    current: 1,
  },
  NZD: {
    description: "New Zealand Dollar",
    code: "NZD",
    current: 1,
  },
  OMR: {
    description: "Omani Rial",
    code: "OMR",
    current: 1,
  },
  PAB: {
    description: "Panamanian Balboa",
    code: "PAB",
    current: 1,
  },
  PEN: {
    description: "Peruvian Nuevo Sol",
    code: "PEN",
    current: 1,
  },
  PGK: {
    description: "Papua New Guinean Kina",
    code: "PGK",
    current: 1,
  },
  PHP: {
    description: "Philippine Peso",
    code: "PHP",
    current: 1,
  },
  PKR: {
    description: "Pakistani Rupee",
    code: "PKR",
    current: 1,
  },
  PLN: {
    description: "Polish Zloty",
    code: "PLN",
    current: 1,
  },
  PYG: {
    description: "Paraguayan Guarani",
    code: "PYG",
    current: 1,
  },
  QAR: {
    description: "Qatari Rial",
    code: "QAR",
    current: 1,
  },
  RON: {
    description: "Romanian Leu",
    code: "RON",
    current: 1,
  },
  RSD: {
    description: "Serbian Dinar",
    code: "RSD",
    current: 1,
  },
  RUB: {
    description: "Russian Ruble",
    code: "RUB",
    current: 1,
  },
  RWF: {
    description: "Rwandan Franc",
    code: "RWF",
    current: 1,
  },
  SAR: {
    description: "Saudi Riyal",
    code: "SAR",
    current: 1,
  },
  SBD: {
    description: "Solomon Islands Dollar",
    code: "SBD",
    current: 1,
  },
  SCR: {
    description: "Seychellois Rupee",
    code: "SCR",
    current: 1,
  },
  SDG: {
    description: "Sudanese Pound",
    code: "SDG",
    current: 1,
  },
  SEK: {
    description: "Swedish Krona",
    code: "SEK",
    current: 1,
  },
  SGD: {
    description: "Singapore Dollar",
    code: "SGD",
    current: 1,
  },
  SHP: {
    description: "Saint Helena Pound",
    code: "SHP",
    current: 1,
  },
  SLL: {
    description: "Sierra Leonean Leone",
    code: "SLL",
    current: 1,
  },
  SOS: {
    description: "Somali Shilling",
    code: "SOS",
    current: 1,
  },
  SRD: {
    description: "Surinamese Dollar",
    code: "SRD",
    current: 1,
  },
  SSP: {
    description: "South Sudanese Pound",
    code: "SSP",
    current: 1,
  },
  STD: {
    description: "São Tomé and Príncipe Dobra (pre-2018)",
    code: "STD",
    current: 1,
  },
  STN: {
    description: "São Tomé and Príncipe Dobra",
    code: "STN",
    current: 1,
  },
  SVC: {
    description: "Salvadoran Colón",
    code: "SVC",
    current: 1,
  },
  SYP: {
    description: "Syrian Pound",
    code: "SYP",
    current: 1,
  },
  SZL: {
    description: "Swazi Lilangeni",
    code: "SZL",
    current: 1,
  },
  THB: {
    description: "Thai Baht",
    code: "THB",
    current: 1,
  },
  TJS: {
    description: "Tajikistani Somoni",
    code: "TJS",
    current: 1,
  },
  TMT: {
    description: "Turkmenistani Manat",
    code: "TMT",
    current: 1,
  },
  TND: {
    description: "Tunisian Dinar",
    code: "TND",
    current: 1,
  },
  TOP: {
    description: "Tongan Pa'anga",
    code: "TOP",
    current: 1,
  },
  TRY: {
    description: "Turkish Lira",
    code: "TRY",
    current: 1,
  },
  TTD: {
    description: "Trinidad and Tobago Dollar",
    code: "TTD",
    current: 1,
  },
  TWD: {
    description: "New Taiwan Dollar",
    code: "TWD",
    current: 1,
  },
  TZS: {
    description: "Tanzanian Shilling",
    code: "TZS",
    current: 1,
  },
  UAH: {
    description: "Ukrainian Hryvnia",
    code: "UAH",
    current: 1,
  },
  UGX: {
    description: "Ugandan Shilling",
    code: "UGX",
    current: 1,
  },
  USD: {
    description: "United States Dollar",
    code: "USD",
    current: 1,
  },
  UYU: {
    description: "Uruguayan Peso",
    code: "UYU",
    current: 1,
  },
  UZS: {
    description: "Uzbekistan Som",
    code: "UZS",
    current: 1,
  },
  VEF: {
    description: "Venezuelan Bolívar Fuerte (Old)",
    code: "VEF",
    current: 1,
  },
  VES: {
    description: "Venezuelan Bolívar Soberano",
    code: "VES",
    current: 1,
  },
  VND: {
    description: "Vietnamese Dong",
    code: "VND",
    current: 1,
  },
  VUV: {
    description: "Vanuatu Vatu",
    code: "VUV",
    current: 1,
  },
  WST: {
    description: "Samoan Tala",
    code: "WST",
    current: 1,
  },
  XAF: {
    description: "CFA Franc BEAC",
    code: "XAF",
    current: 1,
  },
  XAG: {
    description: "Silver Ounce",
    code: "XAG",
    current: 1,
  },
  XAU: {
    description: "Gold Ounce",
    code: "XAU",
    current: 1,
  },
  XCD: {
    description: "East Caribbean Dollar",
    code: "XCD",
    current: 1,
  },
  XDR: {
    description: "Special Drawing Rights",
    code: "XDR",
    current: 1,
  },
  XOF: {
    description: "CFA Franc BCEAO",
    code: "XOF",
    current: 1,
  },
  XPD: {
    description: "Palladium Ounce",
    code: "XPD",
    current: 1,
  },
  XPF: {
    description: "CFP Franc",
    code: "XPF",
    current: 1,
  },
  XPT: {
    description: "Platinum Ounce",
    code: "XPT",
    current: 1,
  },
  YER: {
    description: "Yemeni Rial",
    code: "YER",
    current: 1,
  },
  ZAR: {
    description: "South African Rand",
    code: "ZAR",
    current: 1,
  },
  ZMW: {
    description: "Zambian Kwacha",
    code: "ZMW",
    current: 1,
  },
  ZWL: {
    description: "Zimbabwean Dollar",
    code: "ZWL",
    current: 1,
  },
};
