import type { ReactNode } from "react";

interface H2Props {
  text?: string;
  children: ReactNode;
  style?: string;
}

export default function H2({ text, children, style = "mb-8" }: H2Props) {
  return (
    <h2
      className={`lg:text-4xl text-3xl
  relative inline-block
  text-transparent bg-clip-text bg-linear-to-r from-sky-400 to-emerald-600
  after:content-[''] after:absolute after:left-0 after:-bottom-1 
  after:w-full after:h-0.75
  after:bg-linear-to-r after:from-sky-400 after:to-emerald-600 pb-2 ${style}`}
    >
      {text ?? children ?? "Titel der Überschrift"}
    </h2>
  );
}
