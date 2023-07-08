import React from "react";
import { GithubIcon, LinkedInIcon, MailIcon } from "./Icons";

const Contact = () => {
  return (
    <div className="">
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
          <GithubIcon />
        </div>
        <div className=" flex justify-center items-center content-center row-span-1 sm:col-span-3 ">
          <LinkedInIcon />
        </div>
        <div className="flex justify-center items-center content-center row-span-1 sm:col-span-3 ">
          <MailIcon />
        </div>
      </div>
    </div>
  );
};

export default Contact;
