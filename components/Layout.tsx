import React, { ReactNode } from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header className="w-full fixed top-8 inset-x-0 flex justify-center items-center z-50 flex-col gap-10">
      <nav className="flex justify-center items-center gap-8">
        <Link href="/">
          <a className="header-link">Home</a>
        </Link>
        <Link href="/about">
          <a className="header-link">About</a>
        </Link>
        <Link href="/users">
          <a className="header-link">Success Stories</a>
        </Link>
        <Link href="/users">
          <a className="header-link">Our Volunteers</a>
        </Link>
      </nav>
      <Image
        src={require("../assets/images/logo-horizontal.png")}
        // height={40.5}
        // width={89}
      />
    </header>
    {children}
    <footer className="bg-secondary flex px-10 py-6 justify-center items-center gap-10 ">
      <div className="flex-1">
        <Image
          src={require("../assets/images/logo-vertical.png")}
          height={81}
          width={178}
          // className="aspect-auto"
          // className="h-20"
        />
      </div>
      <section className="footer-section flex-1">
        <h3>Quick Links</h3>
        <Link href="/">
          <a className="footer-link">Home</a>
        </Link>
        <Link href="/about">
          <a className="footer-link">About</a>
        </Link>
        <Link href="/users">
          <a className="footer-link">Success Stories</a>
        </Link>
        <Link href="/users">
          <a className="footer-link">Our Volunteers</a>
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
          <FaDiscord /> Discord
        </a>
      </section>
    </footer>
  </div>
);

export default Layout;
