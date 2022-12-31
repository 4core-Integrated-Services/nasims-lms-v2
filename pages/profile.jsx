import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/NavMenu/Navbar";
import Profilesection from "../components/ProfileSection/Profilesection";

export default function profile() {
  return (
    <>
      <Navbar />
      <Profilesection />
      <Footer />
    </>
  );
}
