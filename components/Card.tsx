import React from "react";

const Card = ({
  children,
  bg,
  className,
}: {
  children: JSX.Element;
  bg: string;
  className?: string;
}) => {
  return (
    <section
      className={`w-80  flex flex-col gap-4 justify-start items-center bg-${bg} ${className} p-10`}
    >
      {children}
    </section>
  );
};

export default Card;
