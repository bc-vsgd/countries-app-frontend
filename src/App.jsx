import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// Style
import "./App.css";
// Pages
import HomePage from "./pages/HomePage/HomePage";
import CountryPage from "./pages/CountryPage/CountryPage";
import CountrySearchPage from "./pages/CountrySearchPage/CountrySearchPage";
import SortedPage from "./pages/SortedPage/SortedPage";

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
        {/* Alphabetical sort */}
        <Route
          path="/countries/sort"
          element={<SortedPage url={`${countriesUrl}/countries/sort`} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
