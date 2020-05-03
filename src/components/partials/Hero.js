import React, { useEffect, useState } from "react";
import Swiper from "react-id-swiper";
import hero1 from "../../images/hero1.jpg";
import hero2 from "../../images/hero2.jpg";
import hero3 from "../../images/hero3.jpg";
import hero4 from "../../images/hero4.jpg";
import hero5 from "../../images/hero5.jpg";
import hero6 from "../../images/hero6.jpg";
import hero7 from "../../images/hero7.jpg";
import Navbar from "./Navbar";
import Axios from "axios";

export default function Hero() {
  const baseUrl = "http://digistyle.test/wp-json/digistyle/v1";
  const imgUri = "/hero";

  const [bannerImgs, setBannerImgs] = useState([]);

  useEffect(() => {
    Axios({
      url: baseUrl + imgUri,
      method: "GET",
    })
      .then((res) => {
        setBannerImgs(res.data);
        Swiper.update();
      })
      .catch((e) => console.log(e.response));
  }, []);
  const params = {
    centeredSlides: true,
    shouldSwiperUpdate: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
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
  console.log(bannerImgs);

  const bannerImgss = bannerImgs.map((item, index) => {
    return (
      <div
        className="w-100 vh-100"
        key={index}
        style={{
          background: `url(${item}) center/cover no-repeat`,
        }}
      ></div>
    );
  });
  return (
    <div className="container-fluid hero w-100 vh-100 border m-0 p-0">
      <Navbar absolute={true} />

      {bannerImgss ? <Swiper {...params}>{bannerImgss}</Swiper> : ""}
    </div>
  );
}
