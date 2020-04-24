import React from "react";
import menItemsImage1 from "../../images/menItemsImage1.jpg";
import menItemsImage2 from "../../images/menItemsImage2.jpg";
import menItemsImage3 from "../../images/menItemsImage3.jpg";
function MensItems() {
  return (
    <div className="container px-md-5 d-flex justify-content-center align-items-center my-md-5">
      <div className="target-menu-img-item mx-md-2">
        <img className="w-100 h-100" src={menItemsImage1} alt="عکس" />
        <span className="font6">لباس مردانه</span>
      </div>
      <div className="target-menu-img-item mx-md-2">
        <img className="w-100 h-100" src={menItemsImage2} alt="عکس" />
        <span className="font6">کفش مردانه</span>
      </div>
      <div className="target-menu-img-item mx-md-2">
        <img className="w-100 h-100" src={menItemsImage3} alt="عکس" />
        <span className="font6">اکسسوری مردانه</span>
      </div>
    </div>
  );
}

export default MensItems;
