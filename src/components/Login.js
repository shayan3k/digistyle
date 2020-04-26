import React from "react";
import Navbar from "./partials/Navbar";
import Footer from "./partials/Footer";
import LoginPanel from "./partials/LoginPanel";

import Developer from "./partials/Developer";

export default function Login() {
  return (
    <>
      <Navbar />

      <LoginPanel />

      <Footer />
      <Developer />
    </>
  );
}
