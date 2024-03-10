import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
// Components
import Loading from "../../components/Loading/Loading";
// Style
import "./CountryPage.css";

const CountryPage = ({ url }) => {
  const { name } = useParams();
  // States
  const [data, setData] = useState(null);
  const [nativeNames, setNativeNames] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [continents, setContinents] = useState([]);
  const [currencies, setCurrencies] = useState([]);
  const [borders, setBorders] = useState([""]);
  const [isLoading, setIsLoading] = useState(true);

  const getNativeNames = (nativeNames) => {
    const natArr = [];
    for (const [key, value] of Object.entries(nativeNames)) {
      natArr.push([key, value]);
    }
    console.log("native array >> ", natArr);
    return natArr;
  };
  const getLanguages = (languages) => {
    const langArr = [];
    for (const [key, value] of Object.entries(languages)) {
      langArr.push([key, value]);
    }
    return langArr;
  };
  const getCurrencies = (currencies) => {
    const currArr = [];
    for (const [key, value] of Object.entries(currencies)) {
      currArr.push([key, value]);
    }
    return currArr;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`${url}/${name}`);
        console.log("country, data >>> ", data[0]);
        setData(data[0]);
        // Get & set languages, continents, currencies, borders
        setNativeNames(getNativeNames(data[0].name.nativeName));
        // console.log("native name >> ", data[0].name.nativeName);

        setLanguages(getLanguages(data[0].languages));
        setContinents(data[0].continents);
        setCurrencies(getCurrencies(data[0].currencies));
        if (data[0].borders) {
          setBorders(data[0].borders);
        }
      } catch (error) {
        console.log("country, error >>> ", error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <div className="country-page">
      <div>{data.name.common}</div>
      <div className="flex-row">
        {nativeNames.map((name, index) => {
          return <p key={index}>{name[1].common}</p>;
        })}
      </div>
      <img src={data.flags.svg} className="flag" />
      <p>Capital: {data.capital}</p>
      <p>
        Population: {data.population} inhabitants ({data.demonyms.eng.f})
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
      {borders.length === 1 && <p>Border: </p>}
      {borders.length > 1 && <p>Borders: </p>}
      {borders.length > 0 && (
        <div>
          {borders.map((border, index) => {
            return <p key={index}>{border}</p>;
          })}
        </div>
      )}
    </div>
  );
};

export default CountryPage;
