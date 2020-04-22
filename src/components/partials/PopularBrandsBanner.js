import React from "react";
import brandsBanner1 from "../../images/brandsBanner1.jpg";
import brandsBanner2 from "../../images/brandsBanner2.jpg";
import brandsBanner3 from "../../images/brandsBanner3.jpg";
import brandsBanner4 from "../../images/brandsBanner4.jpg";

export default function PopularBrandsBanner() {
  return (
    <div className="brands-banner">
      <h1 className="py-md-2 brands-banner-title">
        <span>Adidas</span>
      </h1>
      <div className="row m-0 p-0">
        <div
          className="col-6"
          style={{
            height: 200,
            background: `url(${brandsBanner1}) center/cover no-repeat`,
          }}
        >
          <span className="brands-banner-desc">59% off</span>
        </div>
        <div
          className="col-6"
          style={{
            height: 200,
            background: `url(${brandsBanner2}) center/cover no-repeat`,
          }}
        >
          {" "}
          <span className="brands-banner-desc">59% off</span>
        </div>
        <div
          className="col-6"
          style={{
            height: 200,
            background: `url(${brandsBanner3}) center/cover no-repeat`,
          }}
        >
          {" "}
          <span className="brands-banner-desc">59% off</span>
        </div>
        <div
          className="col-6"
          style={{
            height: 200,
            background: `url(${brandsBanner4}) center/cover no-repeat`,
          }}
        >
          {" "}
          <span className="brands-banner-desc">59% off</span>
        </div>
      </div>
    </div>
  );
}
