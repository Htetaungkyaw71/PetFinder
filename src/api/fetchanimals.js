const FetchAnimals = async ({ queryKey }) => {
  const { type, breed, size, gender, age, coat } = queryKey[1];
  let token = queryKey[2];
  if (!token) return [];
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  let url = `https://api.petfinder.com/v2/animals`;

  const searchParams = new URLSearchParams();
  if (size) searchParams.set("size", size);
  if (age) searchParams.set("age", age);
  if (type) searchParams.set("type", type);
  if (gender) searchParams.set("gender", gender);
  if (breed) searchParams.set("breed", breed);
  if (coat) searchParams.set("coat", coat);
  searchParams.set("limit", 100);
  searchParams.set("special_needs", true);

  url = url.split("?")[0] + "?" + searchParams.toString();

  console.log(url);
  let res = await fetch(url, {
    headers: headers,
  });

  if (!res.ok) {
    throw new Error("fetch animal is not ok");
  }

  return res.json();
};

export default FetchAnimals;
