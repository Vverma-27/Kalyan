import React, { useEffect } from "react";
import Button from "./Button";
import { FaBookOpen, FaDonate, FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import { MdVolunteerActivism } from "react-icons/md";
import Card from "./Card";
import Link from "next/link";

const Banner = () => {
  // useEffect(() => {
  console.log(process.env.NEXT_PUBLIC_REACT_APP_API_URL);
  // }, []);
  return (
    <section
      id="banner"
      className="h-3/4   md:h-screen relative flex justify-center items-center flex-col"
    >
      <h1
        className="text-white font-bold translate-x-0  md:translate-x-16 text-[7rem]  font-heading  pt-14 "
        style={{ lineHeight: "inherit" }}
      >
        Help Educate Children
      </h1>
      <section className="flex flex-col justify-center items-center gap-8 pt-14 ">
        <section className="flex gap-10">
          <Link href="#donate">
            <Button primary title="Donate Now" />
          </Link>
          <Link href="#about">
            <Button title="Learn More" />
          </Link>
        </section>
        <section className="flex gap-24">
          <FaInstagram className="text-white text-4xl " />
          <FaFacebook className="text-white text-4xl " />
          <FaLinkedin className="text-white text-4xl " />
          <FaTwitter className="text-white text-4xl " />
        </section>
      </section>
      <section className="flex absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-48 lg:translate-y-60   ">
        <Card bg="" className="bg-secondary">
          <>
            <MdVolunteerActivism className="text-primary text-8xl " />
            <h2 className="font-heading text-black text-2xl font-bold tracking-wider uppercase">
              Volunteer
            </h2>
            <p className="font-para text-center text-base   font-semibold">
              The trust invites volunteers to help it in noble causes.
            </p>
            <Button title="Register Now" color="primary" />
          </>
        </Card>
        <Card bg="" className="bg-primary-dark">
          <>
            <FaDonate className="text-white text-8xl " />
            <h2 className="font-heading text-white text-2xl font-bold tracking-wider uppercase">
              Donate
            </h2>
            <p className="font-para text-center text-base text-white  font-semibold">
              Small contributions create big results
            </p>
            <Link href="#donate">
              <Button title="Donate Now" borderColor="white" />
            </Link>
          </>
        </Card>
        <Card bg="primary">
          <>
            <FaBookOpen className="text-white  text-8xl " />
            <h2 className="font-heading text-white text-2xl font-bold tracking-wider uppercase">
              Learn More
            </h2>
            <p className="font-para text-center text-base  text-white font-semibold">
              Kalyan Trust sponsors education for underprivegeled children
            </p>
            <Link href="#learn">
              <Button title="Read More" borderColor="white" />
            </Link>
          </>
        </Card>
      </section>
    </section>
  );
};

export default Banner;
