import Sidebar from "./components/ui/sidebar";
import { AppRoutes } from "./routes";

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col p-4">
      <header className="bg-amber-800 rounded-2xl flex mb-5 p-6">
        <h2 className="text-3xl text-white">Haushaltsbuch</h2>
      </header>
      <main className="flex flex-1 items-stretch gap-8 max-sm:flex-col">
        <div className="flex-3">
          <AppRoutes />
        </div>
        <Sidebar />
      </main>
    </div>
  );
}
