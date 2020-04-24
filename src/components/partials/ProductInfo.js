import React from "react";
import ProductImg1 from "../../images/itemImg1.jpg";
import ProductImg2 from "../../images/itemImg2.jpg";
import ProductImg3 from "../../images/itemImg3.jpg";
import ProductImg4 from "../../images/itemImg4.jpg";
import ProductImg5 from "../../images/itemImg5.jpg";
import ProductImg6 from "../../images/itemImg6.jpg";
import ProductImg7 from "../../images/itemImg7.jpg";
import ProductImg8 from "../../images/itemImg8.jpg";
import { Link } from "react-router-dom";

function ProductInfo() {
  return (
    <div className="container row m-0 mx-auto p-0 product-info">
      <div className="col-12 col-md-5">
        <div className="d-flex justify-content-between align-items-center">
          <span>
            <i className="fa fa-share-alt" aria-hidden="true"></i>
          </span>
          <span>متفرقه </span>
        </div>
        <h3>کفش مخصوص پیاده روی مردانه کد UM</h3>
        <div className="d-flex justify-content-end align-items-center">
          <span>تخفیف: 48 تومان</span>

          <span>تومان 198000 </span>
        </div>
        <h3>تومان 15000</h3>
        <form action="">
          <div className="input-group">
            <select className="form-control" name="" id="">
              <option value="">14</option>
            </select>
          </div>
          <div className="input-group">
            <Link>بعدا می خرم</Link>
            <Link>می خرم</Link>
          </div>
        </form>
      </div>
      <div className="col-12 col-md-7 product-info-img-grid">
        <img
          className="product-info-img-grid-active"
          src={ProductImg1}
          alt="عکس"
        />

        <img
          className="product-info-img-grid-item"
          src={ProductImg1}
          alt="عکس"
        />
        <img
          className="product-info-img-grid-item"
          src={ProductImg2}
          alt="عکس"
        />
        <img
          className="product-info-img-grid-item"
          src={ProductImg3}
          alt="عکس"
        />
        <img
          className="product-info-img-grid-item"
          src={ProductImg4}
          alt="عکس"
        />
        <img
          className="product-info-img-grid-item"
          src={ProductImg5}
          alt="عکس"
        />
        <img
          className="product-info-img-grid-item"
          src={ProductImg6}
          alt="عکس"
        />
        <img
          className="product-info-img-grid-item"
          src={ProductImg7}
          alt="عکس"
        />
      </div>
    </div>
  );
}

export default ProductInfo;
