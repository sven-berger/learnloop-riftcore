import NavigationLink from "./NavigationLink";
import Box from "../../Box";
import H2 from "../../H2";

export default function Navigation() {
  return (
    <>
      <Box>
        <H2 style="py-5" text="Navigation" children={undefined} />
        <nav>
          <ul className="space-y-2 pt-5">
            <li>
              <NavigationLink title="Startseite" href="/" />
              <NavigationLink title="Test-Seite" href="/test/" />
              <NavigationLink title="Test2" href="/test2/" />

              <NavigationLink title="Über mich" href="/about/profile" />
              <NavigationLink title="Haushaltsbuch" href="/accounting/" />
              <NavigationLink title="Filmdatenbank" href="/moviedb/" />
            </li>
          </ul>
        </nav>
      </Box>
    </>
  );
}
