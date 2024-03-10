import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// Style
import "./App.css";
// Pages
import HomePage from "./pages/HomePage/HomePage";
import CountryPage from "./pages/CountryPage/CountryPage";

function App() {
  const countriesUrl = "https://restcountries.com/v3.1";
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage url={`${countriesUrl}/all`} />} />
        <Route
          path="country/:name"
          element={<CountryPage url={`${countriesUrl}/name`} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
