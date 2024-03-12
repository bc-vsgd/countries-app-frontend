import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import axios from "axios";
// Components
import Loading from "../../components/Loading/Loading";
import SearchComponent from "../../components/SearchComponent/SearchComponent";
import CountryComponent from "../../components/CountryComponent/CountryComponent";

const SortedPage = ({ url }) => {
  // States
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const [nameSort, setNameSort] = useState(searchParams.get("name") || "");
  console.log("name sort >> ", nameSort);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`${url}?name=${nameSort}`);
        // console.log("sorted page, data >>> ", data);
        setData(data);
      } catch (error) {
        console.log("sorted page, error >>> ", error);
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
      <SearchComponent />
      <div>
        {data.map((country, index) => {
          return <CountryComponent key={index} data={country} />;
        })}
      </div>
    </>
  );
};

export default SortedPage;
