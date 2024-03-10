import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// Style
import "./App.css";
// Pages
import HomePage from "./pages/HomePage/HomePage";
import CountryPage from "./pages/CountryPage/CountryPage";

function App() {
  // const countriesUrl = "https://restcountries.com/v3.1";
  const countriesUrl = "http://localhost:3000";
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<HomePage url={`${countriesUrl}/all`} />} /> */}
        <Route
          path="/"
          element={<HomePage url={`${countriesUrl}/countries`} />}
        />
        <Route
          path="country/:name"
          // element={<CountryPage url={`${countriesUrl}/country/:name`} />}
          element={<CountryPage url={`${countriesUrl}/country`} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
