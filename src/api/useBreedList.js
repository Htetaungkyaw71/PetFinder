import { useQuery } from "@tanstack/react-query";
import FetchBreeds from "./fetchBreeds";

const useBreedList = (animal, token) => {
  let results = useQuery(["breeds", animal, token], FetchBreeds);

  return [results?.data?.breeds ?? [], results.status];
};

export default useBreedList;
