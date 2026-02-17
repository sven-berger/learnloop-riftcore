interface GitHubProps {
  name?: string; // z.B. "Home"
  type?: "page" | "component";
}

const BASE_URL =
  "https://github.com/sven-berger/learnloop-riftcore/blob/main/src";

const PATHS = {
  page: "pages",
  component: "components",
};

export default function GitHub({ name, type = "page" }: GitHubProps) {
  const folder = PATHS[type];
  const fileName = name ? `${name}.tsx` : "";

  const href = name
    ? `${BASE_URL}/${folder}/${fileName}`
    : `${BASE_URL}/${folder}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
    >
      {name ? `${name}.tsx` : "GitHub-Link"}
    </a>
  );
}
