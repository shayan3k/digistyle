import React from "react";
import Hero from "./partials/Hero";
import PopularBrands from "./partials/PopularBrands";
import BestBrands from "./partials/BestBrands";
import SupportSection from "./partials/SupportSection";
import Footer from "./partials/Footer";
import Branding from "./partials/Branding";
import Developer from "./partials/Developer";

export default function Shop() {
  return (
    <>
      <Hero />
      <PopularBrands />
      <BestBrands />
      <SupportSection />
      <Footer />
      <Branding />
      <Developer />
    </>
  );
}
