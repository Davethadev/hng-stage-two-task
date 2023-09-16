import React from "react";
import Header from "../components/Header";
import Featured from "../components/Featured";
import Footer from "../components/Footer";

const Homepage = () => {
  return (
    <main className="w-full">
      <Header />
      <Featured />
      <Footer />
    </main>
  );
};

export default Homepage;
