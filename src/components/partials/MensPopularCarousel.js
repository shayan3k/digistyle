import React from "react";
import MensPopularCarouselImg from "../../images/MensPopularCarousel.jpg";
import Swiper from "react-id-swiper";

const MensPopularCarousel = () => {
  const params = {
    slidesPerView: 4,
    navigation: {
      nextEl: ".swiper-button-next-mens",
      prevEl: ".swiper-button-prev-mens",
    },
    renderPrevButton: () => (
      <button className="swiper-button-prev-mens">
        <i className="fa fa-arrow-left fa-2x"></i>
      </button>
    ),
    renderNextButton: () => (
      <button className="swiper-button-next-mens">
        <i className="fa fa-arrow-right fa-2x"></i>
      </button>
    ),
  };
  return (
    <div className="container swiper-mens-popular">
      <h1 className="text-right mt-md-3 mb-md-5">
        <span className="mens-popular-title">محبوبترین ها</span>
      </h1>
      <Swiper {...params}>
        <div className="m-1 px-2 items-card">
          <div className="item-card">
            <div className=" position-relative h-100">
              <img
                className="w-100 h-100"
                src={MensPopularCarouselImg}
                alt="عکس"
              />
              <span className="brands-banner-desc">59% off</span>
            </div>
          </div>
          <div className="mt-4">
            <div className="d-flex justify-content-between align-items-center px-3">
              <span className="item-card-prev-price">188.000</span>
              <span className="item-card-brand">Buynet</span>
            </div>
            <div className="item-card-price d-flex justify-content-between align-items-center px-3 nowrap">
              <span>تومان 138.000</span>
              <span className="item-card-text">
                سوییشرت مردانه بای نت کد 563-1
              </span>
            </div>
          </div>
        </div>

        <div className="m-1 px-2 items-card">
          <div className="item-card">
            <div className=" position-relative h-100">
              <img
                className="w-100 h-100"
                src={MensPopularCarouselImg}
                alt="عکس"
              />
              <span className="brands-banner-desc">59% off</span>
            </div>
          </div>
          <div className="mt-4">
            <div className="d-flex justify-content-between align-items-center px-3">
              <span className="item-card-prev-price">188.000</span>
              <span className="item-card-brand">Buynet</span>
            </div>
            <div className="item-card-price d-flex justify-content-between align-items-center px-3 nowrap">
              <span>تومان 138.000</span>
              <span className="item-card-text">
                سوییشرت مردانه بای نت کد 563-1
              </span>
            </div>
          </div>
        </div>
        <div className="m-1 px-2 items-card">
          <div className="item-card">
            <div className=" position-relative h-100">
              <img
                className="w-100 h-100"
                src={MensPopularCarouselImg}
                alt="عکس"
              />
              <span className="brands-banner-desc">59% off</span>
            </div>
          </div>
          <div className="mt-4">
            <div className="d-flex justify-content-between align-items-center px-3">
              <span className="item-card-prev-price">188.000</span>
              <span className="item-card-brand">Buynet</span>
            </div>
            <div className="item-card-price d-flex justify-content-between align-items-center px-3 nowrap">
              <span>تومان 138.000</span>
              <span className="item-card-text">
                سوییشرت مردانه بای نت کد 563-1
              </span>
            </div>
          </div>
        </div>

        <div className="m-1 px-2 items-card">
          <div className="item-card">
            <div className=" position-relative h-100">
              <img
                className="w-100 h-100"
                src={MensPopularCarouselImg}
                alt="عکس"
              />
              <span className="brands-banner-desc">59% off</span>
            </div>
          </div>
          <div className="mt-4">
            <div className="d-flex justify-content-between align-items-center px-3">
              <span className="item-card-prev-price">188.000</span>
              <span className="item-card-brand">Buynet</span>
            </div>
            <div className="item-card-price d-flex justify-content-between align-items-center px-3 nowrap">
              <span>تومان 138.000</span>
              <span className="item-card-text">
                سوییشرت مردانه بای نت کد 563-1
              </span>
            </div>
          </div>
        </div>

        <div className="m-1 px-2 items-card">
          <div className="item-card">
            <div className=" position-relative h-100">
              <img
                className="w-100 h-100"
                src={MensPopularCarouselImg}
                alt="عکس"
              />
              <span className="brands-banner-desc">59% off</span>
            </div>
          </div>
          <div className="mt-4">
            <div className="d-flex justify-content-between align-items-center px-3">
              <span className="item-card-prev-price">188.000</span>
              <span className="item-card-brand">Buynet</span>
            </div>
            <div className="item-card-price d-flex justify-content-between align-items-center px-3 nowrap">
              <span>تومان 138.000</span>
              <span className="item-card-text">
                سوییشرت مردانه بای نت کد 563-1
              </span>
            </div>
          </div>
        </div>

        <div className="m-1 px-2 items-card">
          <div className="item-card">
            <div className=" position-relative h-100">
              <img
                className="w-100 h-100"
                src={MensPopularCarouselImg}
                alt="عکس"
              />
              <span className="brands-banner-desc">59% off</span>
            </div>
          </div>
          <div className="mt-4">
            <div className="d-flex justify-content-between align-items-center px-3">
              <span className="item-card-prev-price">188.000</span>
              <span className="item-card-brand">Buynet</span>
            </div>
            <div className="item-card-price d-flex justify-content-between align-items-center px-3 nowrap">
              <span>تومان 138.000</span>
              <span className="item-card-text">
                سوییشرت مردانه بای نت کد 563-1
              </span>
            </div>
          </div>
        </div>

        <div className="m-1 px-2 items-card">
          <div className="item-card">
            <div className=" position-relative h-100">
              <img
                className="w-100 h-100"
                src={MensPopularCarouselImg}
                alt="عکس"
              />
              <span className="brands-banner-desc">59% off</span>
            </div>
          </div>
          <div className="mt-4">
            <div className="d-flex justify-content-between align-items-center px-3">
              <span className="item-card-prev-price">188.000</span>
              <span className="item-card-brand">Buynet</span>
            </div>
            <div className="item-card-price d-flex justify-content-between align-items-center px-3 nowrap">
              <span>تومان 138.000</span>
              <span className="item-card-text">
                سوییشرت مردانه بای نت کد 563-1
              </span>
            </div>
          </div>
        </div>
      </Swiper>
      <div className="read-more-btn-container text-center mt-md-3 mb-md-5 py-md-5">
        <button className="read-more-btn">مشاهده همه</button>
      </div>
    </div>
  );
};
export default MensPopularCarousel;
