import React from "react";

export default function BreadCrumbs() {
  return (
    <nav className="breadcrumbs-container">
      <ul
        vocab="https://schema.org/"
        typeof="BreadcrumbList"
        className="breadcrumbs-ul"
      >
        <li>
          <a href="#">
            <span>بازگشت به نتایج</span>
          </a>
        </li>

        <li property="itemListElement" typeof="ListItem">
          <a property="item" typeof="WebPage" href="https://www.digistyle.com">
            <span property="name">فروشگاه اینترنتی لباس دیجی‌استایل</span>
          </a>
          <meta property="position" content="1" />
        </li>

        <span></span>
        <li property="itemListElement" typeof="ListItem">
          <a property="item" typeof="WebPage" href="/mens-apparel-shop/">
            <span property="name">مردانه</span>
          </a>
          <meta property="position" content="2" />
        </li>
        <span></span>
        <li property="itemListElement" typeof="ListItem">
          <a property="item" typeof="WebPage" href="/category-men-shoes/">
            <span property="name">کفش مردانه</span>
          </a>
          <meta property="position" content="3" />
        </li>
        <span></span>
        <li property="itemListElement" typeof="ListItem">
          <a
            property="item"
            typeof="WebPage"
            href="/category-men-sport-shoes-/"
          >
            <span property="name">کفش ورزشی مردانه</span>
          </a>
          <meta property="position" content="4" />
        </li>
        <span></span>
        <li>
          <span property="name" className="c-breadcrumb__current">
            {" "}
            کفش مخصوص پیاده روی مردانه کد UM
          </span>
        </li>
      </ul>
    </nav>
  );
}
