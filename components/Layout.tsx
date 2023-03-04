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
    setScroll(window.pageYOffset);
    window.addEventListener("scroll", () => setScroll(window.pageYOffset));
  }, []);
  return (
    <div className="h-full">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
        <meta
          name="description"
          content=" We are currently sponsoring the education of children, organising food drives and providing financial assistance to people. 
We believe that educating one child in a family may change the fate of that family for better."
          key="desc"
        />
        <meta property="og:title" content={title} />
        <meta
          property="og:description"
          content="Kalyan: Sponsor A Child's Education"
        />
        <meta
          property="og:image"
          content="https://kalyantrust.org/logo-raz.jpg"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kalyantrust.org/" />
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
              alt={""} // height={40.5}
              // width={89}
            />
          </div>
        </section>
        <nav className=" hidden flex-col-reverse justify-start items-start header-mobile-nav gap-8">
          <Link scroll={false} href="#donate">
            <Button primary title="Donate Now" size="sm" />
          </Link>
          <nav className="flex flex-col justify-start items-start gap-8">
            <Link href="#">
              <button className="header-link">Home</button>
            </Link>
            <Link scroll={false} href="#about">
              <button className="header-link">About</button>
            </Link>
            <Link scroll={false} href="#mission">
              <button className="header-link">Our Mission</button>
            </Link>
            <Link scroll={false} href="#volunteer">
              <button className="header-link">Volunteer</button>
            </Link>
            {/* <Link scroll={false} href="">
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
          <Link scroll={false} href="#donate">
            <Button primary title="Donate Now" size="sm" />
          </Link>
        ) : null}
        <nav className="flex justify-center items-center gap-8">
          <Link href="#">
            <button className="header-link">Home</button>
          </Link>
          <Link scroll={false} href="#about">
            <button className="header-link">About</button>
          </Link>
          <Link scroll={false} href="#mission">
            <button className="header-link">Our Mission</button>
          </Link>
          <Link scroll={false} href="#volunteer">
            <button className="header-link">Volunteer</button>
          </Link>
        </nav>
        <div className="flex ">
          <Image
            src={require("/public/logo-horizontal.png")}
            alt={""} // layout="fill"
            // height={40.5}
            // width={89}
          />
        </div>
      </header>
      {children}
      <footer className="bg-secondary flex px-10 py-6 justify-center items-center gap-10 ">
        <div className="flex-1">
          <Image
            src="/logo-vertical.png"
            height={81}
            width={178}
            alt={""} // className="aspect-auto"
            // className="h-20"
          />
        </div>
        <section className="footer-section flex-1">
          <h3>Quick Links</h3>
          <Link href="#">
            <button className="footer-link">Home</button>
          </Link>
          <Link scroll={false} href="#about">
            <button className="footer-link">About</button>
          </Link>
          <Link scroll={false} href="#mission">
            <button className="footer-link">Our Mission</button>
          </Link>
          <Link scroll={false} href="#volunteer">
            <button className="footer-link">Volunteer</button>
          </Link>
        </section>
        <section className="footer-section flex-1">
          <h3>Legal Links</h3>
          <Link
            legacyBehavior
            href="https://merchant.razorpay.com/policy/KGVAQwi692P5OD/privacy"
          >
            <a className="footer-link">Privacy Policy</a>
          </Link>
          <Link
            legacyBehavior
            href="https://merchant.razorpay.com/policy/KGVAQwi692P5OD/refund"
          >
            <a className="footer-link">Refund Policy</a>
          </Link>
          <Link
            legacyBehavior
            href="https://merchant.razorpay.com/policy/KGVAQwi692P5OD/terms"
          >
            <a className="footer-link">Terms and Conditions</a>
          </Link>
          <Link
            legacyBehavior
            href="https://merchant.razorpay.com/policy/KGVAQwi692P5OD/contact_us"
          >
            <a className="footer-link">Contact Us</a>
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
