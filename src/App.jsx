import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// Style
import "./App.css";
// Pages
import HomePage from "./pages/HomePage/HomePage";
import CountryPage from "./pages/CountryPage/CountryPage";

function App() {
  const countriesUrl = "https://countryinfoapi.com/api/countries";
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage url={countriesUrl} />} />
        <Route
          path="/country"
          element={<CountryPage url={`${countriesUrl}/name`} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
