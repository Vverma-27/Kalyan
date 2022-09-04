import Image from "next/image";
import React from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const Success = () => {
  return (
    <section className="py-24  px-20 flex flex-col justify-center items-center relative">
      <h2 className="font-para text-2xl font-base tracking-wider text-center mb-28">
        <span className="font-para text-2xl text-primary font-extrabold uppercase underline underline-offset-2">
          Success
        </span>{" "}
        Stories
      </h2>
      <section className="relative w-1/2 bg-primary p-6 translate-x-20 pl-28  mb-10">
        <h3 className="font-extrabold text-xs text-white mb-6 uppercase">
          Random Random
        </h3>
        <p className="text-white text-base">
          lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
          ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
          ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem
          ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
          ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
          ipsumlorem ipsumlorem ipsum
        </p>
        <section
          className="absolute top-0 left-0 w-80  bg-primary-dark -translate-x-60   "
          style={{
            height: "120%",
            borderBottomLeftRadius: "50%",
            borderBottomRightRadius: "50%",
          }}
        >
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-64  aspect-square"
            // style={{ height: "70%" }}
            style={{ width: "140%" }}
          >
            <Image src={require("/public/success-1.png")} />
          </div>
        </section>
      </section>
      <section className="flex absolute bottom-6 right-6 gap-6">
        <FaArrowCircleLeft className="text-3xl text-primary-dark" />
        <FaArrowCircleRight className="text-3xl text-primary-dark" />
      </section>
    </section>
  );
};

export default Success;
