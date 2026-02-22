import NavigationLink from "./NavigationLink";
import Box from "../../Box";
import H2 from "../../H2";

export default function Navigation() {
  return (
    <>
      <Box>
        <H2 style="py-5">Navigation</H2>
        <nav>
          <ul className="space-y-2 pt-5">
            <li>
              <NavigationLink title="Startseite" href="/" />
              <NavigationLink title="Über mich" href="/about/profile/" />
              <NavigationLink title="Haushaltsbuch" href="/accounting/" />
              <NavigationLink title="Filmdatenbank" href="/moviedb/" />
              <hr className="my-4 border-gray-200" />
              <NavigationLink title="Impressum" href="/imprint/" />
              <NavigationLink title="Datenschutz" href="/privacy-policy/" />
              <NavigationLink
                title="Nutzungsbedingungen"
                href="/terms-of-use/"
              />
            </li>
          </ul>
        </nav>
      </Box>
    </>
  );
}
