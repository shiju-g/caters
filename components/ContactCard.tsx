import React from "react";

type Props = {};

const ContactCard = (props: Props) => {
  return (
    <div
      className=" md:w-fit cursor-pointer sm:w-10/12 w-11/12 md:px-20 px-5 rounded-2xl shadow tracking-wider mx-auto md:mt-10 mt-5 text-center  py-8"
      style={{
        background:
          "linear-gradient(0deg, rgba(255, 199, 0, 0.17), rgba(255, 199, 0, 0.17)), #FFFFFF;",
      }}
    >
      <h1 className="xl:text-3xl md:text-2xl text-xl font-extrabold hover:scale-105 duration-300">
        9388596889
      </h1>
      <p className="md:text-base text-sm text-gray-600 font-semibold my-1 hover:scale-105 duration-300">
        srigiricatering@mail.com
      </p>
      <p className="md:text-lg text-base md:mt-auto mt-1 text-[#FFA500] font-semibold hover:scale-105 duration-200">
        Allinivas House, VP Thara , Kollengode, Palakkad
      </p>
    </div>
  );
};

export default ContactCard;
