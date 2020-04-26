import React from "react";
import BestBrandsImg1 from "../../images/OurBrands1.jpg";
import BestBrandsImg2 from "../../images/OurBrands2.jpg";
import BestBrandsImg3 from "../../images/OurBrands3.jpg";
import BestBrandsImg4 from "../../images/OurBrands4.jpg";

export default function OurBrands() {
  return (
    <div className="container-fluid">
      <h1 className="brand-our-brands-title mt-4 mb-3">برندهای دیجی‌استایل</h1>
      <div className="row m-0 p-0 brand-our-brands-gallery my-4">
        <div className="col-3 p-0 px-1 m-0">
          <img className="w-100 h-100" src={BestBrandsImg1} alt="عکس" />
        </div>
        <div className="col-3  p-0 px-1 m-0">
          <img className="w-100 h-100" src={BestBrandsImg2} alt="عکس" />
        </div>
        <div className="col-3 p-0 px-1 m-0">
          <img className="w-100 h-100" src={BestBrandsImg3} alt="عکس" />
        </div>
        <div className="col-3  p-0 px-1 m-0">
          <img className="w-100 h-100" src={BestBrandsImg4} alt="عکس" />
        </div>
      </div>
    </div>
  );
}
