import Navigation from "./Navigation/Navigation";
import SidebarCounter from "./SidebarBoxes/SidebarCounter";
import SidebarTemplates from "./SidebarBoxes/SidebarTemplates";
import SidebarThatsMe from "./SidebarBoxes/SidebarThatsMe";

export default function Sidebar() {
  return (
    <div className="min-h-full flex-1">
      <Navigation />
      <SidebarTemplates />
      <SidebarThatsMe />
      <SidebarCounter />
    </div>
  );
}
