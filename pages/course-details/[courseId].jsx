import React from "react";
import { useRouter } from "next/router";
import Navbar from "../../components/NavMenu/Navbar";
import CourseDetailsSection from "../../components/CourseDetailsSection/CourseDetailsection";
import Footer from "../../components/Footer/Footer";

export default function CourseDetails() {
  const {
    query: { courseId },
  } = useRouter();

  return (
    <>
      <Navbar />
      <CourseDetailsSection courseId={courseId} />
      <Footer />
    </>
  );
}
