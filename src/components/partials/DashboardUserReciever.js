import React from "react";

export default function DashboardUserReciever() {
  return (
    <div className="m-0 p-0">
      <h1 className="dashboard-panel-user mb-3 font5">اطلاعات تحویل گیرنده</h1>

      <form action="">
        <div className="row p-0 m-0 rtl">
          <div className="col-md-6 py-1 my-1">
            <input
              className="dashboard-panel-user-info-change-input"
              type="text"
              name=""
              id=""
              placeholder="نام و نام خانوادگی"
            />
          </div>
          <div className="col-md-6 py-1 my-1">
            <input
              className="dashboard-panel-user-info-change-input"
              type="text"
              name=""
              id=""
              placeholder="تلفن همراه"
            />
          </div>

          <div className="col-md-6 py-1 my-1"> آدرس </div>

          <input
            type="submit"
            className="col-md-7 ml-auto dashboard-panel-user-info-change-submit mt-4"
            value="ثبت اطلاعات و بازگشت"
          />
        </div>
      </form>
    </div>
  );
}
