import Link from "next/link";
import react from "react";
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

const NavBar = () => {
  return (
    <header className="w-full">
      <div className="w-3/4 m-auto">
        <nav className=" pt-8 pb-4 grid grid-rows-2 grid-cols-6 grid-flow-col gap-6">
          <CustomLink href="/" number="1" title="HOME" />
          <CustomLink href="/projects" number="2" title="PROJECTS" />

          <div className="col-span-4 row-span-2">
            <Logo></Logo>
          </div>
          <CustomLink href="/experience" number="3" title="EXPERIENCE" />
          <CustomLink href="/contact" number="4" title="CONTACT" />
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
