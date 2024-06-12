import React, { FC, ReactElement } from "react";

export type ButtonProps = {
  type?: "submit" | "reset" | "button" | undefined;
  text: string;
  variant?: "primary" | "secondary";
  icon?: ReactElement;
  otherClassNames?: string;
  onClick?: () => void;
  isLoading?: boolean;
  loadingText?: string;
};

const ButtonVariant = {
  primary:
    "w-full border-brand_color bg-brand_color text-white text-btn_base pt-[13px] pb-[18px]",
  secondary:
    "w-[164px] text-btn_sm py-[11px] border-green-mixed bg-green-mixed",
};

export const Button: FC<ButtonProps> = ({
  type,
  onClick,
  text,
  variant = "primary",
  icon,
  isLoading,
  loadingText = "Loading...",
  otherClassNames = "",
}) => {
  return (
    <button
      className={`flex items-center justify-center rounded-lg border gap-1 font-raleway ${ButtonVariant[variant]} ${otherClassNames}`}
      type={type}
      onClick={onClick}
    >
      {isLoading ? loadingText : text} {icon && <>{icon}</>}
    </button>
  );
};

