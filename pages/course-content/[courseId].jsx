import React from "react";
import { useRouter } from "next/router";
import Navbar from "../../components/NavMenu/Navbar";
import Footer from "../../components/Footer/Footer";
import CourseContentSection from "../../components/CourseContentSection/CourseContentSection";

export default function CourseContent() {
  const {
    query: { courseId },
  } = useRouter();
  return (
    <>
      <Navbar />
      <CourseContentSection courseId={courseId} />
      {/* <Footer /> */}
    </>
  );
}
