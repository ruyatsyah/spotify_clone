import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center">
      <Image 
      src="/images/logo.png" 
      alt="Sportify" 
      width={35} 
      height={35} />
    </div>
  );
};

export default Logo;
