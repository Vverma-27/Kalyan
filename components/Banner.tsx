import React from "react";
import Button from "./Button";
import { FaBookOpen, FaDonate, FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import { MdVolunteerActivism } from "react-icons/md";
import Card from "./Card";

const Banner = () => {
  return (
    <section
      id="banner"
      className="h-screen relative flex justify-center items-center flex-col"
    >
      <h1
        className="text-white font-bold     translate-x-16 font-heading  pt-14 "
        style={{ lineHeight: "inherit", fontSize: "7rem" }}
      >
        Help Educate Children
      </h1>
      <section className="flex flex-col justify-center items-center gap-8 pt-14 ">
        <section className="flex gap-10">
          <Button primary title="Donate Now" />
          <Button title="Learn More" />
        </section>
        <section className="flex gap-24">
          <FaInstagram className="text-white text-4xl " />
          <FaFacebook className="text-white text-4xl " />
          <FaLinkedin className="text-white text-4xl " />
          <FaDiscord className="text-white text-4xl " />
        </section>
      </section>
      <section className="flex absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-48  ">
        <Card bg="" className="bg-secondary">
          <>
            <MdVolunteerActivism className="text-primary text-8xl " />
            <h2 className="font-heading text-black text-2xl font-bold tracking-wider uppercase">
              Volunteer
            </h2>
            <p className="font-para text-center text-base   font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </>
        </Card>
        <Card bg="" className="bg-primary-dark">
          <>
            <FaDonate className="text-white text-8xl " />
            <h2 className="font-heading text-white text-2xl font-bold tracking-wider uppercase">
              Donate
            </h2>
            <p className="font-para text-center text-base text-white  font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </>
        </Card>
        <Card bg="primary">
          <>
            <FaBookOpen className="text-white  text-8xl " />
            <h2 className="font-heading text-white text-2xl font-bold tracking-wider uppercase">
              Learn More
            </h2>
            <p className="font-para text-center text-base  text-white font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </>
        </Card>
      </section>
    </section>
  );
};

export default Banner;
