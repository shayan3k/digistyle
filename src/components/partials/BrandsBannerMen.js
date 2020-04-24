import React from "react";
import BrandsBannerMen1 from "../../images/brandsBannerMen1.jpg";
import BrandsBannerMen2 from "../../images/brandsBannerMen2.jpg";
import BrandsBannerMen3 from "../../images/brandsBannerMen3.jpg";
import BrandsBannerMen4 from "../../images/brandsBannerMen4.jpg";

function BrandsBannerMen() {
  return (
    <div className="container p-md-5">
      <div className="brands-banner-grid-container">
        <div className="brands-banner-item1">
          <img className="w-100 h-100" src={BrandsBannerMen1} alt="عکس" />
        </div>
        <div className="brands-banner-item2">
          <img className="w-100 h-100" src={BrandsBannerMen2} alt="عکس" />
        </div>
        <div className="brands-banner-item3">
          <img className="w-100 h-100" src={BrandsBannerMen3} alt="عکس" />
        </div>
        <div className="brands-banner-item4">
          <img className="w-100 h-100" src={BrandsBannerMen4} alt="عکس" />
        </div>
      </div>
    </div>
  );
}

export default BrandsBannerMen;
