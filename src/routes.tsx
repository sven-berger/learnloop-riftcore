// routes.tsx
import { Routes, Route } from "react-router-dom";

// Startseite
import Index from "./pages/Home";
import Accounting from "./pages/Accounting";

export function AppRoutes() {
  return (
    <Routes>
      {/* Startseite */}
      <Route path="/" element={<Index />} />

      <Route path="accounting" element={<Accounting />} />
    </Routes>
  );
}
