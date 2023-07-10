import React from "react";
import Link from "next/link";
import { GithubIcon, LinkedInIcon, MailIcon } from "./Icons";

const Contact = () => {
  return (
    <div className="" id="contact">
      <div className=" w-full h-full inline-block z-0  p-34  xl:p-24 lg:p-16 md:p-12 sm:p-8 ">
        <div className=" w-7/12 m-auto sm:w-full">
          <span className=" text-textCode block w-full text-start">
            {"<" + "h2" + ">"}
          </span>
          <h1 className="text-light mt-2 mb-2 text-8xl md:text-6xl sm:!text-4xl block    w-full font-Gugi uppercase tracking-widest text-center ">
            Contact
          </h1>
          <span className=" text-textCode block w-full text-end">
            {"</" + "h2" + ">"}
          </span>
        </div>
      </div>
      <div className="grid  grid-rows-2 grid-cols-3 gap-4 justify-center items-center content-center">
        <div className="flex justify-center items-center content-center row-span-1 sm:col-span-3 ">
          <Link href="https://github.com/karimosman181" target={"_blank"}>
            <GithubIcon />
          </Link>
        </div>
        <div className=" flex justify-center items-center content-center row-span-1 sm:col-span-3 ">
          <Link
            href="https://www.linkedin.com/in/karim-osman-1787821a3/"
            target={"_blank"}
          >
            <LinkedInIcon />
          </Link>
        </div>
        <div className="flex justify-center items-center content-center row-span-1 sm:col-span-3 ">
          <Link href="mailto:kareemosman199@gmail.com">
            <MailIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
