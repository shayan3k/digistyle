import React from "react";
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

export default function Navbar() {
  return (
    <nav className="container-fluid navbar row m-0 p-0">
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
            style={{ borderRight: "1px solid white" }}
          >
            <li className="mega-menu-li">
              <Link className="mega-menu-link">کارت هدیه</Link>
            </li>
            <li className="mega-menu-li">
              <Link className="mega-menu-link">فروش ویژه</Link>
            </li>
            <li className="mega-menu-li">
              <Link className="mega-menu-link">برندها</Link>
            </li>
          </ul>
          <ul className="col-6 d-flex justify-content-between align-items-center list-unstyled">
            <li className="mega-menu-li">
              <Link className="mega-menu-link">بچه گانه</Link>
            </li>
            <li className="mega-menu-li">
              <Link className="mega-menu-link">زنانه</Link>
            </li>
            <li className="mega-menu-li">
              <Link className="mega-menu-link">مردانه</Link>
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
        <div className="mega-menu-section mega-menu-section-men">
          <div className="container mx-auto border-bottom pt-1">
            <ul className="d-flex justify-content-between align-items-center mx-auto mega-menu-section-tabs">
              <li>
                <Link>
                  ورزشی
                  <img
                    className="mega-menu-tab-icons"
                    src={megaMenuTabIconSport}
                    alt="عکس"
                  />
                </Link>
              </li>
              <li>
                <Link>
                  اسسوری
                  <img
                    className="mega-menu-tab-icons"
                    src={megaMenuTabIconGlasses}
                    alt="عکس"
                  />
                </Link>
              </li>
              <li>
                <Link>
                  کفش
                  <img
                    className="mega-menu-tab-icons"
                    src={megaMenuTabIconShoe}
                    alt="عکس"
                  />
                </Link>
              </li>
              <li>
                <Link>
                  کیف
                  <img
                    className="mega-menu-tab-icons"
                    src={megaMenuTabIconBag}
                    alt="عکس"
                  />
                </Link>
              </li>
              <li>
                <Link>
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

          <div className="container px-md-5 row my-5 mx-auto d-none">
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
              <div className="row m-0 p-0">
                <ul className="col-6 m-0 list-unstyled">
                  <li>
                    <Link className="mega-menu-banner-link">
                      کت پاییزه و زمستانی
                    </Link>
                  </li>
                  <li>
                    <Link className="mega-menu-banner-link">کاپشن</Link>
                  </li>
                  <li>
                    <Link className="mega-menu-banner-link">جلیقه پاییزه</Link>
                  </li>
                  <li>
                    <Link className="mega-menu-banner-link">
                      کت جین ست رسمی
                    </Link>
                  </li>
                  <li>
                    <Link className="mega-menu-banner-link">پیراهن</Link>
                  </li>
                  <li>
                    <Link className="mega-menu-banner-link">ژاکت و پلیور</Link>
                  </li>
                  <li>
                    <Link className="mega-menu-banner-link">سویشرت و هودی</Link>
                  </li>
                  <li>
                    <Link className="mega-menu-banner-link">
                      تی شرت و پولو شرت
                    </Link>
                  </li>
                  <li>
                    <Link className="mega-menu-banner-link">
                      راحتی شلوار و شلوارک
                    </Link>
                  </li>
                </ul>
                <ul className="col-6 m-0  list-unstyled">
                  <li>
                    <Link className="mega-menu-banner-link">جوراب و ساق</Link>
                  </li>
                  <li>
                    <Link className="mega-menu-banner-link">لباس راحتی </Link>
                  </li>
                  <li>
                    <Link className="mega-menu-banner-link">لباس زیر</Link>
                  </li>
                  <li>
                    <Link className="mega-menu-banner-link">فروش ویژه</Link>
                  </li>
                  <li>
                    <Link className="mega-menu-banner-link">فروش ویژه</Link>
                  </li>
                  <li>
                    <Link className="mega-menu-banner-link">
                      جدیدترین‌ها برترین
                    </Link>
                  </li>
                  <li>
                    <Link className="mega-menu-banner-link">
                      برندهای لباس مردانه
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="container px-md-5 row my-5 mx-auto h-auto">
            <div className="col-6 border">
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
            <div className="col-3 mr-auto border">
              <h1 className="mega-menu-title">خرید کیف مردانه</h1>
              <ul className="list-unstyled">
                <li>
                  <Link className="mega-menu-banner-link">کیف </Link>
                </li>
                <li>
                  <Link className="mega-menu-banner-link">کیف پول</Link>
                </li>
                <li>
                  <Link className="mega-menu-banner-link">
                    کیف سفری و چمدان
                  </Link>
                </li>
                <li>
                  <Link className="mega-menu-banner-link">کوله پشتی</Link>
                </li>
                <li>
                  <Link className="mega-menu-banner-link">فروش ویژه</Link>
                </li>
                <li>
                  <Link className="mega-menu-banner-link">
                    جدیدترین‌ها برترین
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
