/* eslint-disable react/prop-types */
import Pet from "./Pet";

const Results = ({ pets }) => {
  if (pets.length === 0) {
    return (
      <div className="loader-container">
        <div className="loader">
          <span>🌀</span>
        </div>
      </div>
    );
  }
  console.log(pets);

  return (
    <div className="img-container">
      {pets.map((pet) => (
        <Pet pet={pet} key={pet.id} />
      ))}
    </div>
  );
};

export default Results;
