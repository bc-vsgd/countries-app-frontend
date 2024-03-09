import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
// Components
import Loading from "../../components/Loading/Loading";
// Style
import "./CountryPage.css";

const CountryPage = ({ url }) => {
  const { state } = useLocation();
  const name = state.name;
  // States
  const [data, setData] = useState(null);
  const [languages, setLanguages] = useState([]);
  const [currencies, setCurrencies] = useState([]);
  const [borders, setBorders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`${url}/${name}`);
        // console.log("country, data >>> ", data);
        setData(data);
        // Get & set language(s)
        const languages = [];
        for (const [key, value] of Object.entries(data.languages)) {
          languages.push([key, value]);
        }
        setLanguages(languages);
        // Get & set currency(ies)
        const currencies = [];
        for (const [key, value] of Object.entries(data.currencies)) {
          currencies.push([key, value]);
        }
        setCurrencies(currencies);
        // Get & set borders
        setBorders(data.borders);
      } catch (error) {
        console.log("Country, error >>>> ", error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <div className="country-page">
      <div>{data.name}</div>;
      <img src={data.flag} className="flag" />
      <p>Capitale: {data.capital}</p>
      <p>Population: {data.population}</p>
      <p>Superficie: {data.area}</p>
      <div>
        {languages.length > 1 ? <p>Langues: </p> : <p>Langue: </p>}
        {languages.map((language, index) => {
          return <p key={index}>{language[1]}</p>;
        })}
      </div>
      <p>
        Region, subregion: {data.region} ({data.subregion})
      </p>
      <p>Continent: {data.continents[0]}</p>
      <div>
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
