import React from "react";
import Link from "next/link";
import AnimatedText from "./AnimatedText";
import { motion } from "framer-motion";
import { CVBgComponent, Bg1Component, Bg1MobileComponent } from "./Icons";

const Hero = () => {
  return (
    <div className="flex items-center justify-between w-full overflow-hidden sm:pb-24">
      <div className="w-full flex flex-col items-left  pl-12 md:pl-0">
        <div>
          <span className=" text-textCode ">{"<" + "p" + ">"}</span>
          <span className=" text-primaryDark pl-2 pr-2  text-lg ">This is</span>
          <span className="text-textCode">{"</" + "p" + ">"}</span>
        </div>
        <div className="flex flex-col mt-6 ml-6 mb-6">
          <span className=" text-textCode ">{"<" + "h1" + ">"}</span>
          <AnimatedText text={"Karim"} />
          <AnimatedText text={"Osman"} />
          <span className=" text-textCode ">{"</" + "h1" + ">"}</span>
        </div>
        <di>
          <span className=" text-textCode ">{"<" + "p" + ">"}</span>
          <span className=" text-primaryDark pl-2 pr-2  text-lg">
            Software Developer
          </span>
          <span className="text-textCode">{"</" + "p" + ">"}</span>
        </di>
        <Bg1Component
          className={" absolute left-8 lg:translate-y-5  md:hidden"}
        />
        <Bg1MobileComponent
          className={" absolute hidden md:block md:translate-y-32 md:-left-0"}
        />
      </div>
      <div className="w-full  lg:w-44  lg:absolute lg:top-8 lg:right-6 sm:!relative sm:!w-26 sm:!top-28 sm:!right-20 ">
        <div className="w-full  lg:w-44 sm:!w-16  ">
          <div className=" w-full lg:w-44 h-auto flex items-center justify-center relative">
            <CVBgComponent className="absolute lg:hidden sm:!block sm:-translate-y-24" />
            <Link
              href="/resume.pdf"
              target={"_blank"}
              download={true}
              className="flex 
          items-center justify-center   border border-solid border-light text-light   w-60 h-60  rounded-full font-semibold relative z-10 group text-lg 
           lg:w-32 lg:h-32 lg:text-sm sm:!w-28 sm:!h-28 sm:!text-xs"
            >
              {" <Download CV/>"}
              <span
                className={` bg-primaryDark border border-solid border-primaryDark  rounded-full inline-block w-0 h-0 absolute -z-10  group-hover:h-60  group-hover:w-60  lg:group-hover:w-32 lg:group-hover:h-32 sm:group-hover:!w-28 sm:group-hover:!h-28 transition-[height, width] ease duration-300 `}
              >
                &nbsp;
              </span>
            </Link>
            <motion.span
              className=" border-t-2 border-solid border-light rounded-t-full absolute lg:w-36 lg:h-36 h-72 w-72  sm:!w-16 sm:!h-16  "
              initial={{ rotate: 0 }}
              whileInView={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity }}
            >
              &nbsp;
            </motion.span>
            <motion.span
              className=" border-b-2 border-solid border-light rounded-b-full absolute lg:w-40 lg:h-40 h-80 w-80 sm:!hidden"
              initial={{ rotate: 360 }}
              whileInView={{ rotate: 0 }}
              transition={{ duration: 8, repeat: Infinity }}
            >
              &nbsp;
            </motion.span>
            <motion.span
              className=" border-l-2 border-solid border-light rounded-l-full absolute lg:w-44 lg:h-44 h-96 w-96 sm:!w-32 sm:!h-32"
              initial={{ rotate: 360 }}
              whileInView={{ rotate: 0 }}
              transition={{ duration: 8, repeat: Infinity }}
            >
              &nbsp;
            </motion.span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
