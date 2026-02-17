import Box from "../../Box";
import H2 from "../../H2";
import NavigationLink from "../Navigation/NavigationLink";

export default function SidebarExercises() {
  return (
    <>
      <Box>
        <H2 style="my-5">Übungen</H2>
        <NavigationLink
          title="Zahl erraten"
          href="/exercise/guess-the-number/"
        />
        <NavigationLink
          title="Eintrittspreise"
          href="/exercise/entry-prices/"
        />
      </Box>
    </>
  );
}
