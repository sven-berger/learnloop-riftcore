import Box from "../Box";

export default function Sidebar() {
  const sidebar: Record<string, string> = {
    Startseite: "/",
    "Über mich": "/about/profile/",
    Haushaltsbuch: "/accounting/",
  };

  return (
    <div className="min-h-full flex-1">
      <Box>
        <aside>
          <nav>
            <ul className="space-y-2">
              {Object.entries(sidebar).map(([label, href]) => (
                <li key={href}>
                  <a
                    className="block rounded-lg p-2 hover:bg-amber-300"
                    href={href}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      </Box>
    </div>
  );
}
