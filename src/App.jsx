import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./components/Home";
import Detail from "./components/Detail";
import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";
import TokenContext from "./components/TokenContext";

function App() {
  const query = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
        cacheTime: Infinity,
      },
    },
  });

  let [token, setToken] = useState("");
  async function fetchToken() {
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
    let data = await res.json();
    setToken(data.access_token);
  }

  useEffect(() => {
    fetchToken();
  }, []);

  return (
    <BrowserRouter>
      <QueryClientProvider client={query}>
        <TokenContext.Provider value={token}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home itemsPerPage={10} />} />
            <Route path="/details/:id" element={<Detail token={token} />} />
          </Routes>
        </TokenContext.Provider>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
