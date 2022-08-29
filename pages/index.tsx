import Image from "next/image";
import Link from "next/link";
import Banner from "../components/Banner";
import Button from "../components/Button";
import Layout from "../components/Layout";
import Section from "../components/Section";

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <Banner />
    <Section
      button={<Button title={"Read More"} color="primary" />}
      title="How We Are Making A"
      highlight="Difference"
      number={1}
      className="pt-72"
      info="
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut
          blanditiis illo consequatur. Eligendi tenetur, nisi fugiat, maiores
          corporis repellendus maxime blanditiis labore, dolorem deleniti
          excepturi vero culpa ex facilis. Ex! Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Ut blanditiis illo consequatur. Eligendi
          tenetur, nisi fugiat, maiores corporis repellendus maxime blanditiis
          labore, dolorem deleniti excepturi vero culpa ex facilis. Ex!"
    />
    <Section
      button={<Button title={"Read More"} color="primary" />}
      title="About Us"
      className="bg-secondary"
      number={2}
      info="
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut
          blanditiis illo consequatur. Eligendi tenetur, nisi fugiat, maiores
          corporis repellendus maxime blanditiis labore, dolorem deleniti
          excepturi vero culpa ex facilis. Ex! Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Ut blanditiis illo consequatur. Eligendi
          tenetur, nisi fugiat, maiores corporis repellendus maxime blanditiis
          labore, dolorem deleniti excepturi vero culpa ex facilis. Ex!"
    />
    <Section
      button={<Button title={"Register Now"} color="primary" />}
      title="Volunteer To Make A"
      highlight="Difference"
      number={3}
      info="
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut
          blanditiis illo consequatur. Eligendi tenetur, nisi fugiat, maiores
          corporis repellendus maxime blanditiis labore, dolorem deleniti
          excepturi vero culpa ex facilis. Ex! Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Ut blanditiis illo consequatur. Eligendi
          tenetur, nisi fugiat, maiores corporis repellendus maxime blanditiis
          labore, dolorem deleniti excepturi vero culpa ex facilis. Ex!"
    />
  </Layout>
);

export default IndexPage;
