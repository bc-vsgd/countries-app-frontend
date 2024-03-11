// RETURNS A PAGE WITH ONE COUNTRY (BY NAME)

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
// Components
import Loading from "../../components/Loading/Loading";
import CountryComponent from "../../components/CountryComponent/CountryComponent";
// Style
import "./CountryPage.css";

const CountryPage = ({ url }) => {
  const { name } = useParams();
  // States
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`${url}/${name}`);
        // console.log("country, data >>> ", data);
        setData(data[0]);
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
    <>
      {/* ONE COUNTRY COMPONENT */}
      <header>
        <Link to="/">Countries</Link>
      </header>
      <CountryComponent data={data} />
    </>
  );
};

export default CountryPage;
