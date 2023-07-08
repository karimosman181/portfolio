import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2 mb-2">
      <Link
        href="/"
        className="w-16 h-16  text-light flex items-center justify-center  text-7xl md:text-4xl font-bold "
      >
        KO
      </Link>
    </div>
  );
};

export default Logo;
