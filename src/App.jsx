import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Home from "./components/Home";
import Detail from "./components/Detail";
import Navbar from "./components/Navbar";
import TokenContext from "./components/TokenContext";
import fetchToken from "./api/fetchToken";
import logo from "../src/assets/logo.png";

function App() {
  let results = useQuery(["token"], fetchToken);

  if (results.isLoading) {
    return (
      <div className="loader-container">
        <div className="loader">
          <span>
            <img src={logo} className="logo" alt="spinner" />
          </span>
        </div>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <TokenContext.Provider value={results.data.access_token}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home itemsPerPage={10} />} />
          <Route path="/details/:id" element={<Detail />} />
        </Routes>
      </TokenContext.Provider>
    </BrowserRouter>
  );
}

export default App;
