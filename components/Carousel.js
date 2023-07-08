import React from "react";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { Bg2Component } from "./Icons";
import { portfolioImage } from "../public/portfolio.png";

const data = [
  {
    title: "Portfolio",
    tech: "next.js, tailwindcss",
    desc: "A personal portfolio website built with Next.js and Tailwind CSS with  a modern and sleek design, with a focus on showcasing my skills, and projects.",
    src: "../portfolio.png",
  },
  // {
  //   title: "COMPANY 2 LTD",
  //   tech: "next.js",
  //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacinia, mauris non feugiat porttitor, enim elit fringilla dolor, id pretium risus magna sed felis. Donec consequat enim at ante dignissim aliquet. Morbi nec ante maximus, tincidunt sem eu, eleifend ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget accumsan risus, sed interdum eros. Maecenas pulvinar vehicula fermentum. Praesent eu nisl et metus pulvinar aliquam. Suspendisse potenti.",
  //   src: "https://d33wubrfki0l68.cloudfront.net/49de349d12db851952c5556f3c637ca772745316/cfc56/static/images/wallpapers/bridge-02@2x.png",
  // },
  // {
  //   title: "COMPANY 3 LTD",
  //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacinia, mauris non feugiat porttitor, enim elit fringilla dolor, id pretium risus magna sed felis. Donec consequat enim at ante dignissim aliquet. Morbi nec ante maximus, tincidunt sem eu, eleifend ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget accumsan risus, sed interdum eros. Maecenas pulvinar vehicula fermentum. Praesent eu nisl et metus pulvinar aliquam. Suspendisse potenti.",
  //   tech: "next.js",
  //   src: "https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png",
  // },
];

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const image_variants = {
  enter: (direction) => {
    return {
      // y: direction > 0 ? 1000 : -1000,
      width: 0,
      height: 0,
      rotate: 0,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    width: 256,
    height: 256,
    rotate: 360,
    // y: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      // y: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const Carousel = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [count, setCount] = useState(-260);
  const Index = wrap(0, data.length, page);

  const paginate = (newDirection, moveBar) => {
    setPage([page + newDirection, newDirection]);
    console.log(moveBar);
    console.log(page);
    count + moveBar > 260
      ? setCount(-260)
      : count + moveBar < -260
      ? setCount(260)
      : setCount(count + moveBar);
    console.log("after: " + count);
    // setCount(count + moveBar);
  };

  // const count = useRef(-260);

  const bar_variants = {
    enter: (direction) => {
      return {
        x: -260,
      };
    },
    center: (direction) => {
      return {
        x: count,
      };
    },
  };

  return (
    <>
      <AnimatePresence initial={false} custom={direction}>
        <div className="flex flex-row md:flex-col">
          <div className="flex w-3/4 sm:w-full items-center content-center justify-end">
            <motion.span
              className="border border-solid border-light rounded-full w-72 h-72 absolute opacity-100"
              initial={{ opacity: 100 }}
              whileInView={{ opacity: 0 }}
              transition={{ duration: 1, repeat: Infinity }}
            ></motion.span>
            <motion.span
              className="border border-solid border-light rounded-full w-80 h-80 absolute translate-x-3 opacity-50"
              initial={{ opacity: 100 }}
              whileInView={{ opacity: 0 }}
              transition={{ duration: 2, repeat: Infinity }}
            ></motion.span>
            <motion.span
              className="border border-solid border-light rounded-full w-[22rem] h-[22rem] absolute translate-x-6 opacity-20"
              initial={{ opacity: 100 }}
              whileInView={{ opacity: 0 }}
              transition={{ duration: 3, repeat: Infinity }}
            ></motion.span>
            <motion.img
              key={page}
              src={data[Index].src}
              custom={direction}
              variants={image_variants}
              initial="enter"
              whileInView={{ rotate: 360 }}
              transition={{ duration: 1 }}
              exit="exit"
              animate="center"
              className=" rounded-full w-64 h-64 relative right-4 "
              // transition={{
              //   y: { type: "spring", stiffness: 300, damping: 30 },
              //   opacity: { duration: 0.2 },
              // }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1, -260);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1, 260);
                }
              }}
            />
          </div>
          <div className="w-3/4  sm:w-full ">
            <motion.div
              className="flex flex-col"
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
            >
              <span className="block text-textCode ">{"<" + "p" + ">"}</span>
              <div className="w-3/4  sm:w-full pl-10 sm:min-h-[13rem]">
                <h3 className="text-primaryDark text-3xl mb-4 font-Gugi uppercase">
                  {data[Index].title}
                </h3>
                <p className="text-light">{data[Index].desc}</p>
                <h4 className="text-primaryDark  text-xl mt-2">
                  {data[Index].tech}
                </h4>
              </div>
              <span className="block text-textCode ">{"<" + "p" + ">"}</span>
            </motion.div>
          </div>
        </div>
      </AnimatePresence>
      <div className="w-3/4 sm:w-full m-auto sm:relative">
        <Bg2Component
          className={"absolute translate-x-96 -translate-y-4 md:hidden "}
        />
        <div className="grid grid-flow-col grid-cols-6 grid-rows-1 pt-6 translate-y-14 sm:absolute sm:right-0 sm:-translate-y-16">
          <div className=" row-span-1 col-span-1  flex items-center justify-center content-center sm:col-span-3">
            <div
              className="next flex items-center justify-center content-center border border-solid border-light text-primaryDark rounded-full w-20 h-20 "
              onClick={() => paginate(1, -260)}
            >
              <span className="text-3xl leading-tight">{"<"}</span>
            </div>
          </div>

          <div className="row-span-1 col-span-4 sm:hidden flex items-center justify-center content-center ">
            <span className=" bg-textCode w-full block rounded-full">
              &nbsp;
            </span>
            <motion.span
              className=" bg-primaryDark w-[10%]  block rounded-full absolute"
              key={page}
              custom={direction}
              variants={bar_variants}
              initial="enter"
              animate="center"
            >
              &nbsp;
            </motion.span>
          </div>
          <div className=" row-span-1 col-span-1  flex items-center justify-center content-center sm:col-span-3">
            <div
              className="prev flex items-center justify-center content-center border border-solid border-light text-primaryDark rounded-full w-20 h-20"
              onClick={() => paginate(-1, 260)}
            >
              <span className="text-3xl leading-tight">{">"}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
