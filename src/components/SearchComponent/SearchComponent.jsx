// COMPONENT TOS SEARCH AND SORT

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchComponent = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  return (
    <header>
      <div>
        <input
          type="text"
          placeholder="Name search"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <button
          onClick={() => {
            if (name) {
              navigate(`/country?name=${name}`);
            }
          }}
        >
          Search
        </button>
      </div>
      <div>
        Name (alph)
        <button
          onClick={() => {
            navigate("/countries/sort?name=asc");
          }}
        >
          Asc
        </button>
        <button
          onClick={() => {
            navigate("/countries/sort?name=desc");
          }}
        >
          Desc
        </button>
      </div>
    </header>
  );
};

export default SearchComponent;
