import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// Style
import "./App.css";
// Pages
import HomePage from "./pages/HomePage/HomePage";
import CountryPage from "./pages/CountryPage/CountryPage";
import CountrySearchPage from "./pages/CountrySearchPage/CountrySearchPage";

function App() {
  // const countriesUrl = "https://restcountries.com/v3.1";
  const countriesUrl = "http://localhost:3000";
  return (
    <Router>
      <Routes>
        {/* Home */}
        <Route
          path="/"
          element={<HomePage url={`${countriesUrl}/countries`} />}
        />
        {/* Country by name */}
        <Route
          path="country/:name"
          element={<CountryPage url={`${countriesUrl}/country`} />}
        />
        {/* Country: query search */}
        <Route
          path="country"
          element={<CountrySearchPage url={`${countriesUrl}/country`} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
