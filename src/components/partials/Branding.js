import React from "react";
import { Link } from "react-router-dom";

export default function Branding() {
  return (
    <div className="container row m-0 mx-auto px-md-5">
      <div className="col-6">
        <div className="branding-title">
          فروشگاه اینترنتی مد و لباس دیجی‌استایل
        </div>
        <div className="branding-text">
          دیجی‌استایل، پس از تجربه‌ی موفق فروشگاه اینترنتی دیجی‌کالا به صورت
          تخصصی پا به عرصه مد، پوشاک و سبک زندگی گذاشت تا همان تجربه‌ی شیرین، در
          قالبی نو تکرار شود. در دیجی ‌استایل می‌توانید همه آنچه مرتبط با مد و
          پوشاک است؛ از انواع لباس، کیف و کفش تا محصولات آرایشی و بهداشتی، لوازم
          خانه و اکسسوری‌هایی مانند ساعت مچی و عینک آفتابی را با تخفیف ویژه در
          حراج ها، پیدا کنید و به سادگی دیجی‌استایل، پس از تجربه‌ی موفق فروشگاه
          اینترنتی دیجی‌کالا به تخصصی پا به عرصه مد، پوشاک و سبک زندگی گذاشت تا
          همان تجربه‌ی شیرین، در قالبی نو تکرار شود. در دیجی ‌استایل می‌توانید
          همه آنچه مرتبط با مد و پوشاک است؛ از انواع لباس، کیف و کفش تا محصولات
          آرایشی و بهداشتی، لوازم خانه و اکسسوری‌هایی مانند ساعت مچی و عینک
          آفتابی را با تخفیف ویژه در حراج ها، پیدا کنید و به سادگی
        </div>
        <Link
          to="#"
          className="branding-readmore d-block text-decoration-none text-left"
        >
          بیشتر بخوانید
        </Link>
      </div>
      <div className="col-6 row m-0 p-0">
        <div className="col-4 p-3">
          <img src="http://placehold.jp/100x00.png" alt="" />
        </div>
        <div className="col-4 p-3">
          <img src="http://placehold.jp/100x00.png" alt="" />
        </div>
        <div className="col-4 p-3">
          <img src="http://placehold.jp/100x00.png" alt="" />
        </div>
      </div>
    </div>
  );
}
