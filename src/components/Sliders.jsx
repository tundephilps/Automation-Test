import React from "react";
import Tab1 from "../assets/Tab1.png";

import Tab2 from "../assets/Tab2.png";
import Tab3 from "../assets/Tab3.png";
import Tab4 from "../assets/Tab4.png";
import Tab5 from "../assets/Tab5.png";

export const MarketPrediction = () => {
  return (
    <div className="flex lg:flex-row flex-col w-full lg:h-[523px] h-full  bg-[#F6FAF3] rounded-lg overflow-hidden ">
      {/* Left section with text */}
      <div className="lg:w-1/2 w-full px-12 py-24 flex flex-col justify-start items-start">
        <h3 className="text-[#828282] text-[19px] font-medium mb-2">
          Market Prediction
        </h3>
        <h2
          className="text-[#22263f]  font-bold mb-3 lg:text-[42.9px] text-lg text-start lg:w-[85%] w-full"
          style={{ lineHeight: "50px", fontFamily: "Figtree, sans-serif" }}
        >
          Use AI insights for smarter business decisions and stay competitive.
        </h2>
        <button className="bg-[#03217f] text-white font-medium py-2 px-4 rounded-md w-32 mt-2">
          Learn more
        </button>
      </div>

      {/* Right section with graph image */}
      <div className="lg:w-1/2 w-full  relative ">
        <div className="absolute mt-8 inset-0 h-[513px] flex items-center justify-center">
          {/* Placeholder for the actual graph image */}
          <div className="w-full h-full flex items-center justify-center">
            {/* Graph lines (simplified representation) */}
            <img src={Tab1} className="w-full h-[513px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export const Finance = () => {
  return (
    <div className="flex lg:flex-row flex-col w-full lg:h-[523px] h-full  bg-[#F6FAF3] rounded-lg overflow-hidden ">
      {/* Left section with text */}
      <div className="lg:w-1/2 w-full px-12 py-24 flex flex-col justify-start items-start">
        <h3 className="text-[#828282] text-[19px] font-medium mb-2">Finance</h3>
        <h2
          className="text-[#22263f]  font-bold mb-3 lg:text-[42.9px] text-lg text-start lg:w-[85%] w-full"
          style={{ lineHeight: "50px", fontFamily: "Figtree, sans-serif" }}
        >
          Our AI models analyze financial data for confident investments.
        </h2>
        <button className="bg-[#03217f] text-white font-medium py-2 px-4 rounded-md w-32 mt-2">
          Learn more
        </button>
      </div>

      {/* Right section with graph image */}
      <div className="lg:w-1/2 w-full  relative ">
        <div className="absolute mt-8 inset-0 h-[513px] flex items-center justify-center">
          {/* Placeholder for the actual graph image */}
          <div className="w-full h-full flex items-center justify-center">
            {/* Graph lines (simplified representation) */}
            <img src={Tab2} className="w-full h-[513px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export const Analytics = () => {
  return (
    <div className="flex lg:flex-row flex-col w-full lg:h-[523px] h-full  bg-[#F6FAF3] rounded-lg overflow-hidden ">
      {/* Left section with text */}
      <div className="lg:w-1/2 w-full px-12 py-24 flex flex-col justify-start items-start">
        <h3 className="text-[#828282] text-[19px] font-medium mb-2">
          Data Analytics
        </h3>
        <h2
          className="text-[#22263f]  font-bold mb-3 lg:text-[42.9px] text-lg text-start lg:w-[85%] w-full"
          style={{ lineHeight: "50px", fontFamily: "Figtree, sans-serif" }}
        >
          Transform data into insights with AI analytics that enhance decisions.
        </h2>
        <button className="bg-[#03217f] text-white font-medium py-2 px-4 rounded-md w-32 mt-2">
          Learn more
        </button>
      </div>

      {/* Right section with graph image */}
      <div className="lg:w-1/2 w-full  relative ">
        <div className="absolute mt-8 inset-0 h-[513px] flex items-center justify-center">
          {/* Placeholder for the actual graph image */}
          <div className="w-full h-full flex items-center justify-center">
            {/* Graph lines (simplified representation) */}
            <img src={Tab3} className="w-full h-[513px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export const ContentGeneration = () => {
  return (
    <div className="flex lg:flex-row flex-col w-full lg:h-[523px] h-full  bg-[#F6FAF3] rounded-lg overflow-hidden ">
      {/* Left section with text */}
      <div className="lg:w-1/2 w-full px-12 py-24 flex flex-col justify-start items-start">
        <h3 className="text-[#828282] text-[19px] font-medium mb-2">
          Content Generation
        </h3>
        <h2
          className="text-[#22263f]  font-bold mb-3 lg:text-[42.9px] text-lg text-start lg:w-[85%] w-full"
          style={{ lineHeight: "50px", fontFamily: "Figtree, sans-serif" }}
        >
          Create quality content easily with AI that knows your brand and
          audience.
        </h2>
        <button className="bg-[#03217f] text-white font-medium py-2 px-4 rounded-md w-32 mt-2">
          Learn more
        </button>
      </div>

      {/* Right section with graph image */}
      <div className="lg:w-1/2 w-full  relative ">
        <div className="absolute mt-8 inset-0 h-[513px] flex items-center justify-center">
          {/* Placeholder for the actual graph image */}
          <div className="w-full h-full flex items-center justify-center">
            {/* Graph lines (simplified representation) */}
            <img src={Tab4} className="w-full h-[513px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export const CustomerSupport = () => {
  return (
    <div className="flex lg:flex-row flex-col w-full lg:h-[523px] h-full   bg-[#F6FAF3] rounded-lg overflow-hidden ">
      {/* Left section with text */}
      <div className="lg:w-1/2 w-full px-12 py-24 flex flex-col justify-start items-start">
        <h3 className="text-[#828282] text-[19px] font-medium mb-2">
          Customer Support
        </h3>
        <h2
          className="text-[#22263f]  font-bold mb-3 lg:text-[42.9px] text-lg text-start lg:w-[85%] w-full"
          style={{ lineHeight: "50px", fontFamily: "Figtree, sans-serif" }}
        >
          Use AI chatbots for instant, personalized customer support.
        </h2>
        <button className="bg-[#03217f] text-white font-medium py-2 px-4 rounded-md w-32 mt-2">
          Learn more
        </button>
      </div>

      {/* Right section with graph image */}
      <div className="lg:w-1/2 w-full  relative ">
        <div className="absolute mt-8 inset-0 h-[513px] flex items-center justify-center">
          {/* Placeholder for the actual graph image */}
          <div className="w-full h-full flex items-center justify-center">
            {/* Graph lines (simplified representation) */}
            <img src={Tab5} className="w-full h-[513px]" />
          </div>
        </div>
      </div>
    </div>
  );
};
