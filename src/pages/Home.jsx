import React from "react";
import Hero from "../components/Hero";
import Destination from "../components/Destination";
import Offer from "../components/Offer";
import Review from "../components/Review";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";


function Home() {
  return (
    <>
      <Hero />
      <Destination />
      <Offer />
      <Review />
      <NewsLetter />
    </>
  );
}

export default Home;
