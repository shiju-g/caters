import React from "react";

type Props = {};

const ContactCard = (props: Props) => {
  return (
    <div
      className="w-fit px-20 rounded-2xl shadow tracking-wider mx-auto mt-10 text-center  py-5"
      style={{ background: "rgba(255, 165, 0, 0.1)" }}
    >
      <h1 className="text-3xl font-extrabold ">9388596889</h1>
      <p className=" font-medium my-1">catering@mail.com</p>
      <p className="text-lg text-[#FFA500] font-semibold">
        Allinivas House, VP Thara , Kollengode, Palakkad <br /> PIN - 678506
      </p>
    </div>
  );
};

export default ContactCard;
