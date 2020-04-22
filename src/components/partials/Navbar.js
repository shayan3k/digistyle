import React from "react";

export default function Navbar() {
  return (
    <nav className="container-fluid navbar row m-0 p-0">
      <div className="col-4 ">
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
      <a className="col-4 navbar-brand m-0 text-center" href="#">
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
    </nav>
  );
}
