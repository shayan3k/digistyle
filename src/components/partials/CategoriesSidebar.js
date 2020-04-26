import React from "react";

function CategoriesSidebar() {
  const handleResetTitleClick = () => {
    let contents = document.querySelectorAll(".categories-sidebar > div");
    contents.forEach((item, index) => {
      console.log("hello");
    });
  };
  const handleCollapseTitleClick = (e) => {
    e.target.nextElementSibling.classList.toggle(
      "category-sidebar-content-show"
    );
    event.target.querySelector("i").classList.toggle("fa-rotate-270");
    console.log(e.target.nextElementSibling);
  };
  return (
    <div class="categories-sidebar">
      <div>
        <button
          className="category-sidebar-title py-2"
          onClick={handleCollapseTitleClick}
        >
          مردانه <i class="fa fa-angle-left"></i>
        </button>
        <div className="category-sidebar-content border-bottom">
          <h1 className="category-sidebar-content-title">لباس مردانه</h1>
          <ul className="list-unstyled">
            <li>ایتم</li>
            <li>ایتم</li>
            <li>ایتم</li>
            <li>ایتم</li>
            <li>ایتم</li>
            <li>ایتم</li>
            <li>ایتم</li>
            <li>ایتم</li>
          </ul>
        </div>
      </div>
      <div className="w-100 text-right category-sidebar-title py-2 border-bottom">
        <label className="m-0 mr-1" htmlFor="">
          فقط کالاهای digistyle
        </label>
        <input type="checkbox" name="" id="" />
      </div>

      <div>
        <button
          className="category-sidebar-title py-2"
          onClick={handleCollapseTitleClick}
        >
          برندها <i class="fa fa-angle-left"></i>
        </button>
        <div className="category-sidebar-content border-bottom">
          <h1 className="category-sidebar-content-title">لباس مردانه</h1>
          <ul className="list-unstyled">
            <li>ایتم</li>
            <li>ایتم</li>
            <li>ایتم</li>
            <li>ایتم</li>
            <li>ایتم</li>
            <li>ایتم</li>
            <li>ایتم</li>
            <li>ایتم</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CategoriesSidebar;
