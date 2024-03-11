import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
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
    </header>
  );
};

export default Header;
