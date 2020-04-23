import React from "react";
import Swiper from "react-id-swiper";
import hero1 from "../../images/hero1.jpg";
import hero2 from "../../images/hero2.jpg";
import hero3 from "../../images/hero3.jpg";
import hero4 from "../../images/hero4.jpg";
import hero5 from "../../images/hero5.jpg";
import hero6 from "../../images/hero6.jpg";
import hero7 from "../../images/hero7.jpg";
import Navbar from "./Navbar";

export default function Hero() {
  const params = {
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    renderPrevButton: () => (
      <button className="swiper-button-prev">
        <i className="fa fa-arrow-left fa-2x"></i>
      </button>
    ),
    renderNextButton: () => (
      <button className="swiper-button-next">
        <i className="fa fa-arrow-right fa-2x"></i>
      </button>
    ),
  };

  return (
    <div className="container-fluid hero w-100 vh-100 border m-0 p-0">
      <Navbar absolute={true} />
      <Swiper {...params}>
        <div
          className="w-100 vh-100"
          style={{
            background: `url(${hero1}) center/cover no-repeat`,
          }}
        ></div>

        <div
          className="w-100 vh-100"
          style={{
            background: `url(${hero2}) center/cover no-repeat`,
          }}
        ></div>

        <div
          className="w-100 vh-100"
          style={{
            background: `url(${hero3}) center/cover no-repeat`,
          }}
        ></div>

        <div
          className="w-100 vh-100"
          style={{
            background: `url(${hero4}) center/cover no-repeat`,
          }}
        ></div>

        <div
          className="w-100 vh-100"
          style={{
            background: `url(${hero5}) center/cover no-repeat`,
          }}
        ></div>

        <div
          className="w-100 vh-100"
          style={{
            background: `url(${hero6}) center/cover no-repeat`,
          }}
        ></div>

        <div
          className="w-100 vh-100"
          style={{
            background: `url(${hero7}) center/cover no-repeat`,
          }}
        ></div>
      </Swiper>
    </div>
  );
}
