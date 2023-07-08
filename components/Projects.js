import React from "react";
import Link from "next/link";
import AnimatedText from "./AnimatedText";
import { motion } from "framer-motion";
import Carousel from "./Carousel";
const Projects = () => {
  return (
    <div className="">
      <div className=" w-full h-full inline-block z-0  p-34  xl:p-24 lg:p-16 md:p-12 sm:!p-8 ">
        <div className=" w-7/12 m-auto sm:w-full">
          <span className=" text-textCode block w-full text-start">
            {"<" + "h2" + ">"}
          </span>
          <h1 className="text-light mt-2 mb-2 text-8xl md:text-6xl sm:!text-4xl block    w-full font-Gugi uppercase tracking-widest text-start ">
            Projects
          </h1>
          <span className=" text-textCode block w-full text-end">
            {"</" + "h2" + ">"}
          </span>
        </div>
      </div>
      <div>
        <Carousel />
      </div>
    </div>
  );
};

export default Projects;
