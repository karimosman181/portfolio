import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div id="exp">
      <div className=" w-full h-full inline-block z-0  p-34  xl:p-24 lg:p-16 md:p-12 sm:!pt-8 sm:!pb-8 sm:!pr-1 sm:!pl-0 ">
        <div className=" w-7/12 sm:!w-full m-auto">
          <span className=" text-textCode block w-full text-start">
            {"<" + "h2" + ">"}
          </span>
          <h1 className="text-light mt-2 mb-2 text-8xl text-center  md:text-6xl sm:!text-4xl block    w-full font-Gugi uppercase tracking-widest text-center ">
            Experience
          </h1>
          <span className=" text-textCode block w-full text-end">
            {"</" + "h2" + ">"}
          </span>
        </div>
      </div>
      <div className="flex flex-col ">
        <motion.div
          className=" border-t-2 border-solid border-primaryDark h-36 flex content-center items-center pl-4 text-white group relative z-10"
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 100 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <div>
            <h2 className="font-Gugi text-6xl md:text-4xl sm:!text-2xl">
              S
              <span className=" group-hover:text-dark transition-[color] ease  duration-1000">
                o
              </span>
              ftware Devel
              <span className=" group-hover:text-dark transition-[color] ease  duration-1000">
                o
              </span>
              per{" "}
              <span className=" font-Press_Start_2P text-2xl  sm:!text-xl">
                <span className=" group-hover:text-dark transition-[color] ease  duration-1000">
                  @
                </span>{" "}
                Empti
                <span className=" group-hover:text-dark transition-[color] ease  duration-1000">
                  o
                </span>
                Direct AS
              </span>
            </h2>
            <span className="  text-lg"> 6/2021 - present</span>
          </div>
          <span
            className={` bg-primaryDark  w-0 h-0 absolute -z-10  group-hover:w-full group-hover:h-full top-0 left-0  transition-[height, width] ease  duration-1000 `}
          >
            &nbsp;
          </span>
          <span
            className={` bg-primaryDark  w-0 h-0 absolute -z-10  group-hover:w-full group-hover:h-full bottom-0 right-0  transition-[height, width] ease  duration-1000 `}
          >
            &nbsp;
          </span>
        </motion.div>
        <motion.div
          className=" border-t-2 border-solid border-primaryDark h-36 flex content-center items-center pl-4 text-white group relative z-10 hover:text-dark  transition-[color] ease  duration-1000"
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 100 }}
          transition={{ duration: 1 }}
        >
          <div>
            <h2 className="font-Gugi text-6xl md:text-4xl sm:!text-2xl">
              Intern{" "}
              <span className=" font-Press_Start_2P text-2xl sm:!text-xl">
                @ Sicon Oil and gas CCC
              </span>
            </h2>
            <span className="  text-lg"> 8/2019 - 9/2019 </span>

            <span
              className={` bg-primaryDark  w-full h-0 absolute -z-10  group-hover:h-full top-0 left-0  transition-[height, width] ease  duration-1000`}
            >
              &nbsp;
            </span>
            <span
              className={` bg-primaryDark  w-full h-0 absolute -z-10  group-hover:h-full bottom-0 left-0  transition-[height, width] ease  duration-1000 `}
            >
              &nbsp;
            </span>
            <span
              className={` bg-primaryDark  w-0 h-full absolute -z-10  group-hover:w-full bottom-0 left-0  transition-[height, width] ease  duration-1000 `}
            >
              &nbsp;
            </span>
            <span
              className={` bg-primaryDark  w-0 h-full absolute -z-10  group-hover:w-full bottom-0 right-0  transition-[height, width] ease  duration-1000 `}
            >
              &nbsp;
            </span>
          </div>
        </motion.div>

        <motion.div
          className=" border-t-2 border-b-2 border-solid border-primaryDark h-36 flex content-center items-center pl-4 text-white group relative z-10"
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 100 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <div>
            <h2 className="font-Gugi text-6xl md:text-4xl sm:!text-2xl">
              Intern{" "}
              <span className=" font-Press_Start_2P text-2xl sm:!text-xl">
                @ FIREX
              </span>
            </h2>
            <span className="  text-lg"> 7/2018 - 8/2018</span>
          </div>
          <span
            className={` bg-primaryDark  w-0 h-0 absolute rounded-full -z-10  group-hover:w-full group-hover:h-full top-1/4 left-1/4 group-hover:top-0 group-hover:left-0  group-hover:rounded-none  transition-[height, width, top, left, border-radius] ease  duration-1000 `}
          >
            &nbsp;
          </span>
          <span
            className={` bg-primaryDark  w-0 h-0 absolute -z-10  rounded-full  group-hover:w-full group-hover:h-full group-hover:bottom-0 group-hover:right-0 bottom-1/4 right-1/4  group-hover:rounded-none transition-[height, width, bottom, right, border-radius] ease  duration-1000 `}
          >
            &nbsp;
          </span>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
