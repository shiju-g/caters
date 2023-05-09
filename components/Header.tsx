import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="bg-[#143E05]  flex items-center justify-between px-10 py-3">
      <Image src="/img/logo.png" width={145} height={50} alt="logo" priority />
      <div className="mr-32">
        <Link
          className="hover:text-[#FFA500] font-bold text-lg text-white"
          href="/"
        >
          Home
        </Link>
      </div>
    </div>
  );
};

export default Header;
