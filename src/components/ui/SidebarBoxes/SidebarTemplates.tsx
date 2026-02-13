import Box from "../../Box";
import H2 from "../../H2";
import NavigationLink from "../Navigation/NavigationLink";

export default function SidebarTemplates() {
  return (
    <>
      <Box>
        <H2 style="my-5">Vorlagen (Templates)</H2>
        <NavigationLink
          title="Einfaches Formular"
          href="/templates/simple-form/"
        />
        <NavigationLink
          title="Erweitertes Formular"
          href="/templates/extended-form/"
        />
        <NavigationLink title="Übung" href="/exercise/" />
      </Box>
    </>
  );
}
