import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="bg-[#143E05] absolute top-0 w-full z-20  flex items-center justify-between md:px-10 px-3 py-3">
      <Image
        className="sm:w-32 w-32"
        src="/img/logo.png"
        width={100}
        height={50}
        alt="logo"
        priority
      />
    </div>
  );
};

export default Header;
