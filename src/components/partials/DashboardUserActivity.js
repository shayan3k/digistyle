import React from "react";

export default function DashboardUserActivity() {
  return (
    <div className="m-0 p-0">
      <h1 className="dashboard-panel-user mb-3 font5">گزارش عملکرد</h1>
      <div className="row p-0 m-0">
        <ul className="col-md-4 list-group font3">
          <li className="list-group-item">سفارشات انصراف داده شده : 0</li>
          <li className="list-group-item"></li>
        </ul>
        <ul className="col-md-4 list-group font3">
          <li className="list-group-item">سفارشات در حال پردازش : 0</li>
          <li className="list-group-item">تعداد نظرات ارسال شده : 0</li>
        </ul>
        <ul className="col-md-4 list-group font3">
          <li className="list-group-item">تعداد کل سفارشات : 0</li>
          <li className="list-group-item">سفارشات ارسال شده : 0</li>
        </ul>
      </div>
    </div>
  );
}
