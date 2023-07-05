/* eslint-disable no-unused-vars */
import { useState, useContext } from "react";
import useBreedList from "../api/useBreedList";
import { useQuery } from "@tanstack/react-query";
import FetchAnimals from "../api/fetchanimals";
import TokenContext from "./TokenContext";
import Results from "./Results";

const Home = () => {
  let token = useContext(TokenContext);
  let sizes = ["small", "medium", "large", "xlarge"];
  let ages = ["baby", "young", "adult", "senior"];
  let genders = ["male", "female"];
  let types = [
    "Dog",
    "Cat",
    "Rabbit",
    "Bird",
    "Small & Furry",
    "Horse",
    "Scales, Fins & Other",
    "Barnyard",
  ];
  let coats = ["short", "medium", "long", "wire", "hairless", "curly"];
  let [animal, setAnimal] = useState("");

  let [breeds] = useBreedList(animal, token);
  let [data, setData] = useState({
    type: "",
    breed: "",
    size: "",
    gender: "",
    age: "",
    coat: "",
  });

  let pets = useQuery(["fetchanimals", data, token], FetchAnimals);

  return (
    <>
      <div className="header-background">
        <div>
          <h1>Get Personalized Pet Matches</h1>
          <p>
            Browse pets from our network of over 11,500 shelters and rescues.
          </p>

          <div className="search">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                console.log("ok");
                let formData = new FormData(e.target);
                let obj = {
                  type: formData.get("type") ?? "",
                  breed: formData.get("breed") ?? "",
                  size: formData.get("size") ?? "",
                  gender: formData.get("gender") ?? "",
                  age: formData.get("age") ?? "",
                  coat: formData.get("coat") ?? "",
                };

                setData(obj);
              }}
            >
              <label htmlFor="type">
                Animals
                <select
                  className="form-control"
                  name="type"
                  value={animal}
                  onChange={(e) => setAnimal(e.target.value)}
                >
                  <option></option>
                  {types.map((type) => (
                    <option key={type} value={type} id="type">
                      {type}
                    </option>
                  ))}
                </select>
              </label>
              <br />
              <label htmlFor="breeds">
                Breeds
                <select
                  disabled={breeds.length === 0}
                  name="breed"
                  className="form-control"
                >
                  <option></option>
                  {breeds.map((breed) => (
                    <option key={breed.name} value={breed.name}>
                      {breed.name}
                    </option>
                  ))}
                </select>
              </label>
              <br />
              <label htmlFor="size">
                Size
                <select name="size" className="form-control">
                  <option></option>
                  {sizes.map((size) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
              </label>
              <br />
              <label htmlFor="gender">
                Gender
                <select name="gender" className="form-control">
                  <option></option>
                  {genders.map((gender) => (
                    <option key={gender} value={gender}>
                      {gender}
                    </option>
                  ))}
                </select>
              </label>
              <br />
              <label htmlFor="age">
                Age
                <select name="age" className="form-control">
                  <option></option>
                  {ages.map((age) => (
                    <option key={age} value={age}>
                      {age}
                    </option>
                  ))}
                </select>
              </label>
              <br />
              <label htmlFor="coat">
                Coat
                <select name="coat" className="form-control">
                  <option></option>
                  {coats.map((coat) => (
                    <option key={coat} value={coat}>
                      {coat}
                    </option>
                  ))}
                </select>
              </label>

              <button type="submit" className="submit-btn">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>

      <div>
        <h1 className="second-h1">Pet available for adoption nearby</h1>
        <Results pets={pets?.data?.animals ?? []} />
      </div>
      <div className="plan-container">
        <h1>Planning to adopt a pet?</h1>
        <div className="plan-row">
          <div className="plan-col">
            <h2>Planning</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              excepturi.
            </p>
          </div>
          <div className="plan-col">
            <h2>Planning</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              excepturi.
            </p>
          </div>
          <div className="plan-col">
            <h2>Planning</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              excepturi.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
