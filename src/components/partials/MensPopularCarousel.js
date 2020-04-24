import React from "react";
import MensPopularCarouselImg from "../../images/MensPopularCarousel.jpg";
import Swiper from "react-id-swiper";

const MensPopularCarousel = () => {
  const params = {
    slidesPerView: 3,
    spaceBetween: 30,
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
      <Swiper {...params}>
        <div className="m-1 items-card">
          <div className="">
            <img
              className="w-100 h-100"
              src={MensPopularCarouselImg}
              alt="عکس"
            />
            <span className="brands-banner-desc">59% off</span>
          </div>
          <div>
            <div>
              <span>188.000</span>
              <span>Buynet</span>
            </div>
            <div>
              <span>تومان 138.000</span>
              <span>سوییشرت مردانه بای نت کد 563-1</span>
            </div>
          </div>
        </div>
        <div>
          <img className="w-100 h-100" src={MensPopularCarouselImg} alt="عکس" />
        </div>
        <div>
          <img className="w-100 h-100" src={MensPopularCarouselImg} alt="عکس" />
        </div>
        <div>
          <img className="w-100 h-100" src={MensPopularCarouselImg} alt="عکس" />
        </div>
        <div>
          <img className="w-100 h-100" src={MensPopularCarouselImg} alt="عکس" />
        </div>
        <div>
          <img className="w-100 h-100" src={MensPopularCarouselImg} alt="عکس" />
        </div>
        <div>
          <img className="w-100 h-100" src={MensPopularCarouselImg} alt="عکس" />
        </div>
      </Swiper>
    </div>
  );
};
export default MensPopularCarousel;
