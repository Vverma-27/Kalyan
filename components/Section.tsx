import Link from "next/link";
import React, { useState } from "react";
import Button from "./Button";

interface IProps {
  title: string;
  highlight?: string;
  info: string;
  extra?: string;
  button: (onclick) => JSX.Element;
  className?: string;
  number: number;
  link?: boolean;
  id: string;
}

const Section = ({
  title,
  highlight = "",
  info,
  button,
  className = "",
  extra = "",
  number,
  link,
  id,
}: IProps) => {
  const [opened, setOpened] = useState(false);
  console.log(process.env);
  return (
    <section
      className={`py-28  px-20 flex  justify-between align-start gap-24 ${className}`}
      id={id}
    >
      {/* <section className="flex-1 w-40">
        <Image
          src={require("/public/learn-more.jpg")}
          // height={181}
          // width={213.5}
        />
      </section> */}
      <div
        className={`image-learn-more image-learn-more--${number} w-80 h-96 `}
      ></div>
      <section className="flex flex-col gap-14 flex-1 items-start">
        <h2 className="font-para text-2xl font-base text-left tracking-wider ">
          {title}{" "}
          <span className="font-para text-2xl text-primary font-extrabold  uppercase underline underline-offset-2">
            {highlight}
          </span>
        </h2>
        <p className="font-para font-semibold text-base">
          {info}
          {opened ? (
            <>
              <br /> {extra}
            </>
          ) : null}
        </p>
        {!opened || link ? (
          button(() => setOpened((opened) => !opened))
        ) : (
          <Button
            title={"Read Less"}
            color="primary"
            onClick={() => setOpened((opened) => !opened)}
          />
        )}
      </section>
    </section>
  );
};

export default Section;
