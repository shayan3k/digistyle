import React from "react";

export default function LoginPanel() {
  return (
    <div className="container my-4">
      <h1 className="login-panel-title  text-center mb-md-2">
        ورود یا ثبت‌نام
      </h1>
      <form
        action=""
        className="login-panel-form text-center mb-5 mx-auto pt-3"
      >
        <h3 className="login-panel-form-title  my-md-1 mb-2">
          لطفا برای ادامه شماره همراه یا ایمیل خود را وارد نمایید
        </h3>
        <div className="login-panel-form-input-container my-5 text-center">
          <input
            type="text"
            name=""
            id=""
            className="login-panel-form-input font3"
            placeholder="شماره همراه خود را وارد نمایید."
          />
          <i class="fa fa-user px-1" aria-hidden="true"></i>
        </div>

        <input
          type="text"
          name=""
          id=""
          className="login-panel-form-submit text-center mx-auto mb-md-2 w-75"
          placeholder="ادامه"
        />
      </form>
    </div>
  );
}
