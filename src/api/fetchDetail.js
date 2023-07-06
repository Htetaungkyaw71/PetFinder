const FetchDetail = async ({ queryKey }) => {
  let token = queryKey[2];
  let id = queryKey[1];
  if (!id) return [];
  if (!token) return [];
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  let res = await fetch(`https://api.petfinder.com/v2/animals/${id}`, {
    headers: headers,
  });

  if (!res.ok) {
    throw new Error("fetch detail is not ok");
  }

  return res.json();
};

export default FetchDetail;
