import React from "react";
import supportSvg1 from "../../images/supportSvg1.svg";
import supportSvg2 from "../../images/supportSvg2.svg";
import supportSvg3 from "../../images/supportSvg3.svg";
export default function SupportSection() {
  return (
    <div className="container mx-auto support-section my-1 my-md-5 py-md-5  border-bottom">
      <h1 className="support-section-h1">با خیال راحت</h1>
      <h3 className="support-section-h3 mb-md-5">از دیجی‌استایل خرید کنید</h3>
      <div className="row m-0 mx-md-5 px-md-5">
        <a href="#" className="col-12 col-md-4 support-section-link">
          <div className="w-100  text-center py-1">
            <img src={supportSvg1} alt="عکس" />
          </div>
          <h4 className="support-section-subheader text-center py-1">
            کالاهای اورجینال
          </h4>
          <h6 className="support-section-text text-center py-1">
            دیجی‌استایل نماینده رسمی برندهاست. با اطمینان از اورجینال بودن محصول
            خرید کنید.
          </h6>
        </a>

        <a href="#" className="col-12 col-md-4 support-section-link">
          <div className="w-100  text-center py-1">
            <img src={supportSvg2} alt="عکس" />
          </div>
          <h4 className="support-section-subheader text-center py-1">
            کالاهای اورجینال
          </h4>
          <h6 className="support-section-text text-center py-1">
            دیجی‌استایل نماینده رسمی برندهاست. با اطمینان از اورجینال بودن محصول
            خرید کنید.
          </h6>
        </a>

        <a href="#" className="col-12 col-md-4 support-section-link">
          <div className="w-100  text-center py-1">
            <img src={supportSvg3} alt="عکس" />
          </div>
          <h4 className="support-section-subheader text-center py-1">
            کالاهای اورجینال
          </h4>
          <h6 className="support-section-text text-center py-1">
            دیجی‌استایل نماینده رسمی برندهاست. با اطمینان از اورجینال بودن محصول
            خرید کنید.
          </h6>
        </a>
      </div>
    </div>
  );
}
