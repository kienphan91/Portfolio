import React, { Component } from "react";
import Typical from "react-typical";

const Banner = () => {
  return (
    <>
      <img
        loading="lazy"
        src="../../img/kien.png"
        alt="Kien picture"
        className="absolute bottom-0 right-20 lg:-left-20 mx-auto object-cover h-5/6 -z-5"
      />
      <div className="hidden lg:block absolute -bottom-1/4 right-0 left-0 mx-auto w-big h-big bg-indigo-900 rounded-full -z-10"></div>
      <div className="absolute top-1/3 left-5 text-xl sm:left-10 sm:text-4xl md:left-1/4 md:text-6xl lg:left-5 xl:left-48 xl:text-7xl font-bold">
        <span className="text-gray-600">Fresher</span>
        <AutoTyping />
      </div>
      <div className="hidden lg:flex flex-col gap-5 rounded-md shadow-lg absolute top-0 bottom-0 m-auto right-10 bg-white p-6 h-fit w-1/3">
        <h1 className="text-4xl font-bold text-indigo-900">Hi, I'm Kien</h1>
        <p className="text-gray-400">
          Looking for a long-term job. Desire to have a salary suitable to the
          profession. Wish to have the opportunity to contribute a part to the
          development of the Company
        </p>
        <a
          className="bg-indigo-600 text-white text-xl px-3 py-2 rounded-md font-semibold w-fit"
          href="#contact"
        >
          Hire Me
        </a>
      </div>
    </>
  );
};

function AutoTyping() {
  return (
    <Typical
      steps={["Developer", 3000, "Author", 3000, "Designer", 3000]}
      loop={Infinity}
      wrapper="p"
      className="text-red-500"
    />
  );
}

export default Banner;
