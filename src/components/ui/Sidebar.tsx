import Navigation from "./Navigation/Navigation";
import SidebarCounter from "./SidebarBoxes/SidebarCounter";
import SidebarThatsMe from "./SidebarBoxes/SidebarThatsMe";

export default function Sidebar() {
  return (
    <div className="min-h-full flex-1">
      <Navigation />
      <SidebarThatsMe />
      <SidebarCounter />
    </div>
  );
}
