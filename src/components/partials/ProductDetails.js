import React from "react";

function ProductDetails() {
  return (
    <div className="container">
      <ul
        className="nav mb-3 product-info-details-list p-0"
        id="pills-tab"
        role="tablist"
      >
        <li className="nav-item">
          <a
            className="nav-link active"
            id="pills-home-tab"
            data-toggle="pill"
            href="#pills-home"
            role="tab"
            aria-controls="pills-home"
            aria-selected="true"
          >
            مشخصات محصول
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            id="pills-profile-tab"
            data-toggle="pill"
            href="#pills-profile"
            role="tab"
            aria-controls="pills-profile"
            aria-selected="false"
          >
            نظرات کاربران
          </a>
        </li>
      </ul>
      <div
        className="tab-content product-info-details-content-container"
        id="pills-tabContent"
      >
        <div
          className="tab-pane fade show active product-info-details-content"
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
          <h1 className="product-info-details-content-title">
            مشخصات کلی محصول
          </h1>
          <ul className="w-100 product-info-details-content-list">
            <li className="product-info-details-content-list-item row">
              <div className="col-md-3">جنس</div>
              <div className="col-md-9">پارچه پارچه مش</div>
            </li>
            <li className="product-info-details-content-list-item row">
              <div className="col-md-3">کفی کفش</div>
              <div className="col-md-9">پارچه پارچه مش</div>
            </li>
            <li className="product-info-details-content-list-item row">
              <div className="col-md-3">زیره کفش</div>
              <div className="col-md-9">پارچه پارچه مش</div>
            </li>
            <li className="product-info-details-content-list-item row">
              <div className="col-md-3">ویژگی های تخصصی</div>
              <div className="col-md-9">پارچه پارچه مش</div>
            </li>
            <li className="product-info-details-content-list-item row">
              <div className="col-md-3">نحوه بسته شدن</div>
              <div className="col-md-9">بند</div>
            </li>
          </ul>
        </div>
        <div
          className="tab-pane fade product-info-details-content container mx-auto"
          id="pills-profile"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
        >
          <div class="product-info-comment">
            <div class="product-info-comment-title"></div>
            <div class="product-info-comment-author d-flex justify-content-between align-items-center">
              <div>
                نوشته شده توسط
                <a href="#"> حمید رحمانی</a>، خریدار سایز ۴۳
              </div>
              <div>
                خریداری شده از
                <a target="_blank" class="product-info-comment-seller">
                  کفش افرا
                </a>
              </div>
            </div>
            <p class="product-info-comment-text">راضی بودم خوب بود</p>
            <div class="product-info-comment-like  d-flex justify-content-between align-items-center">
              <i class="fas fa-thumbs-up "></i>
              <span> خرید این محصول را حتماً پیشنهاد می کنم.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
