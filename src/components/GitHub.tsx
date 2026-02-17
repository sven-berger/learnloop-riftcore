interface GitHubProps {
  name?: string; // z.B. "Home"
  type?: "page" | "component" | "exercise" | "templates" | "app";
}

const BASE_URL =
  "https://github.com/sven-berger/learnloop-riftcore/blob/main/src";

const PATHS = {
  page: "pages",
  component: "components",
  exercise: "exercise",
  templates: "templates",
  app: "app",
};

export default function GitHub({ name, type = "page" }: GitHubProps) {
  const folder = PATHS[type];
  const fileName = name ? `${name}.tsx` : "";

  const href = name
    ? `${BASE_URL}/${folder}/${fileName}`
    : `${BASE_URL}/${folder}`;

  return (
    <>
      <div className="mt-5 bg-white p-5 rounded-2xl border border-gray-300">
        <p className="mb-3">Zur veröffentlichten Datei auf GitHub:</p>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-green-700 transition-color"
        >
          {name ? `${name}.tsx` : "GitHub-Link"}
        </a>
      </div>
    </>
  );
}
