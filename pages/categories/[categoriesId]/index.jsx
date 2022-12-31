import React from "react";
import Navbar from "../../../components/NavMenu/Navbar";
import { useRouter } from "next/router";
import CategorieSection from "../../../components/CategoriesSection/CategorieSection";
import Footer from "../../../components/Footer/Footer";

export default function Categories() {
  const router = useRouter();
  const categoriesId = router.query.categoriesId;
  return (
    <>
      <Navbar />
      <CategorieSection categoriesId={categoriesId} />
      <Footer />
    </>
  );
}
