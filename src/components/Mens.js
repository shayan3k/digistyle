import React from "react";
import Navbar from "./partials/Navbar";
import MensHero from "./partials/MensHero";
import MensItems from "./partials/MensItems";
import Footer from "./partials/Footer";
import MensPopularCarousel from "./partials/MensPopularCarousel";
import Developer from "./partials/Developer";

export default function Mens() {
  return (
    <>
      <Navbar />
      <MensHero />
      <MensItems />
      <MensPopularCarousel />
      <Footer />
      <Developer />
    </>
  );
}
