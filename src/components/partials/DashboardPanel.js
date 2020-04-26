import React from "react";
import DashboardUserInfo from "./DashboardUserInfo";
import DashboardUserActivity from "./DashboardUserActivity";
import DashboardUserInfoChange from "./DashboardUserInfoChange";
import DashboardUserReciever from "./DashboardUserReciever";

export default function DashboardPanel() {
  return (
    <div className="container my-5 mx-auto">
      <h1 className="text-right font7">
        <i class="fa fa-user fa-3x" aria-hidden="true"></i>
      </h1>
      <hr />
      <div className="row m-0 px-md-5 py-5">
        <div className="col-8">
          <DashboardUserReciever />
        </div>

        <div className="col-4 ">
          <ul className="dashboard-panel-menu list-group p-0 font4">
            <li className="list-group-item list-group-item-active">
              پروفایل کاربری <i class="fa fa-angle-left"></i>
            </li>
            <li className="list-group-item">
              اطلاعات کاربری <i class="fa fa-angle-left"></i>
            </li>
            <li className="list-group-item">
              گزارش عملکرد <i class="fa fa-angle-left"></i>
            </li>
            <li className="list-group-item">
              جزییات حساب کاربری <i class="fa fa-angle-left"></i>
            </li>
            <li className="list-group-item">
              تغییر رمز ورود <i class="fa fa-angle-left"></i>
            </li>
            <li className="list-group-item">
              لیست آدرس‌ها <i class="fa fa-angle-left"></i>
            </li>
            <li className="list-group-item">
              پیگیری سفارش‌ها <i class="fa fa-angle-left"></i>
            </li>
            <li className="list-group-item">
              لیست خرید بعدی <i class="fa fa-angle-left"></i>
            </li>
            <li className="list-group-item">
              نظرات ثبت‌شده <i class="fa fa-angle-left"></i>
            </li>
            <li className="list-group-item">
              کارت‌های هدیه <i class="fa fa-angle-left"></i>
            </li>
            <li className="list-group-item">
              خروج از حساب کاربری <i class="fa fa-angle-left"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
