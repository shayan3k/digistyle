import React from "react";
import BestBrandsBanner from "./BestBrandsBanner";

export default function BestBrands() {
  return (
    <div className="container row mx-auto border-bottom">
      <hr />
      <div className="col-md-6 m-0 px-1 px-md-5">
        <BestBrandsBanner />
      </div>
      <div className="col-md-6 m-0 px-1 px-md-5">
        <BestBrandsBanner />
      </div>
      <hr />
    </div>
  );
}
