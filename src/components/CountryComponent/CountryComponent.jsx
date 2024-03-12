// ONE COUNTRY COMPONENT

import "./CountryComponent.css";

const CountryComponent = ({ data }) => {
  // console.log("country comp, data", data);
  // Get arrays of: native names, languages, currencies, continents, borders
  const nativeNames = [];
  if (data.name.nativeName) {
    for (const [key, value] of Object.entries(data.name.nativeName)) {
      nativeNames.push([key, value]);
    }
  }
  const languages = [];
  if (data.languages) {
    for (const [key, value] of Object.entries(data.languages)) {
      languages.push([key, value]);
    }
  }
  const currencies = [];
  if (data.currencies) {
    for (const [key, value] of Object.entries(data.currencies)) {
      currencies.push([key, value]);
    }
  }
  const continents = [];
  if (data.continents) {
    for (let i = 0; i < data.continents.length; i++) {
      continents.push(data.continents[i]);
    }
  }
  const borders = [];
  if (data.borders) {
    for (let i = 0; i < data.borders.length; i++) {
      borders.push(data.borders[i]);
    }
  }

  return (
    <div className="country-comp">
      {/* Name, native name(s) */}
      <div className="capital">{data.name.common.toUpperCase()}</div>
      <div className="flex-row">
        {nativeNames.map((name, index) => {
          return <p key={index}>{name[1].common}</p>;
        })}
      </div>
      {/* Flag */}
      <img src={data.flags.svg} className="flag" />
      {/* Capital, population, area */}
      <p>Capital: {data.capital}</p>
      <p>
        Population: {data.population} inhabitants ({data.demonyms?.eng.f})
      </p>
      <p>Area: {data.area} km2</p>
      {/* Language(s) */}
      <div className="flex-row">
        {languages.length > 1 ? <p>Languages: </p> : <p>Language: </p>}
        {languages.map((language, index) => {
          return <p key={index}>{language[1]}</p>;
        })}
      </div>
      {/* Region, subregion */}
      <p>
        Region (subregion): {data.region} ({data.subregion})
      </p>
      {/* Continent */}
      <div className="flex-row">
        {continents.length > 1 ? <p>Continents: </p> : <p>Continent: </p>}
        {continents.map((continent, index) => {
          return <p key={index}>{continent}</p>;
        })}
      </div>
      {/* Currency */}
      <div className="flex-row">
        {currencies.length > 1 ? <p>Currencies: </p> : <p>Currency: </p>}
        {currencies.map((currency, index) => {
          return (
            <div key={index}>
              <p>
                {currency[1].name} ({currency[0]}): {currency[1].symbol}
              </p>
            </div>
          );
        })}
      </div>
      {/* Borders */}
      <div className="flex-row">
        {borders.length === 1 && <p>Border: </p>}
        {borders.length > 1 && <p>Borders: </p>}
        {borders.length > 0 && (
          <div className="flex-row">
            {borders.map((border, index) => {
              return <p key={index}>{border}</p>;
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default CountryComponent;
