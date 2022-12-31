import React from "react";
import BlogSection from "../components/BlogSection/BlogSection";
import Hero from "../components/Hero/Hero";
import BrandSection from "../components/BrandSection/BrandSection";
import CoursesCarousel from "../components/CoursesCarousel/CoursesCarousel";
import FeaturesSection from "../components/FeaturesSection/FeaturesSection";
import Footer from "../components/Footer/Footer";
import InstructorCTA from "../components/InstructorCTA/InstructorCTA";
import LottieSection from "../components/LottieSection/LottieSection";
import Navbar from "../components/NavMenu/Navbar";
import NewsLetter from "../components/Newsletter/NewsLetter";
import Testimonials from "../components/Testimonials/Testimonials";

export async function getStaticProps() {
  return {
    props: {
      heading: "The best headlines around!",
      details: "This response is static.",
    },
  };
}

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <BrandSection />
      <FeaturesSection />
      <CoursesCarousel />
      <LottieSection />
      <Testimonials />
      <InstructorCTA />
      <BlogSection />
      <NewsLetter />
      <Footer />
    </>
  );
}
