import React from "react";
import worldbrand1 from "../../images/worldbrand1.png";
import worldbrand2 from "../../images/worldbrand2.png";
import worldbrand3 from "../../images/worldbrand3.png";
import worldbrand4 from "../../images/worldbrand4.png";
import worldbrand5 from "../../images/worldbrand5.jpg";
import worldbrand6 from "../../images/worldbrand6.jpg";
import worldbrand7 from "../../images/worldbrand7.png";
import worldbrand8 from "../../images/worldbrand8.png";

export default function BestBrandsBanner() {
  return (
    <div className="best-brands-banner my-md-4 py-md-4">
      <h1 className="best-brands-banner-title text-center my-md-4">
        <span>برترین برندها</span>
      </h1>
      <div className="row m-0 px-2  best-brands-banner-border-right">
        <div className="col-3 px-1 best-brands-banner-item d-flex justify-content-center align-items-center">
          <a href="#" className="best-brands-banner-link">
            <img src={worldbrand1} alt="کیف" />
          </a>
        </div>
        <div className="col-3 px-1 best-brands-banner-item d-flex justify-content-center align-items-center">
          <a href="#" className="best-brands-banner-link">
            <img src={worldbrand2} alt="کیف" />
          </a>
        </div>
        <div className="col-3 px-1 best-brands-banner-item d-flex justify-content-center align-items-center">
          <a href="#" className="best-brands-banner-link">
            <img src={worldbrand3} alt="کیف" />
          </a>
        </div>
        <div className="col-3 px-1 best-brands-banner-item d-flex justify-content-center align-items-center">
          <a href="#" className="best-brands-banner-link">
            <img src={worldbrand4} alt="کیف" />
          </a>
        </div>
        <div className="col-3 px-1 best-brands-banner-item d-flex justify-content-center align-items-center">
          <a href="#" className="best-brands-banner-link">
            <img src={worldbrand5} alt="کیف" />
          </a>
        </div>
        <div className="col-3 px-1 best-brands-banner-item d-flex justify-content-center align-items-center">
          <a href="#" className="best-brands-banner-link">
            <img src={worldbrand6} alt="کیف" />
          </a>
        </div>
        <div className="col-3 px-1 best-brands-banner-item d-flex justify-content-center align-items-center">
          <a href="#" className="best-brands-banner-link">
            <img src={worldbrand7} alt="کیف" />
          </a>
        </div>
        <div className="col-3 px-1 best-brands-banner-item d-flex justify-content-center align-items-center">
          <a href="#" className="best-brands-banner-link">
            <img src={worldbrand8} alt="کیف" />
          </a>
        </div>
      </div>
    </div>
  );
}
