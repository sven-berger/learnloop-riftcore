// routes.tsx
import { Routes, Route } from "react-router-dom";

// Startseite
import Index from "./pages/Home";
import Accounting from "./pages/Accounting";
import Users from "./pages/Users";
import Error404 from "./components/errors/Error404";
import MovieDB from "./pages/MovieDB";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="*" element={<Error404 />}></Route>

      {/* Startseite */}
      <Route path="/" element={<Index />} />
      <Route path="accounting" element={<Accounting />} />
      <Route path="users" element={<Users />} />
      <Route path="moviedb" element={<MovieDB />} />
    </Routes>
  );
}
