import type { ReactNode } from "react";

interface ButtonProps {
  text?: string;
  style?: string;
  onClick?: () => void;
  type?: "submit" | "reset" | "button";
  to?: string;
}

export default function Button({
  text,
  style,
  type = "submit",
  onClick,
}: ButtonProps) {
  const baseStyle = "text-white rounded-full p-4";

  return (
    <button
      <a
      onClick={onClick}
      className={`${style ?? "bg-blue-500 text-black"} ${baseStyle} `}
      type={type ?? "Absenden"}
    >
      </a>
    </button>
  );
}
