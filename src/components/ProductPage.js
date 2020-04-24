import React from "react";
import Navbar from "./partials/Navbar";
import MensHero from "./partials/MensHero";
import MensItems from "./partials/MensItems";
import Footer from "./partials/Footer";
import BrandsBannerMen from "./partials/BrandsBannerMen";
import SupportSection from "./partials/SupportSection";
import MensPopularCarousel from "./partials/MensPopularCarousel";
import ProductDetails from "./partials/ProductDetails";
import ProductInfo from "./partials/ProductInfo";
import BreadCrumbs from "./partials/BreadCrumbs";
import Developer from "./partials/Developer";

export default function ProductPage() {
  return (
    <>
      <Navbar />
      <BreadCrumbs />
      <ProductInfo />
      <ProductDetails />

      <Footer />
      <Developer />
    </>
  );
}
