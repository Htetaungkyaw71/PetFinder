/* eslint-disable react/prop-types */
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import FetchDetail from "../api/fetchDetail";
import Footer from "./Footer";
import logo from "../assets/logo.png";

const Detail = ({ token }) => {
  console.log(token);
  const { id } = useParams();
  const results = useQuery(["detail", id, token], FetchDetail);
  if (results.isLoading) {
    return (
      <div className="loader-container">
        <div className="loader">
          <span>
            {" "}
            <img src={logo} className="logo" alt="spinner" />
          </span>
        </div>
      </div>
    );
  }

  let pet = results?.data?.animal ?? null;
  let hero =
    pet.photos?.[0]?.small ??
    "https://img.freepik.com/free-photo/isolated-happy-smiling-dog-white-background-portrait-4_1562-693.jpg";
  return (
    <>
      <div className="detail-container">
        <div className="detail-img-container">
          <img src={hero} alt="pet" className="detail-pet" />
        </div>
        <div className="detail-text-container">
          <h1>{pet.name}</h1>
          <div style={{ marginTop: "10px", color: "gray" }}>
            <span>{pet.breeds.primary}</span>
            <span style={{ marginLeft: "5px" }}>
              • {pet.contact.address.city},{" "}
            </span>
            <span>{pet.contact.address.country}</span>
          </div>
          <div style={{ marginTop: "10px", color: "gray" }}>
            <span>{pet.age}</span>
            <span style={{ marginLeft: "5px" }}>• {pet.gender}</span>
            <span style={{ marginLeft: "5px" }}>• {pet.size}</span>
            <span style={{ marginLeft: "5px" }}>• {pet.colors.primary}</span>
          </div>
          <h1 style={{ marginTop: "20px" }}>About {pet.name}</h1>
          <p style={{ marginTop: "10px", color: "gray", width: "600px" }}>
            {pet.description}
          </p>
          <button
            className="adopt-btn"
            onClick={() => alert(`Thanks for adoption ${pet.name} `)}
          >
            Adopt {pet.name}
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Detail;
