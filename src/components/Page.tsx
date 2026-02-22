import type { ReactNode } from "react";

interface PageProps {
  content?: string;
  children?: ReactNode;
}

export default function Page({ content, children }: PageProps) {
  return (
    <div className="min-h-full flex-7 rounded-2xl border border-gray-300 bg-slate-200 p-4 sm:p-8 mt-5">
      {children ?? content ?? "Hier steht der Standardinhalt."}
    </div>
  );
}
