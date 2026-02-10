import type { ReactNode } from "react";

interface ButtonProps {
  text?: string;
  style?: string;
  onSubmit?: () => void;
  type?: "submit" | "reset";
  children: ReactNode;
}

export default function Button({
  text,
  style,
  children,
  type = "submit",
  onSubmit,
}: ButtonProps) {
  const baseStyle = "text-white rounded-full p-4";

  return (
    <button
      onSubmit={onSubmit}
      className={`${style ?? "bg-blue-500 text-black"} ${baseStyle} `}
      type={type ?? "Absenden"}
    >
      {children ?? text ?? "Button-Verlinkung"}
    </button>
  );
}
