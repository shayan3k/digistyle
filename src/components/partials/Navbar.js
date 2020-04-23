import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MegaMenuImg1 from "../../images/megaMenuMen1.png";
import MegaMenuImg2 from "../../images/megaMenuMen2.png";
import MegaMenuImg3 from "../../images/megaMenuMen3.png";
import MegaMenuImg4 from "../../images/megaMenuMen4.png";
import megaMenuTabIconSport from "../../images/megaMenuIconSport.png";
import megaMenuTabIconBag from "../../images/megaMenuIconBag.webp";
import megaMenuTabIconGlasses from "../../images/megaMenuIconGlasses.webp";
import megaMenuTabIconShirt from "../../images/megaMenuIconShirt.jpg";
import megaMenuTabIconShoe from "../../images/megaMenuIconShoe.png";

export default function Navbar(props) {
  const handleResetMegaMenuTabs = () => {
    document.querySelector(".mega-menu-section-men-banner").style.cssText = "";
    document.querySelector(".mega-menu-section-women-banner").style.cssText =
      "";
    document.querySelector(".mega-menu-section-kids-banner").style.cssText = "";
    document.querySelector(".mega-menu-section-brands-banner").style.cssText =
      "";
  };
  const handleMegaMenuLinksMen = () => {
    handleResetMegaMenuTabs();
    document.querySelector(".mega-menu-section-men-banner").style.cssText =
      "display : block !important";
  };

  const handleMegaMenuLinksWomen = () => {
    handleResetMegaMenuTabs();
    document.querySelector(".mega-menu-section-women-banner").style.cssText =
      "display : block !important";
  };

  const handleMegaMenuLinksKids = () => {
    handleResetMegaMenuTabs();
    document.querySelector(".mega-menu-section-kids-banner").style.cssText =
      "display : block !important";
  };

  const handleMegaMenuLinksBrands = () => {
    handleResetMegaMenuTabs();
    document.querySelector(".mega-menu-section-brands-banner").style.cssText =
      "display : block !important";
  };

  const handleResetMenTabItems = () => {
    document.querySelector(".mega-menu-tab-men-clothing").style.cssText =
      "display : none !important";
    document.querySelector(".mega-menu-tab-men-bag").style.cssText = "";
    document.querySelector(".mega-menu-tab-men-shoe").style.cssText = "";
    document.querySelector(".mega-menu-tab-men-acc").style.cssText = "";
    document.querySelector(".mega-menu-tab-men-sport").style.cssText = "";
  };
  const handleMenTabClothing = () => {
    handleResetMenTabItems();
    document.querySelector(".mega-menu-tab-men-clothing").style.cssText = "";
  };

  const handleMenTabBag = () => {
    handleResetMenTabItems();
    document.querySelector(".mega-menu-tab-men-bag").style.cssText =
      "display : flex !important";
  };

  const handleMenTabShoe = () => {
    handleResetMenTabItems();
    document.querySelector(".mega-menu-tab-men-shoe").style.cssText =
      "display : flex !important";
  };

  const handleMenTabAcc = () => {
    handleResetMenTabItems();
    document.querySelector(".mega-menu-tab-men-acc").style.cssText =
      "display : flex !important";
  };

  const handleMenTabSport = () => {
    handleResetMenTabItems();
    document.querySelector(".mega-menu-tab-men-sport").style.cssText =
      "display : flex !important";
  };

  const handleResetWomenTabItems = () => {
    document.querySelector(".mega-menu-tab-women-clothing").style.cssText =
      "display : none !important";
    document.querySelector(".mega-menu-tab-women-bag").style.cssText = "";
    document.querySelector(".mega-menu-tab-women-shoe").style.cssText = "";
    document.querySelector(".mega-menu-tab-women-acc").style.cssText = "";
    document.querySelector(".mega-menu-tab-women-sport").style.cssText = "";
  };
  const handleWomenTabClothing = () => {
    handleResetWomenTabItems();
    document.querySelector(".mega-menu-tab-women-clothing").style.cssText = "";
  };

  const handleWomenTabBag = () => {
    handleResetWomenTabItems();
    document.querySelector(".mega-menu-tab-women-bag").style.cssText =
      "display : flex !important";
  };

  const handleWomenTabShoe = () => {
    handleResetWomenTabItems();
    document.querySelector(".mega-menu-tab-women-shoe").style.cssText =
      "display : flex !important";
  };

  const handleWomenTabAcc = () => {
    handleResetWomenTabItems();
    document.querySelector(".mega-menu-tab-women-acc").style.cssText =
      "display : flex !important";
  };

  const handleWomenTabSport = () => {
    handleResetWomenTabItems();
    document.querySelector(".mega-menu-tab-women-sport").style.cssText =
      "display : flex !important";
  };

  const handleResetKidsTabItems = () => {
    document.querySelector(".mega-menu-tab-kids-clothing").style.cssText =
      "display : none !important";
    document.querySelector(".mega-menu-tab-kids-bag").style.cssText = "";
    document.querySelector(".mega-menu-tab-kids-shoe").style.cssText = "";
    document.querySelector(".mega-menu-tab-kids-acc").style.cssText = "";
  };
  const handleKidsTabClothing = () => {
    handleResetKidsTabItems();
    document.querySelector(".mega-menu-tab-kids-clothing").style.cssText = "";
  };

  const handleKidsTabBag = () => {
    handleResetKidsTabItems();
    document.querySelector(".mega-menu-tab-kids-bag").style.cssText =
      "display : flex !important";
  };

  const handleKidsTabShoe = () => {
    handleResetKidsTabItems();
    document.querySelector(".mega-menu-tab-kids-shoe").style.cssText =
      "display : flex !important";
  };

  const handleKidsTabAcc = () => {
    handleResetKidsTabItems();
    document.querySelector(".mega-menu-tab-kids-acc").style.cssText =
      "display : flex !important";
  };

  const handleKidsTabSport = () => {
    handleResetKidsTabItems();
    document.querySelector(".mega-menu-tab-kids-sport").style.cssText =
      "display : flex !important";
  };

  const handleResetBrandsTabItems = () => {
    document.querySelector(".mega-menu-tab-brands-clothing").style.cssText =
      "display : none !important";
    document.querySelector(".mega-menu-tab-brands-bag").style.cssText = "";
    document.querySelector(".mega-menu-tab-brands-shoe").style.cssText = "";
    document.querySelector(".mega-menu-tab-brands-acc").style.cssText = "";
  };

  const handleBrandsTabClothing = () => {
    handleResetBrandsTabItems();
    document.querySelector(".mega-menu-tab-brands-clothing").style.cssText = "";
  };

  const handleBrandsTabBag = () => {
    handleResetBrandsTabItems();
    document.querySelector(".mega-menu-tab-brands-bag").style.cssText =
      "display : flex !important";
  };

  const handleBrandsTabShoe = () => {
    handleResetBrandsTabItems();
    document.querySelector(".mega-menu-tab-brands-shoe").style.cssText =
      "display : flex !important";
  };

  const handleBrandsTabAcc = () => {
    handleResetBrandsTabItems();
    document.querySelector(".mega-menu-tab-brands-acc").style.cssText =
      "display : flex !important";
  };

  const handleBrandsTabSport = () => {
    handleResetBrandsTabItems();
    document.querySelector(".mega-menu-tab-brands-sport").style.cssText =
      "display : flex !important";
  };

  return (
    <nav
      className={`container-fluid navbar row m-0 p-0 ${
        props.absolute ? "position-absolute" : ""
      }`}
    >
      <div className="col-4">
        <form className="form-navbar-search w-50 mx-auto">
          <input
            className="input-navbar-search font4"
            type="search"
            placeholder="Search"
          />
          <button className="btn btn-navbar-search" type="submit">
            <i className="fas fa-search"></i>
          </button>
        </form>
      </div>
      <div className="col-4 text-center">
        <a className="m-0 text-center navbar-brand" href="#">
          <span className="font10">D</span>
          <span className="font10">I</span>
          <span className="font10">G</span>
          <span className="font10">I</span>
          <span className="font10">S</span>
          <span className="font10">T</span>
          <span className="font10">Y</span>
          <span className="font10">L</span>
          <span className="font10">E</span>
        </a>
        <div className="mega-menu row m-0 mt-md-2 mx-auto p-0">
          <ul
            className="col-6 d-flex justify-content-between align-items-center list-unstyled"
            style={{ borderRight: "1px solid gold" }}
          >
            <li className="mega-menu-li">
              <Link to="#" className="mega-menu-link">
                کارت هدیه
              </Link>
            </li>
            <li className="mega-menu-li">
              <Link to="#" className="mega-menu-link">
                فروش ویژه
              </Link>
            </li>
            <li className="mega-menu-li">
              <Link
                to="#"
                className="mega-menu-link"
                onMouseOver={handleMegaMenuLinksBrands}
              >
                برندها
              </Link>
            </li>
          </ul>
          <ul className="col-6 d-flex justify-content-between align-items-center list-unstyled h-100">
            <li className="mega-menu-li">
              <Link
                to="#"
                className="mega-menu-link"
                onMouseOver={handleMegaMenuLinksKids}
              >
                بچه گانه
              </Link>
            </li>
            <li className="mega-menu-li">
              <Link
                to="#"
                className="mega-menu-link"
                onMouseOver={handleMegaMenuLinksWomen}
              >
                زنانه
              </Link>
            </li>
            <li className="mega-menu-li">
              <Link
                to="#"
                className="mega-menu-link"
                onMouseOver={handleMegaMenuLinksMen}
              >
                مردانه
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div
        className="collapse navbar-collapse col-4 m-0 d-none d-md-block d-flex justify-content-center align-items-center"
        id="navbarTogglerDemo02"
      >
        <ul className="d-flex justify-content-center align-items-center list-unstyled m-0">
          <li className="nav-item">
            <a
              className="nav-link font4 nav-link-login"
              href="#"
              data-toggle="tooltip"
              data-placement="bottom"
              title="Tooltip on bottom"
            >
              وارد شوید
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link font4 nav-link-heart"
              href="#"
              data-toggle="tooltip"
              data-placement="bottom"
              title="Tooltip on bottom"
            >
              <i className="fas fa-heart"></i>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link font4 nav-link-save"
              href="#"
              data-toggle="tooltip"
              data-placement="bottom"
              title="Tooltip on bottom"
            >
              <i className="fas fa-save"></i>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link nav-link-shoppingcart font4 position-relative"
              href="#"
              data-toggle="tooltip"
              data-placement="bottom"
              title="Tooltip on bottom"
            >
              <i className="fas fa-shopping-bag"></i>
              <span className="span-shoppingcart-number">0</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="col-12 position-relative">
        <div
          className="mega-menu-section d-none mega-menu-section-men-banner"
          onMouseLeave={handleResetMegaMenuTabs}
        >
          <div className="container mx-auto border-bottom pt-1 ">
            <ul className="d-flex justify-content-between align-items-center mx-auto mega-menu-section-tabs">
              <li>
                <Link to="#" onMouseEnter={handleMenTabSport}>
                  ورزشی
                  <img
                    className="mega-menu-tab-icons"
                    src={megaMenuTabIconSport}
                    alt="عکس"
                  />
                </Link>
              </li>
              <li>
                <Link to="#" onMouseEnter={handleMenTabAcc}>
                  اسسوری
                  <img
                    className="mega-menu-tab-icons"
                    src={megaMenuTabIconGlasses}
                    alt="عکس"
                  />
                </Link>
              </li>
              <li>
                <Link to="#" onMouseEnter={handleMenTabShoe}>
                  کفش
                  <img
                    className="mega-menu-tab-icons"
                    src={megaMenuTabIconShoe}
                    alt="عکس"
                  />
                </Link>
              </li>
              <li>
                <Link to="#" onMouseEnter={handleMenTabBag}>
                  کیف
                  <img
                    className="mega-menu-tab-icons"
                    src={megaMenuTabIconBag}
                    alt="عکس"
                  />
                </Link>
              </li>
              <li>
                <Link to="#" onMouseEnter={handleMenTabClothing}>
                  لباس
                  <img
                    className="mega-menu-tab-icons"
                    src={megaMenuTabIconShirt}
                    alt="عکس"
                  />
                </Link>
              </li>
            </ul>
          </div>
          <div className="container px-md-5 row my-5 mx-auto d-flex align-items-baseline mega-menu-tab-men-clothing">
            <div className="col-6">
              <h1 className="mega-menu-title">برترین برندهای لباس مردانه</h1>
              <div className="row m-0 p-0">
                <div className="col-6 p-0 m-0">
                  <img src={MegaMenuImg1} alt="عکس" className="w-100" />
                </div>
                <div className="col-6 p-0 m-0">
                  <img src={MegaMenuImg1} alt="عکس" className="w-100" />
                </div>
                <div className="col-6 p-0 m-0">
                  <img src={MegaMenuImg1} alt="عکس" className="w-100" />
                </div>
                <div className="col-6 p-0 m-0">
                  <img src={MegaMenuImg1} alt="عکس" className="w-100" />
                </div>
              </div>
            </div>
            <div className="col-6 text-right">
              <h1 className="mega-menu-title">خرید لبای مردانه</h1>
              <div className="row m-0 p-0 ">
                <ul className="col-6 m-0 list-unstyled">
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      کت پاییزه و زمستانی
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      کاپشن
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      جلیقه پاییزه
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      کت جین ست رسمی
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      پیراهن
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      ژاکت و پلیور
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      سویشرت و هودی
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      تی شرت و پولو شرت
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      راحتی شلوار و شلوارک
                    </Link>
                  </li>
                </ul>
                <ul className="col-6 m-0  list-unstyled">
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      جوراب و ساق
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      لباس راحتی
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      لباس زیر
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      فروش ویژه
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      فروش ویژه
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      جدیدترین‌ها برترین
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      برندهای لباس مردانه
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="container px-md-5 row  my-5 mx-auto  d-none align-items-baseline mega-menu-tab-men-bag">
            <div className="col-6 ">
              <h1 className="mega-menu-title">برترین برندهای کیف مردانه</h1>
              <div className="row m-0 p-0">
                <div className="col-6 p-0 m-0">
                  <img src={MegaMenuImg1} alt="عکس" className="w-100" />
                </div>
                <div className="col-6 p-0 m-0">
                  <img src={MegaMenuImg1} alt="عکس" className="w-100" />
                </div>
                <div className="col-6 p-0 m-0">
                  <img src={MegaMenuImg1} alt="عکس" className="w-100" />
                </div>
                <div className="col-6 p-0 m-0">
                  <img src={MegaMenuImg1} alt="عکس" className="w-100" />
                </div>
              </div>
            </div>
            <div className="col-3 mx-auto ">
              <h1 className="mega-menu-title">خرید کیف مردانه</h1>
              <ul className="list-unstyled">
                <li>
                  <Link to="#" className="mega-menu-banner-link">
                    کیف
                  </Link>
                </li>
                <li>
                  <Link to="#" className="mega-menu-banner-link">
                    کیف پول
                  </Link>
                </li>
                <li>
                  <Link to="#" className="mega-menu-banner-link">
                    کیف سفری و چمدان
                  </Link>
                </li>
                <li>
                  <Link to="#" className="mega-menu-banner-link">
                    کوله پشتی
                  </Link>
                </li>
                <li>
                  <Link to="#" className="mega-menu-banner-link">
                    فروش ویژه
                  </Link>
                </li>
                <li>
                  <Link to="#" className="mega-menu-banner-link">
                    جدیدترین‌ها برترین
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="container px-md-5 row  my-5 mx-auto d-none align-items-baseline mega-menu-tab-men-shoe">
            <div className="col-6 ">
              <h1 className="mega-menu-title">برترین برندهای کفش مردانه</h1>
              <div className="row m-0 p-0">
                <div className="col-6 p-0 m-0">
                  <img src={MegaMenuImg1} alt="عکس" className="w-100" />
                </div>
                <div className="col-6 p-0 m-0">
                  <img src={MegaMenuImg1} alt="عکس" className="w-100" />
                </div>
                <div className="col-6 p-0 m-0">
                  <img src={MegaMenuImg1} alt="عکس" className="w-100" />
                </div>
                <div className="col-6 p-0 m-0">
                  <img src={MegaMenuImg1} alt="عکس" className="w-100" />
                </div>
              </div>
            </div>
            <div className="col-3 mx-auto ">
              <h1 className="mega-menu-title">خرید کفش مردانه</h1>

              <ul className="list-unstyled">
                <li>
                  <Link to="#" className="mega-menu-banner-link">
                    خرید کفش مردانه
                  </Link>
                </li>
                <li>
                  <Link to="#" className="mega-menu-banner-link">
                    نیم بوت
                  </Link>
                </li>
                <li>
                  <Link to="#" className="mega-menu-banner-link">
                    بوت
                  </Link>
                </li>
                <li>
                  <Link to="#" className="mega-menu-banner-link">
                    کفش رسمی
                  </Link>
                </li>
                <li>
                  <Link to="#" className="mega-menu-banner-link">
                    صندل
                  </Link>
                </li>

                <li>
                  <Link to="#" className="mega-menu-banner-link">
                    کفش روزمره
                  </Link>
                </li>
                <li>
                  <Link to="#" className="mega-menu-banner-link">
                    دمپایی
                  </Link>
                </li>

                <li>
                  <Link to="#" className="mega-menu-banner-link">
                    مراقبت کفش و لوازم‌جانبی
                  </Link>
                </li>
                <li>
                  <Link to="#" className="mega-menu-banner-link">
                    کفش ورزشی
                  </Link>
                </li>

                <li>
                  <Link to="#" className="mega-menu-banner-link">
                    جدیدترین‌ها
                  </Link>
                </li>

                <li>
                  <Link to="#" className="mega-menu-banner-link">
                    فروش ویژه
                  </Link>
                </li>

                <li>
                  <Link to="#" className="mega-menu-banner-link">
                    جدیدترین‌ها برترین
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="container px-md-5 row my-5 mx-auto d-none  align-items-baseline mega-menu-tab-men-acc">
            <div className="col-6">
              <h1 className="mega-menu-title">برترین برندهای لباس مردانه</h1>
              <div className="row m-0 p-0">
                <div className="col-6 p-0 m-0">
                  <img src={MegaMenuImg1} alt="عکس" className="w-100" />
                </div>
                <div className="col-6 p-0 m-0">
                  <img src={MegaMenuImg1} alt="عکس" className="w-100" />
                </div>
                <div className="col-6 p-0 m-0">
                  <img src={MegaMenuImg1} alt="عکس" className="w-100" />
                </div>
                <div className="col-6 p-0 m-0">
                  <img src={MegaMenuImg1} alt="عکس" className="w-100" />
                </div>
              </div>
            </div>
            <div className="col-6 text-right">
              <h1 className="mega-menu-title">خرید اکسسوری مردانه</h1>
              <div className="row m-0 p-0 ">
                <ul className="col-6 m-0  list-unstyled">
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      ست هدیه
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      کیف سفری و چمدان
                    </Link>
                  </li>

                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      فروش ویژه
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      فروش ویژه
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      جدیدترین‌ها برترین
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      برندهای لباس مردانه
                    </Link>
                  </li>
                </ul>
                <ul className="col-6 m-0 list-unstyled">
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      عینک و لوازم جانبی عینک
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      سرپوش
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      کمربند
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      شال و دستمال سر
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      ساعت
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      کیف پول
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      زیورآلات نقره
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      دستکش
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      کراوات و پاپیون
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="container px-md-5 row  my-5 mx-auto d-none align-items-baseline mega-menu-tab-men-sport">
            <div className="col-6 ">
              <h1 className="mega-menu-title">برترین برندهای ورزشی مردانه</h1>
              <div className="row m-0 p-0">
                <div className="col-6 p-0 m-0">
                  <img src={MegaMenuImg1} alt="عکس" className="w-100" />
                </div>
                <div className="col-6 p-0 m-0">
                  <img src={MegaMenuImg1} alt="عکس" className="w-100" />
                </div>
                <div className="col-6 p-0 m-0">
                  <img src={MegaMenuImg1} alt="عکس" className="w-100" />
                </div>
                <div className="col-6 p-0 m-0">
                  <img src={MegaMenuImg1} alt="عکس" className="w-100" />
                </div>
              </div>
            </div>
            <div className="col-3 mx-auto ">
              <h1 className="mega-menu-title"> خرید ورزشی مردانه</h1>

              <ul className="list-unstyled">
                <li>
                  <Link to="#" className="mega-menu-banner-link">
                    کفش ورزشی
                  </Link>
                </li>
                <li>
                  <Link to="#" className="mega-menu-banner-link">
                    پوشاک ورزشی
                  </Link>
                </li>
                <li>
                  <Link to="#" className="mega-menu-banner-link">
                    سویشرت و هودی ورزشی
                  </Link>
                </li>
                <li>
                  <Link to="#" className="mega-menu-banner-link">
                    سویشرت و هودی ورزشی
                  </Link>
                </li>
                <li>
                  <Link to="#" className="mega-menu-banner-link">
                    کاپشن و جلیقه ورزشی
                  </Link>
                </li>

                <li>
                  <Link to="#" className="mega-menu-banner-link">
                    گرمکن و ست ورزشی
                  </Link>
                </li>
                <li>
                  <Link to="#" className="mega-menu-banner-link">
                    تی‌شرت و پولوشرت ورزشی
                  </Link>
                </li>

                <li>
                  <Link to="#" className="mega-menu-banner-link">
                    شلوارک ورزشی
                  </Link>
                </li>
                <li>
                  <Link to="#" className="mega-menu-banner-link">
                    اکسسوری ورزشی
                  </Link>
                </li>

                <li>
                  <Link to="#" className="mega-menu-banner-link">
                    فروش ویژه
                  </Link>
                </li>

                <li>
                  <Link to="#" className="mega-menu-banner-link">
                    جدیدترین‌ها
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="mega-menu-section d-none mega-menu-section-women-banner"
          onMouseLeave={handleResetMegaMenuTabs}
        >
          <div className="container mx-auto border-bottom pt-1 ">
            <ul className="d-flex justify-content-between align-items-center mx-auto mega-menu-section-tabs">
              <li>
                <Link to="#" onMouseEnter={handleWomenTabSport}>
                  ورزشی
                  <img
                    className="mega-menu-tab-icons"
                    src={megaMenuTabIconSport}
                    alt="عکس"
                  />
                </Link>
              </li>
              <li>
                <Link to="#" onMouseEnter={handleWomenTabAcc}>
                  اسسوری
                  <img
                    className="mega-menu-tab-icons"
                    src={megaMenuTabIconGlasses}
                    alt="عکس"
                  />
                </Link>
              </li>
              <li>
                <Link to="#" onMouseEnter={handleWomenTabShoe}>
                  کفش
                  <img
                    className="mega-menu-tab-icons"
                    src={megaMenuTabIconShoe}
                    alt="عکس"
                  />
                </Link>
              </li>
              <li>
                <Link to="#" onMouseEnter={handleWomenTabBag}>
                  کیف
                  <img
                    className="mega-menu-tab-icons"
                    src={megaMenuTabIconBag}
                    alt="عکس"
                  />
                </Link>
              </li>
              <li>
                <Link to="#" onMouseEnter={handleWomenTabClothing}>
                  لباس
                  <img
                    className="mega-menu-tab-icons"
                    src={megaMenuTabIconShirt}
                    alt="عکس"
                  />
                </Link>
              </li>
            </ul>
          </div>
          <div className="container px-md-5 row my-5 mx-auto d-flex align-items-baseline mega-menu-tab-women-clothing">
            <div className="col-6">
              <h1 className="mega-menu-title">برترین برندهای لباس مردانه</h1>
              <div className="row m-0 p-0">
                <div className="col-6 p-0 m-0">
                  <img src={MegaMenuImg1} alt="عکس" className="w-100" />
                </div>
                <div className="col-6 p-0 m-0">
                  <img src={MegaMenuImg1} alt="عکس" className="w-100" />
                </div>
                <div className="col-6 p-0 m-0">
                  <img src={MegaMenuImg1} alt="عکس" className="w-100" />
                </div>
                <div className="col-6 p-0 m-0">
                  <img src={MegaMenuImg1} alt="عکس" className="w-100" />
                </div>
              </div>
            </div>
            <div className="col-6 text-right">
              <h1 className="mega-menu-title">خرید لبای مردانه</h1>
              <div className="row m-0 p-0 ">
                <ul className="col-6 m-0 list-unstyled">
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      کت پاییزه و زمستانی
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      کاپشن
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      جلیقه پاییزه
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      کت جین ست رسمی
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      پیراهن
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      ژاکت و پلیور
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      سویشرت و هودی
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      تی شرت و پولو شرت
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      راحتی شلوار و شلوارک
                    </Link>
                  </li>
                </ul>
                <ul className="col-6 m-0  list-unstyled">
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      جوراب و ساق
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      لباس راحتی
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      لباس زیر
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      فروش ویژه
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      فروش ویژه
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      جدیدترین‌ها برترین
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      برندهای لباس مردانه
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="container px-md-5 row  my-5 mx-auto  d-none align-items-baseline mega-menu-tab-women-bag">
            <div className="col-6 ">
              <h1 className="mega-menu-title">برترین برندهای کیف مردانه</h1>
              <div className="row m-0 p-0">
                <div className="col-6 p-0 m-0">
                  <img src={MegaMenuImg1} alt="عکس" className="w-100" />
                </div>
                <div className="col-6 p-0 m-0">
                  <img src={MegaMenuImg1} alt="عکس" className="w-100" />
                </div>
                <div className="col-6 p-0 m-0">
                  <img src={MegaMenuImg1} alt="عکس" className="w-100" />
                </div>
                <div className="col-6 p-0 m-0">
                  <img src={MegaMenuImg1} alt="عکس" className="w-100" />
                </div>
              </div>
            </div>
            <div className="col-3 mx-auto ">
              <h1 className="mega-menu-title">خرید کیف مردانه</h1>
              <ul className="list-unstyled">
                <li>
                  <Link to="#" className="mega-menu-banner-link">
                    کیف
                  </Link>
                </li>
                <li>
                  <Link to="#" className="mega-menu-banner-link">
                    کیف پول
                  </Link>
                </li>
                <li>
                  <Link to="#" className="mega-menu-banner-link">
                    کیف سفری و چمدان
                  </Link>
                </li>
                <li>
                  <Link to="#" className="mega-menu-banner-link">
                    کوله پشتی
                  </Link>
                </li>
                <li>
                  <Link to="#" className="mega-menu-banner-link">
                    فروش ویژه
                  </Link>
                </li>
                <li>
                  <Link to="#" className="mega-menu-banner-link">
                    جدیدترین‌ها برترین
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="container px-md-5 row  my-5 mx-auto d-none align-items-baseline mega-menu-tab-women-shoe">
            <div className="col-6 ">
              <h1 className="mega-menu-title">برترین برندهای کفش مردانه</h1>
              <div className="row m-0 p-0">
                <div className="col-6 p-0 m-0">
                  <img src={MegaMenuImg1} alt="عکس" className="w-100" />
                </div>
                <div className="col-6 p-0 m-0">
                  <img src={MegaMenuImg1} alt="عکس" className="w-100" />
                </div>
                <div className="col-6 p-0 m-0">
                  <img src={MegaMenuImg1} alt="عکس" className="w-100" />
                </div>
                <div className="col-6 p-0 m-0">
                  <img src={MegaMenuImg1} alt="عکس" className="w-100" />
                </div>
              </div>
            </div>
            <div className="col-3 mx-auto ">
              <h1 className="mega-menu-title">خرید کفش مردانه</h1>

              <ul className="list-unstyled">
                <li>
                  <Link to="#" className="mega-menu-banner-link">
                    خرید کفش مردانه
                  </Link>
                </li>
                <li>
                  <Link to="#" className="mega-menu-banner-link">
                    نیم بوت
                  </Link>
                </li>
                <li>
                  <Link to="#" className="mega-menu-banner-link">
                    بوت
                  </Link>
                </li>
                <li>
                  <Link to="#" className="mega-menu-banner-link">
                    کفش رسمی
                  </Link>
                </li>
                <li>
                  <Link to="#" className="mega-menu-banner-link">
                    صندل
                  </Link>
                </li>

                <li>
                  <Link to="#" className="mega-menu-banner-link">
                    کفش روزمره
                  </Link>
                </li>
                <li>
                  <Link to="#" className="mega-menu-banner-link">
                    دمپایی
                  </Link>
                </li>

                <li>
                  <Link to="#" className="mega-menu-banner-link">
                    مراقبت کفش و لوازم‌جانبی
                  </Link>
                </li>
                <li>
                  <Link to="#" className="mega-menu-banner-link">
                    کفش ورزشی
                  </Link>
                </li>

                <li>
                  <Link to="#" className="mega-menu-banner-link">
                    جدیدترین‌ها
                  </Link>
                </li>

                <li>
                  <Link to="#" className="mega-menu-banner-link">
                    فروش ویژه
                  </Link>
                </li>

                <li>
                  <Link to="#" className="mega-menu-banner-link">
                    جدیدترین‌ها برترین
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="container px-md-5 row my-5 mx-auto d-none  align-items-baseline mega-menu-tab-women-acc">
            <div className="col-6">
              <h1 className="mega-menu-title">برترین برندهای لباس مردانه</h1>
              <div className="row m-0 p-0">
                <div className="col-6 p-0 m-0">
                  <img src={MegaMenuImg1} alt="عکس" className="w-100" />
                </div>
                <div className="col-6 p-0 m-0">
                  <img src={MegaMenuImg1} alt="عکس" className="w-100" />
                </div>
                <div className="col-6 p-0 m-0">
                  <img src={MegaMenuImg1} alt="عکس" className="w-100" />
                </div>
                <div className="col-6 p-0 m-0">
                  <img src={MegaMenuImg1} alt="عکس" className="w-100" />
                </div>
              </div>
            </div>
            <div className="col-6 text-right">
              <h1 className="mega-menu-title">خرید اکسسوری مردانه</h1>
              <div className="row m-0 p-0 ">
                <ul className="col-6 m-0  list-unstyled">
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      ست هدیه
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      کیف سفری و چمدان
                    </Link>
                  </li>

                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      فروش ویژه
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      فروش ویژه
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      جدیدترین‌ها برترین
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      برندهای لباس مردانه
                    </Link>
                  </li>
                </ul>
                <ul className="col-6 m-0 list-unstyled">
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      عینک و لوازم جانبی عینک
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      سرپوش
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      کمربند
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      شال و دستمال سر
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      ساعت
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      کیف پول
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      زیورآلات نقره
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      دستکش
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      کراوات و پاپیون
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="container px-md-5 row  my-5 mx-auto d-none align-items-baseline mega-menu-tab-women-sport">
            <div className="col-6 ">
              <h1 className="mega-menu-title">برترین برندهای ورزشی مردانه</h1>
              <div className="row m-0 p-0">
                <div className="col-6 p-0 m-0">
                  <img src={MegaMenuImg1} alt="عکس" className="w-100" />
                </div>
                <div className="col-6 p-0 m-0">
                  <img src={MegaMenuImg1} alt="عکس" className="w-100" />
                </div>
                <div className="col-6 p-0 m-0">
                  <img src={MegaMenuImg1} alt="عکس" className="w-100" />
                </div>
                <div className="col-6 p-0 m-0">
                  <img src={MegaMenuImg1} alt="عکس" className="w-100" />
                </div>
              </div>
            </div>
            <div className="col-3 mx-auto ">
              <h1 className="mega-menu-title"> خرید ورزشی مردانه</h1>

              <ul className="list-unstyled">
                <li>
                  <Link to="#" className="mega-menu-banner-link">
                    کفش ورزشی
                  </Link>
                </li>
                <li>
                  <Link to="#" className="mega-menu-banner-link">
                    پوشاک ورزشی
                  </Link>
                </li>
                <li>
                  <Link to="#" className="mega-menu-banner-link">
                    سویشرت و هودی ورزشی
                  </Link>
                </li>
                <li>
                  <Link to="#" className="mega-menu-banner-link">
                    سویشرت و هودی ورزشی
                  </Link>
                </li>
                <li>
                  <Link to="#" className="mega-menu-banner-link">
                    کاپشن و جلیقه ورزشی
                  </Link>
                </li>

                <li>
                  <Link to="#" className="mega-menu-banner-link">
                    گرمکن و ست ورزشی
                  </Link>
                </li>
                <li>
                  <Link to="#" className="mega-menu-banner-link">
                    تی‌شرت و پولوشرت ورزشی
                  </Link>
                </li>

                <li>
                  <Link to="#" className="mega-menu-banner-link">
                    شلوارک ورزشی
                  </Link>
                </li>
                <li>
                  <Link to="#" className="mega-menu-banner-link">
                    اکسسوری ورزشی
                  </Link>
                </li>

                <li>
                  <Link to="#" className="mega-menu-banner-link">
                    فروش ویژه
                  </Link>
                </li>

                <li>
                  <Link to="#" className="mega-menu-banner-link">
                    جدیدترین‌ها
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="mega-menu-section d-none mega-menu-section-kids-banner"
          onMouseLeave={handleResetMegaMenuTabs}
        >
          <div className="container mx-auto border-bottom pt-1 ">
            <ul className="d-flex justify-content-between align-items-center mx-auto mega-menu-section-tabs">
              <li>
                <Link to="#" onMouseEnter={handleKidsTabSport}>
                  ورزشی
                  <img
                    className="mega-menu-tab-icons"
                    src={megaMenuTabIconSport}
                    alt="عکس"
                  />
                </Link>
              </li>
              <li>
                <Link to="#" onMouseEnter={handleKidsTabAcc}>
                  اسسوری
                  <img
                    className="mega-menu-tab-icons"
                    src={megaMenuTabIconGlasses}
                    alt="عکس"
                  />
                </Link>
              </li>
              <li>
                <Link to="#" onMouseEnter={handleKidsTabShoe}>
                  کفش
                  <img
                    className="mega-menu-tab-icons"
                    src={megaMenuTabIconShoe}
                    alt="عکس"
                  />
                </Link>
              </li>
              <li>
                <Link to="#" onMouseEnter={handleKidsTabBag}>
                  کیف
                  <img
                    className="mega-menu-tab-icons"
                    src={megaMenuTabIconBag}
                    alt="عکس"
                  />
                </Link>
              </li>
              <li>
                <Link to="#" onMouseEnter={handleKidsTabClothing}>
                  لباس
                  <img
                    className="mega-menu-tab-icons"
                    src={megaMenuTabIconShirt}
                    alt="عکس"
                  />
                </Link>
              </li>
            </ul>
          </div>
          <div className="container px-md-5 row my-5 d-flex mx-auto align-items-baseline mega-menu-tab-kids-clothing">
            <div className="col-6">
              <h1 className="mega-menu-title">برترین برندهای لباس مردانه</h1>
              <div className="row m-0 p-0">
                <div className="col-6 p-0 m-0">
                  <img src={MegaMenuImg1} alt="عکس" className="w-100" />
                </div>
                <div className="col-6 p-0 m-0">
                  <img src={MegaMenuImg1} alt="عکس" className="w-100" />
                </div>
                <div className="col-6 p-0 m-0">
                  <img src={MegaMenuImg1} alt="عکس" className="w-100" />
                </div>
                <div className="col-6 p-0 m-0">
                  <img src={MegaMenuImg1} alt="عکس" className="w-100" />
                </div>
              </div>
            </div>
            <div className="col-6 text-right">
              <h1 className="mega-menu-title">خرید لبای مردانه</h1>
              <div className="row m-0 p-0 ">
                <ul className="col-6 m-0 list-unstyled">
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      کت پاییزه و زمستانی
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      کاپشن
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      جلیقه پاییزه
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      کت جین ست رسمی
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      پیراهن
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      ژاکت و پلیور
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      سویشرت و هودی
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      تی شرت و پولو شرت
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      راحتی شلوار و شلوارک
                    </Link>
                  </li>
                </ul>
                <ul className="col-6 m-0  list-unstyled">
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      جوراب و ساق
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      لباس راحتی
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      لباس زیر
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      فروش ویژه
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      فروش ویژه
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      جدیدترین‌ها برترین
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      برندهای لباس مردانه
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="container px-md-5 row  my-5 mx-auto  d-none align-items-baseline mega-menu-tab-kids-bag">
            <div className="col-6 ">
              <h1 className="mega-menu-title">برترین برندهای کیف مردانه</h1>
              <div className="row m-0 p-0">
                <div className="col-6 p-0 m-0">
                  <img src={MegaMenuImg1} alt="عکس" className="w-100" />
                </div>
                <div className="col-6 p-0 m-0">
                  <img src={MegaMenuImg1} alt="عکس" className="w-100" />
                </div>
                <div className="col-6 p-0 m-0">
                  <img src={MegaMenuImg1} alt="عکس" className="w-100" />
                </div>
                <div className="col-6 p-0 m-0">
                  <img src={MegaMenuImg1} alt="عکس" className="w-100" />
                </div>
              </div>
            </div>
            <div className="col-3 mx-auto ">
              <h1 className="mega-menu-title">خرید کیف مردانه</h1>
              <ul className="list-unstyled">
                <li>
                  <Link to="#" className="mega-menu-banner-link">
                    کیف
                  </Link>
                </li>
                <li>
                  <Link to="#" className="mega-menu-banner-link">
                    کیف پول
                  </Link>
                </li>
                <li>
                  <Link to="#" className="mega-menu-banner-link">
                    کیف سفری و چمدان
                  </Link>
                </li>
                <li>
                  <Link to="#" className="mega-menu-banner-link">
                    کوله پشتی
                  </Link>
                </li>
                <li>
                  <Link to="#" className="mega-menu-banner-link">
                    فروش ویژه
                  </Link>
                </li>
                <li>
                  <Link to="#" className="mega-menu-banner-link">
                    جدیدترین‌ها برترین
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="container px-md-5 row  my-5 mx-auto d-none align-items-baseline mega-menu-tab-kids-shoe">
            <div className="col-6 ">
              <h1 className="mega-menu-title">برترین برندهای کفش مردانه</h1>
              <div className="row m-0 p-0">
                <div className="col-6 p-0 m-0">
                  <img src={MegaMenuImg1} alt="عکس" className="w-100" />
                </div>
                <div className="col-6 p-0 m-0">
                  <img src={MegaMenuImg1} alt="عکس" className="w-100" />
                </div>
                <div className="col-6 p-0 m-0">
                  <img src={MegaMenuImg1} alt="عکس" className="w-100" />
                </div>
                <div className="col-6 p-0 m-0">
                  <img src={MegaMenuImg1} alt="عکس" className="w-100" />
                </div>
              </div>
            </div>
            <div className="col-3 mx-auto ">
              <h1 className="mega-menu-title">خرید کفش مردانه</h1>

              <ul className="list-unstyled">
                <li>
                  <Link to="#" className="mega-menu-banner-link">
                    خرید کفش مردانه
                  </Link>
                </li>
                <li>
                  <Link to="#" className="mega-menu-banner-link">
                    نیم بوت
                  </Link>
                </li>
                <li>
                  <Link to="#" className="mega-menu-banner-link">
                    بوت
                  </Link>
                </li>
                <li>
                  <Link to="#" className="mega-menu-banner-link">
                    کفش رسمی
                  </Link>
                </li>
                <li>
                  <Link to="#" className="mega-menu-banner-link">
                    صندل
                  </Link>
                </li>

                <li>
                  <Link to="#" className="mega-menu-banner-link">
                    کفش روزمره
                  </Link>
                </li>
                <li>
                  <Link to="#" className="mega-menu-banner-link">
                    دمپایی
                  </Link>
                </li>

                <li>
                  <Link to="#" className="mega-menu-banner-link">
                    مراقبت کفش و لوازم‌جانبی
                  </Link>
                </li>
                <li>
                  <Link to="#" className="mega-menu-banner-link">
                    کفش ورزشی
                  </Link>
                </li>

                <li>
                  <Link to="#" className="mega-menu-banner-link">
                    جدیدترین‌ها
                  </Link>
                </li>

                <li>
                  <Link to="#" className="mega-menu-banner-link">
                    فروش ویژه
                  </Link>
                </li>

                <li>
                  <Link to="#" className="mega-menu-banner-link">
                    جدیدترین‌ها برترین
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="container px-md-5 row my-5 mx-auto d-none  align-items-baseline mega-menu-tab-kids-acc">
            <div className="col-6">
              <h1 className="mega-menu-title">برترین برندهای لباس مردانه</h1>
              <div className="row m-0 p-0">
                <div className="col-6 p-0 m-0">
                  <img src={MegaMenuImg1} alt="عکس" className="w-100" />
                </div>
                <div className="col-6 p-0 m-0">
                  <img src={MegaMenuImg1} alt="عکس" className="w-100" />
                </div>
                <div className="col-6 p-0 m-0">
                  <img src={MegaMenuImg1} alt="عکس" className="w-100" />
                </div>
                <div className="col-6 p-0 m-0">
                  <img src={MegaMenuImg1} alt="عکس" className="w-100" />
                </div>
              </div>
            </div>
            <div className="col-6 text-right">
              <h1 className="mega-menu-title">خرید اکسسوری مردانه</h1>
              <div className="row m-0 p-0 ">
                <ul className="col-6 m-0  list-unstyled">
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      ست هدیه
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      کیف سفری و چمدان
                    </Link>
                  </li>

                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      فروش ویژه
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      فروش ویژه
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      جدیدترین‌ها برترین
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      برندهای لباس مردانه
                    </Link>
                  </li>
                </ul>
                <ul className="col-6 m-0 list-unstyled">
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      عینک و لوازم جانبی عینک
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      سرپوش
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      کمربند
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      شال و دستمال سر
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      ساعت
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      کیف پول
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      زیورآلات نقره
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      دستکش
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      کراوات و پاپیون
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="container px-md-5 row  my-5 mx-auto d-none align-items-baseline mega-menu-tab-kids-sport">
            <div className="col-6 ">
              <h1 className="mega-menu-title">برترین برندهای ورزشی مردانه</h1>
              <div className="row m-0 p-0">
                <div className="col-6 p-0 m-0">
                  <img src={MegaMenuImg1} alt="عکس" className="w-100" />
                </div>
                <div className="col-6 p-0 m-0">
                  <img src={MegaMenuImg1} alt="عکس" className="w-100" />
                </div>
                <div className="col-6 p-0 m-0">
                  <img src={MegaMenuImg1} alt="عکس" className="w-100" />
                </div>
                <div className="col-6 p-0 m-0">
                  <img src={MegaMenuImg1} alt="عکس" className="w-100" />
                </div>
              </div>
            </div>
            <div className="col-3 mx-auto ">
              <h1 className="mega-menu-title"> خرید ورزشی مردانه</h1>

              <ul className="list-unstyled">
                <li>
                  <Link to="#" className="mega-menu-banner-link">
                    کفش ورزشی
                  </Link>
                </li>
                <li>
                  <Link to="#" className="mega-menu-banner-link">
                    پوشاک ورزشی
                  </Link>
                </li>
                <li>
                  <Link to="#" className="mega-menu-banner-link">
                    سویشرت و هودی ورزشی
                  </Link>
                </li>
                <li>
                  <Link to="#" className="mega-menu-banner-link">
                    سویشرت و هودی ورزشی
                  </Link>
                </li>
                <li>
                  <Link to="#" className="mega-menu-banner-link">
                    کاپشن و جلیقه ورزشی
                  </Link>
                </li>

                <li>
                  <Link to="#" className="mega-menu-banner-link">
                    گرمکن و ست ورزشی
                  </Link>
                </li>
                <li>
                  <Link to="#" className="mega-menu-banner-link">
                    تی‌شرت و پولوشرت ورزشی
                  </Link>
                </li>

                <li>
                  <Link to="#" className="mega-menu-banner-link">
                    شلوارک ورزشی
                  </Link>
                </li>
                <li>
                  <Link to="#" className="mega-menu-banner-link">
                    اکسسوری ورزشی
                  </Link>
                </li>

                <li>
                  <Link to="#" className="mega-menu-banner-link">
                    فروش ویژه
                  </Link>
                </li>

                <li>
                  <Link to="#" className="mega-menu-banner-link">
                    جدیدترین‌ها
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="mega-menu-section d-none mega-menu-section-brands-banner"
          onMouseLeave={handleResetMegaMenuTabs}
        >
          <div className="container mx-auto border-bottom pt-1 ">
            <ul className="d-flex justify-content-between align-items-center mx-auto mega-menu-section-tabs">
              <li>
                <Link to="#" onMouseEnter={handleBrandsTabSport}>
                  ورزشی
                  <img
                    className="mega-menu-tab-icons"
                    src={megaMenuTabIconSport}
                    alt="عکس"
                  />
                </Link>
              </li>
              <li>
                <Link to="#" onMouseEnter={handleBrandsTabAcc}>
                  اسسوری
                  <img
                    className="mega-menu-tab-icons"
                    src={megaMenuTabIconGlasses}
                    alt="عکس"
                  />
                </Link>
              </li>
              <li>
                <Link to="#" onMouseEnter={handleBrandsTabShoe}>
                  کفش
                  <img
                    className="mega-menu-tab-icons"
                    src={megaMenuTabIconShoe}
                    alt="عکس"
                  />
                </Link>
              </li>
              <li>
                <Link to="#" onMouseEnter={handleBrandsTabBag}>
                  کیف
                  <img
                    className="mega-menu-tab-icons"
                    src={megaMenuTabIconBag}
                    alt="عکس"
                  />
                </Link>
              </li>
              <li>
                <Link to="#" onMouseEnter={handleBrandsTabClothing}>
                  لباس
                  <img
                    className="mega-menu-tab-icons"
                    src={megaMenuTabIconShirt}
                    alt="عکس"
                  />
                </Link>
              </li>
            </ul>
          </div>
          <div className="container px-md-5 row my-5 d-flex mx-auto align-items-baseline mega-menu-tab-brands-clothing">
            <div className="col-6">
              <h1 className="mega-menu-title">برترین برندهای لباس مردانه</h1>
              <div className="row m-0 p-0">
                <div className="col-6 p-0 m-0">
                  <img src={MegaMenuImg1} alt="عکس" className="w-100" />
                </div>
                <div className="col-6 p-0 m-0">
                  <img src={MegaMenuImg1} alt="عکس" className="w-100" />
                </div>
                <div className="col-6 p-0 m-0">
                  <img src={MegaMenuImg1} alt="عکس" className="w-100" />
                </div>
                <div className="col-6 p-0 m-0">
                  <img src={MegaMenuImg1} alt="عکس" className="w-100" />
                </div>
              </div>
            </div>
            <div className="col-6 text-right">
              <h1 className="mega-menu-title">خرید لبای مردانه</h1>
              <div className="row m-0 p-0 ">
                <ul className="col-6 m-0 list-unstyled">
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      کت پاییزه و زمستانی
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      کاپشن
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      جلیقه پاییزه
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      کت جین ست رسمی
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      پیراهن
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      ژاکت و پلیور
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      سویشرت و هودی
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      تی شرت و پولو شرت
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      راحتی شلوار و شلوارک
                    </Link>
                  </li>
                </ul>
                <ul className="col-6 m-0  list-unstyled">
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      جوراب و ساق
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      لباس راحتی
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      لباس زیر
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      فروش ویژه
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      فروش ویژه
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      جدیدترین‌ها برترین
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      برندهای لباس مردانه
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="container px-md-5 row  my-5 mx-auto  d-none align-items-baseline mega-menu-tab-brands-bag">
            <div className="col-6 ">
              <h1 className="mega-menu-title">برترین برندهای کیف مردانه</h1>
              <div className="row m-0 p-0">
                <div className="col-6 p-0 m-0">
                  <img src={MegaMenuImg1} alt="عکس" className="w-100" />
                </div>
                <div className="col-6 p-0 m-0">
                  <img src={MegaMenuImg1} alt="عکس" className="w-100" />
                </div>
                <div className="col-6 p-0 m-0">
                  <img src={MegaMenuImg1} alt="عکس" className="w-100" />
                </div>
                <div className="col-6 p-0 m-0">
                  <img src={MegaMenuImg1} alt="عکس" className="w-100" />
                </div>
              </div>
            </div>
            <div className="col-3 mx-auto ">
              <h1 className="mega-menu-title">خرید کیف مردانه</h1>
              <ul className="list-unstyled">
                <li>
                  <Link to="#" className="mega-menu-banner-link">
                    کیف
                  </Link>
                </li>
                <li>
                  <Link to="#" className="mega-menu-banner-link">
                    کیف پول
                  </Link>
                </li>
                <li>
                  <Link to="#" className="mega-menu-banner-link">
                    کیف سفری و چمدان
                  </Link>
                </li>
                <li>
                  <Link to="#" className="mega-menu-banner-link">
                    کوله پشتی
                  </Link>
                </li>
                <li>
                  <Link to="#" className="mega-menu-banner-link">
                    فروش ویژه
                  </Link>
                </li>
                <li>
                  <Link to="#" className="mega-menu-banner-link">
                    جدیدترین‌ها برترین
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="container px-md-5 row  my-5 mx-auto d-none align-items-baseline mega-menu-tab-brands-shoe">
            <div className="col-6 ">
              <h1 className="mega-menu-title">برترین برندهای کفش مردانه</h1>
              <div className="row m-0 p-0">
                <div className="col-6 p-0 m-0">
                  <img src={MegaMenuImg1} alt="عکس" className="w-100" />
                </div>
                <div className="col-6 p-0 m-0">
                  <img src={MegaMenuImg1} alt="عکس" className="w-100" />
                </div>
                <div className="col-6 p-0 m-0">
                  <img src={MegaMenuImg1} alt="عکس" className="w-100" />
                </div>
                <div className="col-6 p-0 m-0">
                  <img src={MegaMenuImg1} alt="عکس" className="w-100" />
                </div>
              </div>
            </div>
            <div className="col-3 mx-auto ">
              <h1 className="mega-menu-title">خرید کفش مردانه</h1>

              <ul className="list-unstyled">
                <li>
                  <Link to="#" className="mega-menu-banner-link">
                    خرید کفش مردانه
                  </Link>
                </li>
                <li>
                  <Link to="#" className="mega-menu-banner-link">
                    نیم بوت
                  </Link>
                </li>
                <li>
                  <Link to="#" className="mega-menu-banner-link">
                    بوت
                  </Link>
                </li>
                <li>
                  <Link to="#" className="mega-menu-banner-link">
                    کفش رسمی
                  </Link>
                </li>
                <li>
                  <Link to="#" className="mega-menu-banner-link">
                    صندل
                  </Link>
                </li>

                <li>
                  <Link to="#" className="mega-menu-banner-link">
                    کفش روزمره
                  </Link>
                </li>
                <li>
                  <Link to="#" className="mega-menu-banner-link">
                    دمپایی
                  </Link>
                </li>

                <li>
                  <Link to="#" className="mega-menu-banner-link">
                    مراقبت کفش و لوازم‌جانبی
                  </Link>
                </li>
                <li>
                  <Link to="#" className="mega-menu-banner-link">
                    کفش ورزشی
                  </Link>
                </li>

                <li>
                  <Link to="#" className="mega-menu-banner-link">
                    جدیدترین‌ها
                  </Link>
                </li>

                <li>
                  <Link to="#" className="mega-menu-banner-link">
                    فروش ویژه
                  </Link>
                </li>

                <li>
                  <Link to="#" className="mega-menu-banner-link">
                    جدیدترین‌ها برترین
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="container px-md-5 row my-5 mx-auto d-none  align-items-baseline mega-menu-tab-brands-acc">
            <div className="col-6">
              <h1 className="mega-menu-title">برترین برندهای لباس مردانه</h1>
              <div className="row m-0 p-0">
                <div className="col-6 p-0 m-0">
                  <img src={MegaMenuImg1} alt="عکس" className="w-100" />
                </div>
                <div className="col-6 p-0 m-0">
                  <img src={MegaMenuImg1} alt="عکس" className="w-100" />
                </div>
                <div className="col-6 p-0 m-0">
                  <img src={MegaMenuImg1} alt="عکس" className="w-100" />
                </div>
                <div className="col-6 p-0 m-0">
                  <img src={MegaMenuImg1} alt="عکس" className="w-100" />
                </div>
              </div>
            </div>
            <div className="col-6 text-right">
              <h1 className="mega-menu-title">خرید اکسسوری مردانه</h1>
              <div className="row m-0 p-0 ">
                <ul className="col-6 m-0  list-unstyled">
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      ست هدیه
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      کیف سفری و چمدان
                    </Link>
                  </li>

                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      فروش ویژه
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      فروش ویژه
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      جدیدترین‌ها برترین
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      برندهای لباس مردانه
                    </Link>
                  </li>
                </ul>
                <ul className="col-6 m-0 list-unstyled">
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      عینک و لوازم جانبی عینک
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      سرپوش
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      کمربند
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      شال و دستمال سر
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      ساعت
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      کیف پول
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      زیورآلات نقره
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      دستکش
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="mega-menu-banner-link">
                      کراوات و پاپیون
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="container px-md-5 row  my-5 mx-auto d-none align-items-baseline mega-menu-tab-brands-sport">
            <div className="col-6 ">
              <h1 className="mega-menu-title">برترین برندهای ورزشی مردانه</h1>
              <div className="row m-0 p-0">
                <div className="col-6 p-0 m-0">
                  <img src={MegaMenuImg1} alt="عکس" className="w-100" />
                </div>
                <div className="col-6 p-0 m-0">
                  <img src={MegaMenuImg1} alt="عکس" className="w-100" />
                </div>
                <div className="col-6 p-0 m-0">
                  <img src={MegaMenuImg1} alt="عکس" className="w-100" />
                </div>
                <div className="col-6 p-0 m-0">
                  <img src={MegaMenuImg1} alt="عکس" className="w-100" />
                </div>
              </div>
            </div>
            <div className="col-3 mx-auto ">
              <h1 className="mega-menu-title"> خرید ورزشی مردانه</h1>

              <ul className="list-unstyled">
                <li>
                  <Link to="#" className="mega-menu-banner-link">
                    کفش ورزشی
                  </Link>
                </li>
                <li>
                  <Link to="#" className="mega-menu-banner-link">
                    پوشاک ورزشی
                  </Link>
                </li>
                <li>
                  <Link to="#" className="mega-menu-banner-link">
                    سویشرت و هودی ورزشی
                  </Link>
                </li>
                <li>
                  <Link to="#" className="mega-menu-banner-link">
                    سویشرت و هودی ورزشی
                  </Link>
                </li>
                <li>
                  <Link to="#" className="mega-menu-banner-link">
                    کاپشن و جلیقه ورزشی
                  </Link>
                </li>

                <li>
                  <Link to="#" className="mega-menu-banner-link">
                    گرمکن و ست ورزشی
                  </Link>
                </li>
                <li>
                  <Link to="#" className="mega-menu-banner-link">
                    تی‌شرت و پولوشرت ورزشی
                  </Link>
                </li>

                <li>
                  <Link to="#" className="mega-menu-banner-link">
                    شلوارک ورزشی
                  </Link>
                </li>
                <li>
                  <Link to="#" className="mega-menu-banner-link">
                    اکسسوری ورزشی
                  </Link>
                </li>

                <li>
                  <Link to="#" className="mega-menu-banner-link">
                    فروش ویژه
                  </Link>
                </li>

                <li>
                  <Link to="#" className="mega-menu-banner-link">
                    جدیدترین‌ها
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
