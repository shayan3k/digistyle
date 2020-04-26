import React from "react";

export default function DashboardUserInfo() {
  return (
    <div className="m-0 p-0">
      <h1 className="dashboard-panel-user mb-3 font5">اطلاعات مشتری حقیقی</h1>
      <div className="row p-0 m-0">
        <ul className="col-md-6 list-group font3">
          <li className="list-group-item">تاریخ تولد :</li>
          <li className="list-group-item">جنسیت :</li>
          <li className="list-group-item">محل سکونت :</li>
          <li className="list-group-item">دریافت خبرنامه : بلی</li>
          <li className="list-group-item">شماره کارت :</li>
        </ul>
        <ul className="col-md-6 list-group font3">
          <li className="list-group-item">نام و نام خانوادگی :</li>
          <li className="list-group-item">آدرس الکترونیک :</li>
          <li className="list-group-item">کد ملی :</li>
          <li className="list-group-item">شماره تلفن ثابت :</li>
          <li className="list-group-item">شماره تلفن همراه : 09127170126</li>
        </ul>
      </div>
    </div>
  );
}
