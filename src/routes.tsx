// routes.tsx
import { Routes, Route } from "react-router-dom";

// Startseite
import Index from "./pages/Home";
import Accounting from "./pages/Accounting";
import Error404 from "./components/errors/Error404";
import MovieDB from "./pages/MovieDB";
import Imprint from "./pages/Imprint";
import PrivacyPolicy from "./pages/PrivacyPolicy";

import FormSubmitExample from "./pages/templates/FormSubmitExample";
import LocalStorageExample from "./pages/templates/LocalStorageExample";
import APIExercise from "./pages/templates/APIExercise";

import GuessTheNumber from "./pages//exercise/GuessTheNumber";
import EntryPrices from "./pages/exercise/EntryPrices";

export function AppRoutes() {
  return (
    <Routes>
      {/* Fehlerseiten */}
      <Route path="*" element={<Error404 />}></Route>

      {/* Seiten */}
      <Route path="/" element={<Index />} />
      <Route path="accounting" element={<Accounting />} />
      <Route path="moviedb" element={<MovieDB />} />
      <Route path="imprint" element={<Imprint />} />
      <Route path="privacy-policy" element={<PrivacyPolicy />} />

      {/* Vorlagen (Templates) */}
      <Route
        path="/templates/FormSubmitExample/"
        element={<FormSubmitExample />}
      />
      <Route
        path="/templates/LocalStorageExample/"
        element={<LocalStorageExample />}
      />
      <Route path="/templates/APIExercise/" element={<APIExercise />} />

      {/* Übung */}
      <Route path="/exercise/guess-the-number/" element={<GuessTheNumber />} />
      <Route path="/exercise/entry-prices/" element={<EntryPrices />} />
    </Routes>
  );
}
