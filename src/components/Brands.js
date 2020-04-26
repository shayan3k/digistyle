import React from "react";
import Navbar from "./partials/Navbar";
import Footer from "./partials/Footer";
import OurBrands from "./partials/OurBrands";
import Developer from "./partials/Developer";
import BrandsLists from "./partials/BrandsLists";
export default function Brands() {
  return (
    <>
      <Navbar />

      <OurBrands />

      <BrandsLists />

      <Footer />
      <Developer />
    </>
  );
}
