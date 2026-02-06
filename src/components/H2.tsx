import type { ReactNode } from "react";

interface H2Props {
  text?: string;
  children: ReactNode;
  margin?: string;
}

const H2 = (props: H2Props) => {
  const { text, children, margin = "mb-8" } = props;
  return (
    <h2
      className={`lg:text-4xl text-3xl
  relative inline-block
  text-transparent bg-clip-text bg-linear-to-r from-sky-400 to-emerald-600
  after:content-[''] after:absolute after:left-0 after:-bottom-1 
  after:w-full after:h-0.75
  after:bg-linear-to-r after:from-sky-400 after:to-emerald-600 pb-2 ${margin}`}
    >
      {text ?? children ?? "Titel der Überschrift"}
    </h2>
  );
};

export default H2;
