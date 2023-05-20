import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div
      className=" absolute top-0 w-full z-20  flex items-center justify-between  py-3"
      style={{
        background:
          "linear-gradient(0deg, rgba(0, 114, 11, 0.9), rgba(0, 114, 11, 0.7)), #FFFFFF;",
      }}
    >
      <Image
        className=" rounded-lg -ml-1.5"
        src="/img/srigiri.png"
        width={250}
        height={80}
        alt="logo"
        priority
      />
    </div>
  );
};

export default Header;

// bg-[#143E05]
