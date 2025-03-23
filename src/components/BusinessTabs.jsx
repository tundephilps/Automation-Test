import { useState } from "react";
import Half1 from "../assets/Half1.png";

import Half2 from "../assets/Half2.png";
import { motion, AnimatePresence } from "framer-motion";
import {
  MarketPrediction,
  Analytics,
  ContentGeneration,
  CustomerSupport,
  Finance,
} from "./Sliders";

const tabs = [
  {
    id: "market",
    label: "Market Prediction",
    content: <MarketPrediction />,
  },
  {
    id: "finance",
    label: "Finance",
    content: <Finance />,
  },
  {
    id: "analytics",
    label: "Analytics",
    content: <Analytics />,
  },
  {
    id: "content",
    label: "Content Generation",
    content: <ContentGeneration />,
  },
  {
    id: "support",
    label: "Customer Support",
    content: <CustomerSupport />,
  },
];

export default function BusinessTabs() {
  const [activeTab, setActiveTab] = useState("analytics");

  return (
    <div className="text-center ">
      <div className="flex flex-col items-center mt-6">
        {/* Tabs Container with Border */}
        <div className="inline-flex lg:gap-4 gap-0 p-1 border border-gray-300 rounded-md w-fit text-white">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`relative px-4 py-2 rounded-md lg:text-sm border-gray-300 text-[8px] font-medium transition ${
                activeTab === tab.id
                  ? "bg-[#03217f] text-white shadow-md"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-[#03217f] text-white opacity-10 rounded-md"
                  transition={{ duration: 0.3 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Animated Content */}
        <div className="mt-6 w-full gap-8 flex justify-center ">
          <div className=" mt-20 lg:flex hidden">
            <img src={Half1} />
          </div>
          <AnimatePresence mode="wait">
            {tabs.map(
              (tab) =>
                activeTab === tab.id && (
                  <motion.div
                    key={tab.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className=""
                  >
                    {tab.content}
                  </motion.div>
                )
            )}
          </AnimatePresence>
          <div className=" mt-20 lg:flex hidden">
            <img src={Half2} />
          </div>
        </div>
      </div>
    </div>
  );
}
