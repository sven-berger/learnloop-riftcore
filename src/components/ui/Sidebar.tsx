import SidebarNavigation from "./SidebarBoxes/SidebarNavigation";
import SidebarCounter from "./SidebarBoxes/SidebarCounter";
import SidebarImages from "./SidebarBoxes/SidebarImages";

export default function Sidebar() {
  return (
    <div className="min-h-full flex-1">
      <SidebarNavigation />
      <SidebarCounter />
      <SidebarImages />
    </div>
  );
}
