/* eslint-disable no-unused-vars */
import { useState, useContext } from "react";
import useBreedList from "../api/useBreedList";
import { useQuery } from "@tanstack/react-query";
import FetchAnimals from "../api/fetchanimals";
import TokenContext from "./TokenContext";

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
      <h1>Hello This is Petfinder app</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore,
        repellat, ipsum necessitatibus eveniet cumque aliquid optio recusandae
        non numquam iusto, quod exercitationem. Cupiditate officia tempore fuga
        iusto reiciendis nisi libero.
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
            <select disabled={breeds.length === 0} name="breed">
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
            <select name="size">
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
            <select name="gender">
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
            <select name="age">
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
            <select name="coat">
              <option></option>
              {coats.map((coat) => (
                <option key={coat} value={coat}>
                  {coat}
                </option>
              ))}
            </select>
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>

        <div>{pets?.data?.animals?.[0]?.name ?? "hello"}</div>
      </div>
    </>
  );
};

export default Home;
