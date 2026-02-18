// routes.tsx
import { Routes, Route } from "react-router-dom";

// Startseite
import Index from "./pages/Home";
import Accounting from "./pages/Accounting";
import Users from "./pages/Users";
import Error404 from "./components/errors/Error404";
import MovieDB from "./pages/MovieDB";
import Imprint from "./pages/Imprint";

import FormSubmitExample from "./templates/FormSubmitExample";
import LocalStorageExample from "./templates/LocalStorageExample";
import APIExample from "./templates/APIExercise";

import GuessTheNumber from "./exercise/GuessTheNumber";
import EntryPrices from "./exercise/EntryPrices";

export function AppRoutes() {
  return (
    <Routes>
      {/* Fehlerseiten */}
      <Route path="*" element={<Error404 />}></Route>

      {/* Seiten */}
      <Route path="/" element={<Index />} />
      <Route path="accounting" element={<Accounting />} />
      <Route path="users" element={<Users />} />
      <Route path="moviedb" element={<MovieDB />} />
      <Route path="imprint" element={<Imprint />} />
      {/* Vorlagen (Templates) */}
      <Route
        path="/templates/FormSubmitExample/"
        element={<FormSubmitExample />}
      />
      <Route
        path="/templates/LocalStorageExample/"
        element={<LocalStorageExample />}
      />
      <Route path="/templates/APIExercise/" element={<APIExample />} />

      {/* Übung */}
      <Route path="/exercise/guess-the-number/" element={<GuessTheNumber />} />
      <Route path="/exercise/entry-prices/" element={<EntryPrices />} />
    </Routes>
  );
}
