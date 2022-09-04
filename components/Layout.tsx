import React, { ReactNode, useEffect, useLayoutEffect, useState } from "react";
import { FaBars, FaHamburger, FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import Button from "./Button";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => {
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", () => setScroll(window.pageYOffset));
  }, []);
  return (
    <div className="h-full">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
      </Head>
      <input
        type="checkbox"
        name="headerCheckbox"
        id="headerCheckbox"
        className="hidden peer"
      />
      <header
        className={`w-full fixed top-0 p-10 bg-primary-dark justify-around inset-x-0 items-start z-50 peer-checked:gap-10 flex md:hidden flex-col header-mobile`}
        style={{ transition: "all 0.5s ease" }}
      >
        <section className="flex flex-row-reverse justify-between items-center w-full">
          <label htmlFor="headerCheckbox">
            <FaBars className="text-4xl text-white" />
          </label>
          <div className="flex w-60 ">
            <Image
              src={require("/public/logo-horizontal.png")}
              // height={40.5}
              // width={89}
            />
          </div>
        </section>
        <nav className=" hidden flex-col-reverse justify-start items-start header-mobile-nav gap-8">
          <Link href="#donate">
            <Button primary title="Donate Now" size="sm" />
          </Link>
          <nav className="flex flex-col justify-start items-start gap-8">
            <Link href="#">
              <a className="header-link">Home</a>
            </Link>
            <Link href="#about">
              <a className="header-link">About</a>
            </Link>
            <Link href="#mission">
              <a className="header-link">Our Mission</a>
            </Link>
            <Link href="#volunteer">
              <a className="header-link">Volunteer</a>
            </Link>
            {/* <Link href="">
              <a className="header-link">Success Stories</a>
            </Link> */}
          </nav>
        </nav>
        <section></section>
      </header>
      <header
        className={`w-full fixed ${
          scroll > 10
            ? "top-0 p-6 bg-primary-dark justify-around flex-row-reverse"
            : "top-8 justify-center flex-col"
        } inset-x-0   items-center z-50 gap-10 hidden md:flex`}
        style={{ transition: "all 0.5s ease" }}
      >
        {scroll > 10 ? (
          <Link href="#donate">
            <Button primary title="Donate Now" size="sm" />
          </Link>
        ) : null}
        <nav className="flex justify-center items-center gap-8">
          <Link href="#">
            <a className="header-link">Home</a>
          </Link>
          <Link href="#about">
            <a className="header-link">About</a>
          </Link>
          <Link href="#mission">
            <a className="header-link">Our Mission</a>
          </Link>
          <Link href="#volunteer">
            <a className="header-link">Volunteer</a>
          </Link>
        </nav>
        <div className="flex   ">
          <Image
            src={require("/public/logo-horizontal.png")}
            // height={40.5}
            // width={89}
          />
        </div>
      </header>
      {children}
      <footer className="bg-secondary flex px-10 py-6 justify-center items-center gap-10 ">
        <div className="flex-1">
          <Image
            src={require("/public/logo-vertical.png")}
            height={81}
            width={178}
            // className="aspect-auto"
            // className="h-20"
          />
        </div>
        <section className="footer-section flex-1">
          <h3>Quick Links</h3>
          <Link href="#">
            <a className="footer-link">Home</a>
          </Link>
          <Link href="#about">
            <a className="footer-link">About</a>
          </Link>
          <Link href="#mission">
            <a className="footer-link">Our Mission</a>
          </Link>
          <Link href="#volunteer">
            <a className="footer-link">Volunteer</a>
          </Link>
        </section>
        <section className="footer-section flex-1">
          <h3>Follow Us</h3>
          <a className="footer-link">
            <FaInstagram /> Instagram
          </a>
          <a className="footer-link">
            <FaFacebook /> Facebook
          </a>
          <a className="footer-link">
            <FaLinkedin /> Linkedin
          </a>
          <a className="footer-link">
            <FaTwitter /> Twitter
          </a>
        </section>
      </footer>
    </div>
  );
};

export default Layout;
