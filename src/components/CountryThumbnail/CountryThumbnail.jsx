import "./CountryThumbnail.css";

const CountryThumbnail = ({ country }) => {
  return (
    <div className="country-thumbnail">
      <div>{country.name.common}</div>
      <img
        src={country.flags.svg}
        alt={`Drapeau ${country.name.common}`}
        className="flag"
      />
    </div>
  );
};
export default CountryThumbnail;
