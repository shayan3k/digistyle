import React from "react";
import Brand from "../../images/Brand.jpg";

function BrandsLists() {
  return (
    <>
      <div className="container-fluid row m-9 p-0 border-bottom">
        <form className="form-navbar-search col-3">
          <input
            className="input-navbar-search font4"
            type="search"
            placeholder="Search"
          />
          <button className="btn btn-navbar-search" type="submit">
            <i className="fas fa-search"></i>
          </button>
        </form>

        <ul class="col-9 list-group list-group-horizontal-sm rtl">
          <button className="brand-lists-btn"> همه برندها</button>
          <button className="brand-lists-btn">برندهای ایرانی</button>
          <button className="brand-lists-btn">برندهای خارجی</button>
        </ul>
      </div>
      <div className="container row m-0 p-0 mx-auto brand-our-brands-gallery my-4">
        <div className="col-3 p-0 px-1 m-0">
          <img className="w-100 h-100" src={Brand} alt="عکس" />
        </div>
        <div className="col-3  p-0 px-1 m-0">
          <img className="w-100 h-100" src={Brand} alt="عکس" />
        </div>
        <div className="col-3 p-0 px-1 m-0">
          <img className="w-100 h-100" src={Brand} alt="عکس" />
        </div>
        <div className="col-3  p-0 px-1 m-0">
          <img className="w-100 h-100" src={Brand} alt="عکس" />
        </div>
        <div className="col-3 p-0 px-1 m-0">
          <img className="w-100 h-100" src={Brand} alt="عکس" />
        </div>
        <div className="col-3  p-0 px-1 m-0">
          <img className="w-100 h-100" src={Brand} alt="عکس" />
        </div>
        <div className="col-3 p-0 px-1 m-0">
          <img className="w-100 h-100" src={Brand} alt="عکس" />
        </div>
        <div className="col-3  p-0 px-1 m-0">
          <img className="w-100 h-100" src={Brand} alt="عکس" />
        </div>
      </div>
    </>
  );
}

export default BrandsLists;
