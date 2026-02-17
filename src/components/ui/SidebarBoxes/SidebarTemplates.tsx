import Box from "../../Box";
import H2 from "../../H2";
import NavigationLink from "../Navigation/NavigationLink";

export default function SidebarTemplates() {
  return (
    <>
      <Box>
        <H2 style="my-5">Vorlagen (Templates)</H2>
        <NavigationLink
          title="Formular Beispiel"
          href="/templates/formSubmitExample/"
        />
        <NavigationLink
          title="LocalStorage Beispiel"
          href="/templates/localStorageExample/"
        />
        <NavigationLink title="API Beispiel" href="/templates/APIExercise/" />
      </Box>
    </>
  );
}
