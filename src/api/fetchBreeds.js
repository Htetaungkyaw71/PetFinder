const FetchBreeds = async ({ queryKey }) => {
  let token = queryKey[2];
  let animal = queryKey[1];
  if (!animal) return [];
  if (!token) return [];
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  let res = await fetch(`https://api.petfinder.com/v2/types/${animal}/breeds`, {
    headers: headers,
  });

  if (!res.ok) {
    throw new Error("fetch breed is not ok");
  }

  return res.json();
};

export default FetchBreeds;
