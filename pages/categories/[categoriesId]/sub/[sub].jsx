import React from "react";
import Navbar from "../../../../components/NavMenu/Navbar";
import { useRouter } from "next/router";
import CategorieSection from "../../../../components/CategoriesSection/CategorieSection";
import SubCategorieSection from "../../../../components/SubCategoriesSection/SubCategoriesSecion";
import Footer from "../../../../components/Footer/Footer";

export default function SubCategories() {
  const router = useRouter();
  const subId = router.query.sub;
  console.log(subId);
  return (
    <>
      <Navbar />
      <SubCategorieSection subId={subId} />
      {/* <Footer /> */}
    </>
  );
}
