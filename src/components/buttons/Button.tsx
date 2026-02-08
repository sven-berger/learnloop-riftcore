import type { ReactNode } from "react";

interface ButtonProps {
  text?: string;
  style?: string;
  onClick?: () => void;
  children: ReactNode;
}

export default function Button({
  text,
  style,
  children,
  onClick,
}: ButtonProps) {
  const baseStyle = "text-white rounded-full p-4";

  return (
    <button
      onClick={onClick}
      className={`${style ?? "bg-blue-500 text-black"} ${baseStyle} `}
    >
      {children ?? text ?? "Button-Verlinkung"}
    </button>
  );
}
