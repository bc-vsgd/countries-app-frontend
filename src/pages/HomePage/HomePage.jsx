import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// Pages
// Components
import Loading from "../../components/Loading/Loading";
import CountryThumbnail from "../../components/CountryThumbnail/CountryThumbnail";
// Style
// import "./HomePage.css";

const HomePage = ({ url }) => {
  // States
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(url);
        // console.log("app, data >>> ", data);
        setData(data);
      } catch (error) {
        console.log("App, error >>> ", error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <div className="home-page">
      {data.map((country, index) => {
        return (
          <Link to={`/country/${country.name.common}`} key={index}>
            <CountryThumbnail country={country} />
          </Link>
        );
      })}
    </div>
  );
};

export default HomePage;
