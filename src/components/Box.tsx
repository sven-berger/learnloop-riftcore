import type { ReactNode } from "react";

interface BoxProps {
  content?: string;
  children?: ReactNode;
}

export default function Box({ content, children }: BoxProps) {
  return (
    <div className="bg-gray-300 rounded-3xl p-5 mt-5">
      {children ?? content ?? "Hier steht der Standardinhalt."}
    </div>
  );
}
