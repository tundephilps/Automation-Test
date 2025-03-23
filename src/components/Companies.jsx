"use client";
import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";
import Logo1 from "../assets/Logo1.png";
import Logo2 from "../assets/Logo2.png";
import Logo3 from "../assets/Logo3.png";
import Logo4 from "../assets/Logo4.png";
import Logo5 from "../assets/Logo5.png";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Companies() {
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="bg-white py-6 overflow-hidden">
      <p className="text-center text-gray-500 text-sm my-4 pb-8">
        Join 4,000+ companies already growing
      </p>
      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <img src={Logo1} className="" />
          </div>

          <div>
            <img src={Logo2} />
          </div>
          <div>
            <img src={Logo3} />
          </div>
          <div>
            <img src={Logo4} />
          </div>
          <div>
            <img src={Logo5} />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Companies;
