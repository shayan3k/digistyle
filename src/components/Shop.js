import React from "react";
import Hero from "./partials/Hero";
import PopularBrands from "./partials/PopularBrands";
import BestBrands from "./partials/BestBrands";
import SupportSection from "./partials/SupportSection";

export default function Shop() {
  return (
    <>
      <Hero />
      <PopularBrands />
      <BestBrands />
      <SupportSection />
    </>
  );
}
