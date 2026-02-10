import Box from "../../Box";
import H2 from "../../H2";
import SidebarThatsMeImages from "./SidebarThatsMe/SidebarThatsMeImages";
import SidebarThatsMeProfile from "./SidebarThatsMe/SidebarThatsMeProfile";

export default function SidebarCounter() {
  return (
    <Box>
      <H2 style="mb-10 mt-6" text="Das bin ich" children={undefined} />
      <SidebarThatsMeProfile />
      <SidebarThatsMeImages />
    </Box>
  );
}
