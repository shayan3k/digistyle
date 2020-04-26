import React from "react";
import Navbar from "./partials/Navbar";
import Footer from "./partials/Footer";
import DashboardPanel from "./partials/DashboardPanel";
import Developer from "./partials/Developer";
import BreadCrumbs from "./partials/BreadCrumbs";

export default function Dashboard() {
  return (
    <>
      <Navbar />
      <BreadCrumbs />
      <DashboardPanel />

      <Footer />
      <Developer />
    </>
  );
}
