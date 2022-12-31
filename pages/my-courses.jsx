import React from "react";
import Footer from "../components/Footer/Footer";
import MyCoursetab from "../components/MyCoursesTab/MyCoursetab";
import Navbar from "../components/NavMenu/Navbar";
import WelcomeSection from "../components/WelcomeSection/WelcomeSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <WelcomeSection />
      <MyCoursetab />
      <Footer />
    </>
  );
}
