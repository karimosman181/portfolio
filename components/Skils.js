import React from "react";
import { motion } from "framer-motion";
import { NodejsIcon } from "./Icons";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center  rounded-full font-semibold bg-primaryDark text-dark p-8  shadow-light cursor-pointer px-6 py-3 absolute "
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
      //animate once uncomment below
      // viewport={{once:true}}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <div>
      <div className=" w-full h-full inline-block z-0  p-34  xl:p-24 lg:p-16 md:p-12 sm:p-8 ">
        <div className=" w-7/12 m-auto">
          <span className=" text-textCode block w-full text-start">
            {"<" + "h2" + ">"}
          </span>
          <h1 className="text-light mt-2 mb-2 text-8xl block    w-full font-Gugi uppercase tracking-widest text-center ">
            Skills
          </h1>
          <span className=" text-textCode block w-full text-end">
            {"</" + "h2" + ">"}
          </span>
        </div>
      </div>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-cicularLight dark:bg-cicularDark">
        <motion.div
          className="flex items-center justify-center  rounded-full font-semibold bg-primaryDark text-dark p-8  shadow-light cursor-pointer "
          whileHover={{ scale: 1.05 }}
        ></motion.div>

        <Skill name="JavaScript" x="-5vw" y="-10vw" />
        <Skill name="TypeScript" x="5vw" y="10vw" />
        <Skill name="PHP" x="20vw" y="15vw" />
        <Skill name="Node.js" x="19vw" y="-2vw" />
        <Skill name="Java" x="-25vw" y="15vw" />
        <Skill name="CSS" x="-10vw" y="-20vw" />
        <Skill name="HTML" x="-25vw" y="-5vw" />
        <Skill name="Python" x="35vw" y="-10vw" />
      </div>
    </div>
  );
};

export default Skills;
