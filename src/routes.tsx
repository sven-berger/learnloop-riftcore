// routes.tsx
import { Routes, Route } from "react-router-dom";

// Startseite
import Index from "./pages/Home";
import Accounting from "./pages/Accounting";
import Users from "./pages/Users";
import Error404 from "./components/errors/Error404";
import MovieDB from "./pages/MovieDB";
import Testpage from "./pages/Testpage";
import Test2 from "./pages/Test2";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="*" element={<Error404 />}></Route>

      {/* Startseite */}
      <Route path="/" element={<Index />} />
      <Route path="/test/" element={<Testpage />} />
      <Route path="/test2/" element={<Test2 />} />

      <Route path="accounting" element={<Accounting />} />
      <Route path="users" element={<Users />} />
      <Route path="moviedb" element={<MovieDB />} />
    </Routes>
  );
}
