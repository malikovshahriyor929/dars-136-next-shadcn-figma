import FaqSection from "@/components/accardion";
import Copo from "@/components/copo";
import Footer from "@/components/footer";
import Showcase from "@/components/showcase";
import TailwindandSoOn from "@/components/tailwindandsmth";
import React from "react";

const Home = () => {
  return (
    <div className="max-w-[1440px] mx-auto w-[90%]">
      <Showcase />
      <Copo />
      <TailwindandSoOn />
      <FaqSection />
      <Footer />
    </div>
  );
};

export default Home;
