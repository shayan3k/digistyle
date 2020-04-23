import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="container footer row m-0 mx-auto px-md-5 py-md-5">
      <div className="col-3">
        <h1 className="text-left">DIGISTYLE</h1>
        <h3 className="mb-5 text-left">Invernt Your Style</h3>
        <div className="text-left">
          <Link to="#" className="footer-app-download d-inline-block">
            دانلود اپلیکیشن
          </Link>
        </div>
        <div className="footer-social-icons mt-5">
          <i className="fab fa-twitter"></i>
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-telegram"></i>
          <i className="fab fa-instagram"></i>
        </div>
      </div>
      <div className="col-5 d-flex justify-content-between align-items-center flex-column">
        <div>
          <h1 className="footer-title">ثبت‌نام در خبرنامه دیجی‌استایل</h1>
          <p className="footer-text">
            با ثبت‌نام در خبرنامه دیجی‌استایل، اولین نفری باشید که از جدیدترین
            محصولات، جشنواره‌ها و فروش‌های ویژه ما مطلع می‌شوید.
          </p>
        </div>

        <form action="#" className="footer-newsletter ml-auto">
          <input
            type="submit"
            value="ثبت ایمیل"
            className="footer-newsletter-submit"
          />
          <input type="text" className="footer-newsletter-input" />
        </form>
      </div>
      <div className="col-2">
        <h1 className="footer-title">اطلاعات دیجی‌استایل</h1>
        <Link to="#" className="footer-link d-block">
          درباره ما
        </Link>
        <Link to="#" className="footer-link d-block">
          تماس با ما
        </Link>
        <Link to="#" className="footer-link d-block">
          0912-9090 :پشتیبانی
        </Link>
      </div>
      <div className="col-2">
        <h1 className="footer-title">خدمات مشتریان</h1>
        <Link to="#" className="footer-link d-block">
          {" "}
          پاسخ به پرسش‌های متداول
        </Link>
        <Link to="#" className="footer-link d-block">
          رویه‌های بازگرداندن کالا
        </Link>
        <Link to="#" className="footer-link d-block">
          شرایط استفاده
        </Link>
        <Link to="#" className="footer-link d-block">
          حریم خصوصی
        </Link>
      </div>
    </div>
  );
}
