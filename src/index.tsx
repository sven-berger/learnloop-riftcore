import Header from "./components/ui/Header";
import Sidebar from "./components/ui/Sidebar";
import { AppRoutes } from "./routes";

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col p-4">
      <Header />
      <main className="flex flex-1 gap-8 max-sm:flex-col">
        <div className="flex-3">
          <AppRoutes />
        </div>
        <Sidebar />
      </main>
    </div>
  );
}
