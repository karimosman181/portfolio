import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Logo from "./Logo";

const MotionLink = motion(Link);
const CustomLink = ({ href, number, title, className = "" }) => {
  const router = useRouter();

  return (
    <MotionLink
      href={href}
      className={`${className} text-light  row-span-1 col-span-1 relative group z-10   ${
        router.asPath === href ? "text-primaryDark " : "hover:text-primaryDark"
      }`}
    >
      {"//0" + number + "."}
      <span className="ml-4">{"<" + title + "  />"}</span>
      <span
        className={` h-[120%] inline-block w-0  absolute -z-10  -bottom-0.5 group-hover:pl-[55%]  group-hover:pr-[55%] group-hover:-left-2  transition-[padding, left] ease duration-300  
         ${
           router.asPath === href
             ? "pl-[55%] pr-[55%] -left-2 border  border-solid border-primaryDark "
             : "left-1/2 group-hover:border  group-hover:border-solid group-hover:border-primaryDark "
         }`}
      >
        &nbsp;
      </span>
    </MotionLink>
  );
};

const MobileCustomLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();
  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      href={href}
      className={`${className} relative group text-light dar:text-dark my-2`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`h-[1px] inline-block  bg-light  absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300  dark:bg-dark ${
          router.asPath === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </button>
  );
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full">
      <div className="w-full px-32 py-8 font-medium hidden  lg:flex items-center justify justify-between dark:text-light  relative z-10 lg:px-16 md:px-12 sm:px-8">
        {/* <button
          className=" flex-col justify-center items-center hidden lg:flex"
          onClick={handleClick}
        >
          <span
            className={`bg-dark dark:bg-light block transition-all duration-300 ease-out  h-0.5 w-6 rounded-sm   ${
              isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
            }`}
          ></span>
          <span
            className={`bg-dark dark:bg-light block transition-all duration-300 ease-out  h-0.5 w-6 rounded-sm my-0.5 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`bg-dark dark:bg-light block transition-all duration-300 ease-out  h-0.5 w-6 rounded-sm   ${
              isOpen ? "-rotate-45 -translate-y-1" : "-ranslate-y-0.5"
            }`}
          ></span>
        </button> */}

        {/* mobile nav */}
        {isOpen ? (
          <motion.div
            className="w-full h-full  flex flex-col justify-between items-center fixed top-1/2 left-1/2 z-[999]  bg-dark 
      py-32"
            initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <button
              className=" absolute top-10 left-20 flex-col justify-center items-center hidden lg:flex"
              onClick={handleClick}
            >
              <span
                className={`bg-dark dark:bg-light block transition-all duration-300 ease-out  h-0.5 w-6 rounded-sm   ${
                  isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
                }`}
              ></span>
              <span
                className={`bg-dark dark:bg-light block transition-all duration-300 ease-out  h-0.5 w-6 rounded-sm my-0.5 ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`bg-dark dark:bg-light block transition-all duration-300 ease-out  h-0.5 w-6 rounded-sm   ${
                  isOpen ? "-rotate-45 -translate-y-1" : "-ranslate-y-0.5"
                }`}
              ></span>
            </button>
            <nav className="flex flex-col justify-center items-center">
              <MobileCustomLink href="/" title="Home" toggle={handleClick} />
              <MobileCustomLink
                href="/about"
                title="About"
                toggle={handleClick}
              />
              <MobileCustomLink
                href="#projects"
                title="projects"
                toggle={handleClick}
              />
            </nav>
          </motion.div>
        ) : null}

        <div className="absolute left-[50%] top-2 translate-x-[50%] md:left-[40%] md:translate-x-[40%] sm:left-[35%] sm:translate-x-[30%]">
          <Logo />
        </div>
      </div>
      <div className="w-3/4 m-auto lg:hidden">
        <nav className=" pt-8 pb-4 grid grid-rows-2 grid-cols-6 grid-flow-col gap-6">
          <CustomLink href="/" number="1" title="HOME" />
          <CustomLink href="#projects" number="2" title="PROJECTS" />

          <div className="col-span-4 row-span-2">
            <Logo></Logo>
          </div>
          <CustomLink href="#exp" number="3" title="EXPERIENCE" />
          <CustomLink href="#contact" number="4" title="CONTACT" />
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
