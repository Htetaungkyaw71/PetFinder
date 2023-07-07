const fetchToken = async () => {
  let obj = {
    grant_type: "client_credentials",
    client_id: "67UDiRAgp5Z5vp2zwou7ml1PPi964mUOQOMMRC8st4TmxqrVNS",
    client_secret: "MAwFekQ8WAq4SOhQeQ4IDmcqwHU9SPLFCx2L80i4",
  };
  let res = await fetch(`https://api.petfinder.com/v2/oauth2/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  });
  if (!res.ok) {
    throw new Error("Failed to fetch access token");
  }
  return res.json();
};

export default fetchToken;
