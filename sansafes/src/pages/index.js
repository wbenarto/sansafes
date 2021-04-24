import React from "react";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Products from "../components/Products";
import Affiliated from "../components/Affiliated";
const Home = () => {
  return (
    <>
      <Navbar />
      <Main />
      <Products />
      <Affiliated />
    </>
  );
};

export default Home;
