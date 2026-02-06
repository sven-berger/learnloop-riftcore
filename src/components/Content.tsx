import type { ReactNode } from "react";

interface ContentProps {
  content?: string;
  children?: ReactNode;
}

export default function Content({ content, children }: ContentProps) {
  return (
    <div className="flex-7 rounded-2xl border border-gray-300 bg-slate-200 p-8 mt-5">
      {children ?? content ?? "Hier steht der Standardinhalt."}
    </div>
  );
}
