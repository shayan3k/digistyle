import React from "react";
import Navbar from "./partials/Navbar";
import Footer from "./partials/Footer";
import CategoriesGallery from "./partials/CategoriesGallery";
import CategoriesSidebar from "./partials/CategoriesSidebar";
import Developer from "./partials/Developer";

export default function Categories() {
  return (
    <>
      <Navbar />

      <div className="container-fluid row mx-auto">
        <div className="col-md-9">
          <CategoriesGallery />
        </div>
        <div className="col-md-3 text-right ">
          <CategoriesSidebar />
        </div>
      </div>

      <Footer />
      <Developer />
    </>
  );
}
