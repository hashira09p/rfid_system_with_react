import React, { useState, useTheme } from "react";

import heroVideo from "../../assets/tup_journey.mp4"
import "./HeroSection.css"

export default function HeroSection() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-wide drop-shadow-lg">
          Elevate Your Experience
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl opacity-90 drop-shadow-md">
          Discover the next level of innovation with our cutting-edge solutions.
        </p>
        <button className="mt-6 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white text-lg font-semibold rounded-xl shadow-xl transition duration-300 transform hover:scale-105">
          Get Started
        </button>
      </div>
    </div>
  );
}