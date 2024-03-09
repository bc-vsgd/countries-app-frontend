import "./CountryThumbnail.css";

const CountryThumbnail = ({ country }) => {
  return (
    <div className="country-thumbnail">
      <div>{country.name}</div>
      <img
        src={country.flag}
        alt={`Drapeau ${country.name}`}
        className="flag"
      />
    </div>
  );
};
export default CountryThumbnail;
