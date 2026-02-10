import Header from "./components/ui/Header";
import Sidebar from "./components/ui/Sidebar";
import { AppRoutes } from "./routes";

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col p-4">
      <Header />

      <main className="flex flex-1 gap-8 max-sm:flex-col">
        {/* Sidebar */}
        <aside className="order-2 md:order-1 lg:w-110">
          <Sidebar />
        </aside>

        {/* Content */}
        <section className="order-1 md:order-2 flex-1">
          <AppRoutes />
        </section>
      </main>
    </div>
  );
}
