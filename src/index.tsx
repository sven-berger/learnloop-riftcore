import Header from "./components/ui/Header";
import Sidebar from "./components/ui/Sidebar";
import { AppRoutes } from "./routes";

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col p-4">
      <Header />

      <main className="flex flex-1 gap-8 flex-col md:flex-row">
        {/* Sidebar */}
        <aside className="order-2 md:order-1 min-w-0 lg:w-110">
          <Sidebar />
        </aside>

        {/* Content */}
        <section className="order-1 md:order-2 flex-1 min-w-0">
          <AppRoutes />
        </section>
      </main>
    </div>
  );
}
