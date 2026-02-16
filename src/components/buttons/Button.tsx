import type { ReactNode } from "react";

interface ButtonProps {
  text?: string;
  style?: string;
  onSubmit?: () => void;
  onClick?: () => void;
  type?: "submit" | "reset" | "button";
  children: ReactNode;
}

export default function Button({
  text,
  style,
  children,
  type = "submit",
  onSubmit,
  onClick,
}: ButtonProps) {
  const baseStyle = "text-white rounded-full p-4";

  return (
    <button
      onSubmit={onSubmit}
      onClick={onClick}
      className={`${style ?? "bg-blue-500 text-black"} ${baseStyle} `}
      type={type ?? "Absenden"}
    >
      {children ?? text ?? "Button-Verlinkung"}
    </button>
  );
}
