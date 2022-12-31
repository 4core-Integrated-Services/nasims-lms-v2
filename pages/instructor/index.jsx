import React from "react";
// import { useRouter } from "next/router";
import Navbar from "../../components/NavMenu/Navbar";
import InstructorSection from "../../components/InstructorSection/InstructorSection";

export default function Instructor() {
  //   const {
  //     query: { instructorId },
  //   } = useRouter();

  return (
    <>
      <Navbar />
      <InstructorSection />
      {/* <Footer /> */}
    </>
  );
}
