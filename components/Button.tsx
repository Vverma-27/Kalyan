import React from "react";

const Button = ({
  primary = false,
  title,
  color = "",
}: {
  primary?: boolean;
  title: string;
  color?: string;
}) => {
  return primary ? (
    <PrimaryButton>
      <p className={`text-${color ? color : "white"} font-bold font-para `}>
        {title}
      </p>
    </PrimaryButton>
  ) : (
    <SecondaryButton>
      <p className={`text-${color ? color : "white"} font-bold font-para `}>
        {title}
      </p>
    </SecondaryButton>
  );
};

const PrimaryButton = ({ children }: { children: JSX.Element }) => {
  return (
    <button className="h-10  flex items-center justify-center bg-primary px-10 py-7 rounded">
      {children}
    </button>
  );
};

const SecondaryButton = ({ children }: { children: JSX.Element }) => {
  return (
    <button className="h-10 flex items-center justify-center bg-transparent border-2 border-primary  px-10 py-7 rounded">
      {children}
    </button>
  );
};

export default Button;
