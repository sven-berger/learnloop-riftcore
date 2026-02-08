// routes.tsx
import { Routes, Route } from "react-router-dom";

// Startseite
import Index from "./pages/Home";
import Accounting from "./pages/Accounting";
import Users from "./pages/Users";
import Error404 from "./components/errors/Error404";

export function AppRoutes() {
  return (
    <Routes>
      {/* Startseite */}
      <Route path="/" element={<Index />} />
      <Route path="accounting" element={<Accounting />} />
      <Route path="users" element={<Users />} />
      <Route path="*" element={<Error404 />}></Route>
    </Routes>
  );
}
