import React from "react";
import Navbar from "./partials/Navbar";
import MensHero from "./partials/MensHero";
import MensItems from "./partials/MensItems";
import Footer from "./partials/Footer";
import BrandsBannerMen from "./partials/BrandsBannerMen";
import SupportSection from "./partials/SupportSection";
import MensPopularCarousel from "./partials/MensPopularCarousel";
import Developer from "./partials/Developer";

export default function Mens() {
  return (
    <>
      <Navbar />
      <MensHero />
      <MensItems />
      <MensPopularCarousel />
      <BrandsBannerMen />
      <MensPopularCarousel />
      <MensPopularCarousel />
      <SupportSection />
      <Footer />
      <Developer />
    </>
  );
}
