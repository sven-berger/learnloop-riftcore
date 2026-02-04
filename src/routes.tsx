// routes.tsx
import { Routes, Route } from "react-router-dom";

// Startseite
import Index from "./pages/Home";
import Test from "./pages/Test";

export function AppRoutes() {
  return (
    <Routes>
      {/* Startseite */}
      <Route path="/" element={<Index />} />

      <Route path="/test/" element={<Test />} />
    </Routes>
  );
}
