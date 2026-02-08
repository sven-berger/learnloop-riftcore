import type { ReactNode } from "react";

interface ButtonURLProps {
  text?: string;
  to?: string;
  style?: string;
  children: ReactNode;
}

export default function ButtonURL({
  text,
  style,
  children,
  to,
}: ButtonURLProps) {
  const baseStyle = "text-white rounded-full p-4";

  return (
    <button className={`${style ?? "bg-blue-500 text-black"} ${baseStyle} `}>
      <a href={`${to ?? "/"}`}>{children ?? text ?? "Button-Verlinkung"}</a>
    </button>
  );
}
