import react from "react";
import Link from "next/link";
import AnimatedText from "./AnimatedText";
import { motion } from "framer-motion";
import { CVBgComponent, Bg1Component } from "./Icons";

const Hero = () => {
  return (
    <div className="flex items-center justify-between w-full ">
      <div className="w-full flex flex-col items-left  pl-12">
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
        <Bg1Component className={" absolute left-1 -bottom-28"} />
      </div>
      <div className="w-full">
        <div className="w-full">
          <div className=" w-full h-auto flex items-center justify-center relative">
            <CVBgComponent className="absolute " />
            <Link
              href=""
              className="flex 
          items-center 
          justify-center   border border-solid border-light text-light   w-60 h-60  rounded-full font-semibold relative z-10 group text-lg "
            >
              {" < Download CV />"}
              <span
                className={` bg-primaryDark border border-solid border-primaryDark  rounded-full inline-block w-0 h-0 absolute -z-10  group-hover:h-60  group-hover:w-60   transition-[height, width] ease duration-300 `}
              >
                &nbsp;
              </span>
            </Link>
            <motion.span
              className=" border-t-2 border-solid border-light rounded-t-full absolute  h-72 w-72  "
              initial={{ rotate: 0 }}
              whileInView={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity }}
            >
              &nbsp;
            </motion.span>
            <motion.span
              className=" border-b-2 border-solid border-light rounded-b-full absolute  h-80 w-80"
              initial={{ rotate: 360 }}
              whileInView={{ rotate: 0 }}
              transition={{ duration: 8, repeat: Infinity }}
            >
              &nbsp;
            </motion.span>
            <motion.span
              className=" border-l-2 border-solid border-light rounded-l-full absolute h-96 w-96"
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
