import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Companies from "../components/Companies";
import BusinessTabs from "../components/BusinessTabs";
import AIModels from "../components/AIModels";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Companies />
      <AIModels />
      <BusinessTabs />
      <div className="h-44" />
    </div>
  );
};

export default Homepage;
