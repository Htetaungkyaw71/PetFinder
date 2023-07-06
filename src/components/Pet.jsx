import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Pet = ({ pet }) => {
  let hero =
    pet.photos?.[0]?.small ??
    "https://img.freepik.com/free-photo/isolated-happy-smiling-dog-white-background-portrait-4_1562-693.jpg";
  return (
    <Link to={`/details/${pet.id}`}>
      <div className="pet-img-container">
        <img src={hero} alt="pet" className="home-pet" />
      </div>
    </Link>
  );
};

export default Pet;
