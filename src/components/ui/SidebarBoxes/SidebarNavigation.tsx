import Box from "../../Box";
import H2 from "../../H2";

export default function SidebarNavigation() {
  const sidebar: Record<string, string> = {
    Startseite: "/",
    "Über mich": "/about/profile/",
    Haushaltsbuch: "/accounting/",
    "Registrierte Benutzer": "/users/",
  };
  return (
    <Box>
      <H2 style="py-5" text="Navigation" children={undefined} />
      <nav>
        <ul className="space-y-2 pt-5">
          {Object.entries(sidebar).map(([label, href]) => (
            <li key={href}>
              <a
                className="block rounded-2xl p-2 hover:bg-amber-300"
                href={href}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </Box>
  );
}
