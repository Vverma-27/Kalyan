import React from "react";
import Button from "./Button";

interface IProps {
  title: string;
  highlight?: string;
  info: string;
  button: JSX.Element;
  className?: string;
  number: number;
}

const Section = ({
  title,
  highlight = "",
  info,
  button,
  className = "",
  number,
}: IProps) => {
  return (
    <section
      className={`py-28  px-20 flex  justify-between align-start gap-24 ${className}`}
    >
      {/* <section className="flex-1 w-40">
        <Image
          src={require("../assets/images/learn-more.jpg")}
          // height={181}
          // width={213.5}
        />
      </section> */}
      <div
        className={`image-learn-more image-learn-more--${number} w-80 h-96 `}
      ></div>
      <section className="flex flex-col gap-14 flex-1 items-start">
        <h3 className="font-para text-2xl font-base text-left tracking-wider ">
          {title}{" "}
          <span className="font-para text-2xl text-primary font-extrabold  uppercase underline underline-offset-2">
            {highlight}
          </span>
        </h3>
        <p className="font-para font-semibold text-base">{info}</p>
        {button}
      </section>
    </section>
  );
};

export default Section;
