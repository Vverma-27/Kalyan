import React from "react";

const Button = ({
  primary = false,
  title,
  color = "",
  borderColor = "",
  onClick = null,
  size = "lg",
}: {
  primary?: boolean;
  title: string;
  borderColor?: string;
  color?: string;
  size?: string;
  onClick?: () => void;
}) => {
  const PrimaryButton = ({ children }: { children: JSX.Element }) => {
    return (
      <button
        className={`${
          size === "sm"
            ? "h-6 px-6 py-5"
            : size === "base"
            ? "h-8 px-8 py-5"
            : "h-10 px-10 py-7"
        }  flex items-center justify-center bg-primary  rounded`}
        onClick={onClick}
      >
        {children}
      </button>
    );
  };

  const SecondaryButton = ({ children }: { children: JSX.Element }) => {
    return (
      <button
        className={`h-10 flex items-center justify-center bg-transparent border-2 ${
          borderColor === "white"
            ? `border-white`
            : borderColor === "primary-dark"
            ? "border-primary-dark"
            : "border-primary"
        }  px-10 py-7 rounded`}
        onClick={onClick}
      >
        {children}
      </button>
    );
  };
  return primary ? (
    <PrimaryButton>
      <p
        className={`text-${color ? color : "white"} font-bold font-para ${
          size === "sm" ? "text-sm" : size === "base" ? "text-base" : "text-lg"
        }`}
      >
        {title}
      </p>
    </PrimaryButton>
  ) : (
    <SecondaryButton>
      <p
        className={`text-${color ? color : "white"} font-bold font-para ${
          size === "sm" ? "text-sm" : size === "base" ? "text-base" : "text-lg"
        }`}
      >
        {title}
      </p>
    </SecondaryButton>
  );
};

export default Button;
