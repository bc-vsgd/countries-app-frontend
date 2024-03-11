// RETURNS A PAGE WITH RESULTS OF SEARCH (SEARCHBAR IN <HEADER> COMPONENT)

import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import axios from "axios";
// Components
import Loading from "../../components/Loading/Loading";
import CountryComponent from "../../components/CountryComponent/CountryComponent";

const CountrySearchPage = ({ url }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  //   console.log(searchParams.get("name")); //log: 'france' for ex.
  const [name, setName] = useState(searchParams.get("name") || "");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`${url}?name=${name}`);
        // console.log("country search, data >>> ", data);
        setData(
          data.sort((a, b) => {
            return b.population - a.population;
          })
        );
      } catch (error) {
        console.log("country search, error >>> ", error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <>
      <header>
        <Link to="/">Countries</Link>
      </header>
      <div>
        {data.map((country, index) => {
          return <CountryComponent data={country} key={index} />;
        })}
      </div>
    </>
  );
};

export default CountrySearchPage;
