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
  const handleProductImgClick = (e) => {
    console.log("clicked");
    document.querySelector(".product-info-img-grid-active").src = e.target.src;
  };

  return (
    <div className="container row my-md-5 mx-auto p-0 py-md-5 product-info">
      <div className="col-12 col-md-5 d-flex flex-column justify-content-between align-items-center">
        <div className="p-0 m-0">
          <div className="d-flex justify-content-between align-items-center mb-md-1">
            <span className="">
              <i className="fa fa-share-alt fa-2x" aria-hidden="true"></i>
            </span>
            <span className="product-info-category-title">متفرقه </span>
          </div>
          <h3 className="product-info-name  mb-md-4">
            کفش مخصوص پیاده روی مردانه کد UM
          </h3>
          <div className="d-flex justify-content-between align-items-center">
            <span className="product-info-sale">تخفیف: 48 تومان</span>

            <span className="product-info-prev-price">تومان 198000 </span>
          </div>
          <h3 className="product-info-price mb-md-4">تومان 15000</h3>
          <form action="">
            <div className="input-group">
              <select className="form-control" name="" id="">
                <option value="">14</option>
              </select>
            </div>
            <div className="input-group d-flex justify-content-between align-items-center mb-md-3">
              <Link className="product-info-btn product-info-buy-later-btn">
                بعدا می خرم
              </Link>
              <Link className="product-info-btn product-info-buy-btn">
                می خرم
              </Link>
            </div>
          </form>
          <div className="row m-0 p-0">
            <div className="col-4 d-flex justify-content-between align-items-center product-info-support">
              <span>ضمانت هفت روز بازگشت کالا</span>
              <img src="http://placehold.jp/150x150.png" alt="عکس" />
            </div>
            <div className="col-4 d-flex justify-content-between align-items-center product-info-support">
              <span>ضمانت هفت روز بازگشت کالا</span>
              <img src="http://placehold.jp/150x150.png" alt="عکس" />
            </div>
            <div className="col-4 d-flex justify-content-between align-items-center product-info-support">
              <span>ضمانت هفت روز بازگشت کالا</span>
              <img src="http://placehold.jp/150x150.png" alt="عکس" />
            </div>
          </div>
        </div>
        <div className="p-0 m-0v w-100">
          <h1 className="product-info-seller">فروش توسط کفش افرا</h1>
          <hr />
          <div className="d-flex justify-content-between align-items-center">
            <span className="product-info-seller-support">
              گارانتی اصالت و سلامت کالا <i className="fa fa-spinner"></i>
            </span>

            <span className="product-info-seller-support">
              ارسال از ۱ روز کاری <i className="fa fa-spinner"></i>
            </span>
          </div>
        </div>
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
          onClick={handleProductImgClick}
          alt="عکس"
        />
        <img
          className="product-info-img-grid-item"
          onClick={handleProductImgClick}
          src={ProductImg2}
          alt="عکس"
        />
        <img
          className="product-info-img-grid-item"
          src={ProductImg3}
          onClick={handleProductImgClick}
          alt="عکس"
        />
        <img
          className="product-info-img-grid-item"
          src={ProductImg4}
          onClick={handleProductImgClick}
          alt="عکس"
        />
        <img
          className="product-info-img-grid-item"
          src={ProductImg5}
          onClick={handleProductImgClick}
          alt="عکس"
        />
        <img
          className="product-info-img-grid-item"
          src={ProductImg6}
          onClick={handleProductImgClick}
          alt="عکس"
        />
        <img
          className="product-info-img-grid-item"
          src={ProductImg7}
          onClick={handleProductImgClick}
          alt="عکس"
        />
      </div>
    </div>
  );
}

export default ProductInfo;
