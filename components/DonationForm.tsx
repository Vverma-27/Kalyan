import React, { useRef, useState } from "react";
//@ts-ignore
import OpenCheckout from "../Functions/OpenCheckout.ts";
import Button from "./Button";
import RadioButtons from "./RadioButtons";
import TextInput from "./TextInput";

const DonationForm = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const amountRef = useRef(null);
  const [frequency, setFrequency] = useState(null);
  return (
    <section
      className="py-24  px-20 flex flex-col justify-center items-center relative  donation"
      id="donate"
    >
      <h2 className="font-para text-2xl font-base tracking-wider text-center mb-14 text-white">
        Make A{" "}
        <span className="font-para text-2xl text-primary font-extrabold uppercase underline underline-offset-2">
          Difference
        </span>
      </h2>
      <p className="font-para font-normal  text-base text-white mb-14 text-center">
        How you can help Believe it or not The cost of a slice of your pizza can
        change how a family lives! We consider all our donors as our partners in
        bringing about a change. We maintain full transparency and share the
        account statement with our donors on regular intervals. By sponsoring a
        child's education Making contributions - in cash and kind We accept dry
        ration and provision Making monthly or lumpsum contributions to the
        trust
      </p>
      <form
        className="flex flex-col justify-start items-start flex-wrap w-full gap-16"
        onSubmit={(e) => {
          e.preventDefault();
          OpenCheckout(
            nameRef.current.value,
            emailRef.current.value,
            parseInt(amountRef.current.value),
            frequency
          );
        }}
      >
        <div className="flex justify-start items-center flex-wrap gap-16">
          <TextInput label={"Name"} type={"text"} ref={nameRef} />
          <RadioButtons
            label={"Donation Type"}
            buttons={["one-time", "monthly", "yearly"]}
            onChange={(e) => setFrequency(e.target.value)}
            frequency={frequency}
          />
        </div>
        <div className="flex justify-start items-center flex-wrap gap-16">
          <TextInput label={"Email"} type={"email"} ref={emailRef} />
          <TextInput label={"Amount"} type={"number"} ref={amountRef} />
        </div>
        <Button title={"Donate"} />
      </form>
    </section>
  );
};

export default DonationForm;
