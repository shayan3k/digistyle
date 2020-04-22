import React from "react";
import PopularBrandsBanner from "./PopularBrandsBanner";

export default function PopularBrands() {
  return (
    <div className="container-fluid popular-brands py-md-4 my-md-4 border-bottom">
      <h1 className="popular-brands-title text-center mb-md-4 py-md-4">
        <span> از پرطرفدارترین برندهای دیجی‌استایل</span>
      </h1>
      <div className="container-fluid row m-0 px-4 px-md-1 mb-md-5">
        <div className="col-12 col-md-4">
          <PopularBrandsBanner />
        </div>
        <div className="col-12 col-md-4">
          <PopularBrandsBanner />
        </div>
        <div className="col-12 col-md-4">
          <PopularBrandsBanner />
        </div>
      </div>
    </div>
  );
}
