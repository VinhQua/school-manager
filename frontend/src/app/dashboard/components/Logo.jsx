import React from "react";
import logo from "@/assets/Logo.svg";
import Image from "next/image";
const Logo = ({ w, h }) => {
  return <Image src={logo} alt="" className={`w-11 h-11`} />;
};

export default Logo;
