/* eslint-disable react/prop-types */
import Pet from "./Pet";

const Results = ({ pets }) => {
  if (pets.length === 0) {
    return (
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>No Pet Found</h1>
    );
  }

  return (
    <div className="img-container">
      {pets.map((pet) => (
        <Pet pet={pet} key={pet.id} />
      ))}
    </div>
  );
};

export default Results;
