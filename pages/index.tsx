import Image from "next/image";
import Link from "next/link";
import Banner from "../components/Banner";
import Button from "../components/Button";
import DonationForm from "../components/DonationForm";
import Layout from "../components/Layout";
import Section from "../components/Section";
import Success from "../components/Success";

const IndexPage = () => (
  <Layout title="Kalyan - Sponsor Children">
    <Banner />
    <Section
      button={(onClick) => (
        <Button title={"Read More"} color="primary" onClick={onClick} />
      )}
      id={"learn"}
      title="How We Are Making A"
      highlight="Difference"
      number={1}
      className="pt-72"
      extra="
          We are currently sponsoring the education of children, organising food drives and providing financial assistance to people. 
We believe that educating one child in a family may change the fate of that family for better."
      info="
      We truly believe 'Giving does not only precede receiving; it is the reason for it. It is in giving that we receive.'
Pledging to make a positive change in somebody's life catapults us on a path of responsibility and happiness."
    />
    <Section
      button={(onClick) => (
        <Button title={"Read More"} color="primary" onClick={onClick} />
      )}
      id={"about"}
      title="About Us"
      className="bg-secondary flex-row-reverse"
      number={2}
      extra="At Kalyan Trust we also identify meritorious young learners and help them study in reputed schools. 
The admission fee, tution fee and other expenses are born by the trust."
      info="What started as a small desire to help a child further his education has blossomed into a trust called the Kalyan Trust. 
Kalyan trust sponsors the education of under privileged learners and helps young adults with opportunities to better their career prospects. 
"
    />
    <Section
      button={(onClick) => (
        <Button title={"Read More"} color="primary" onClick={onClick} />
      )}
      id={"mission"}
      title="Our"
      highlight="Mission"
      number={3}
      extra="
          We are involved in various causes like education, providing food, basic amenities to the less privileged sections of the society."
      info="
          Kalyan,the name means welfare. 
Kalyan trust was formed with the vision to help the less fortunate and the less privileged to achieve  better position , better opportunities in the society. 
Kalyan trust is working in the field of education, providing food, medical and other aids."
    />
    <Section
      button={(onClick) => (
        <Button title={"Register Now"} color="primary" onClick={onClick} />
      )}
      id={"volunteer"}
      title="Volunteer To Make A"
      className="bg-secondary flex-row-reverse"
      highlight="Difference"
      link={true}
      number={4}
      info="
          The trust invites volunteers to help it in educating others. 
Donations of dry ration, clothing and stationery is also welcome. 
Contact us to know more!"
    />
    {/* <Success /> */}
    <DonationForm />
  </Layout>
);

export default IndexPage;
