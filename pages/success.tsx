import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const Success = () => {
  return (
    <section className="h-full w-full flex justify-center items-center flex-col gap-8">
      <FaCheckCircle className="text-primary" style={{ fontSize: "10rem" }} />
      <h3 className="text-xl font-para ">Your Payment Was Successful</h3>
      <h1 className=" text-5xl text-bold font-heading">
        Thank You For Sponsoring A Child's Education
      </h1>
    </section>
  );
};

export default Success;
