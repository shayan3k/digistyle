import React from "react";
import Navbar from "./partials/Navbar";
import Footer from "./partials/Footer";
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
