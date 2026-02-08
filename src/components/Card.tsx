import type { ReactNode } from "react";

interface CardProps {
  image?: string;
  title?: string;
  description?: string;
  children?: ReactNode;
}

export default function Card({
  image,
  title,
  children,
  description,
}: CardProps) {
  return (
    <article className="h-full flex flex-col w-full bg-slate-200 border border-gray-300 rounded-2xl">
      <img
        src={image ?? "/images/placeholder-image.jpg"}
        alt={title ?? "Platzhalter"}
        className="rounded-t-lg mb-4 w-full object-fill h-55"
      />
      <div className="pl-6 pr-6 pb-6">
        <h5 className="mb-2 text-2xl text-gray-900">
          {title ?? "Noteworthy technology acquisitions 2021"}
        </h5>

        <p className="mb-3 dark:text-gray-400">
          {description ??
            children ??
            "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."}
        </p>
      </div>
    </article>
  );
}
