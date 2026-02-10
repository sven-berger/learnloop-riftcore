import { useState, useEffect } from "react";
import Content from "../components/Content";
import Card from "../components/Card";
import GridLayout from "../components/layout/GridLayout";
import H2 from "../components/H2";

type Movie = {
  backdrop_path: string;
  original_title: string;
  overview: string;
  id: number;
};

type TMDBResponse = {
  results: Movie[];
};

export default function MovieDB() {
  const [details, setDetails] = useState<Movie[]>([]); // Initialisiert als leeres Array

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_APIKEY}`,
      },
    };

    async function fetchMovies() {
      try {
        const res = await fetch(
          "https://api.themoviedb.org/3/discover/movie?include_adult=false&language=de-DE&page=3&sort_by=popularity.desc",
          options,
        );

        if (!res.ok) throw new Error("API-Fehler");

        const json = (await res.json()) as TMDBResponse;

        setDetails(json.results || []);
      } catch (err) {
        console.error(err);
        setDetails([]);
      }
    }

    fetchMovies();
  }, []);
  return (
    <>
      <Content>
        <H2>Filmdatenbank</H2>
        <p>
          Diese Seite ruft Daten von TheMovieDB über die API ab und zeigt sie in
          einem Rasterlayout unter Verwendung der Card-Komponente an. Die Bilder
          wurden mit der URL https://api.themoviedb.org/3/discover/movie?
          geladen, um die Backdrop-Bilder der Filme anzuzeigen. Die Titel und
          Beschreibungen der Filme werden ebenfalls angezeigt.
        </p>
        <p className="font-bold mt-5">
          Hinweis: Diese Filme wurden zufällig und nicht nach Kriterien
          ausgewählt.
        </p>
        <p className="mt-5">
          This page retrieves data from TheMovieDB via the API and displays it
          in a grid layout using the Card component. The images were loaded
          using the URL https://api.themoviedb.org/3/discover/movie? to display
          the backdrop images of the movies. The titles and descriptions of the
          movies are also displayed.
        </p>
        <p className="font-bold mt-5">
          Note: These films were selected at random and not according to any
          criteria.
        </p>
      </Content>
      <GridLayout cols={5}>
        {details.map((movie) => (
          <Card
            key={movie.id}
            image={
              movie.backdrop_path
                ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
                : undefined
            }
            title={movie.original_title}
            description={movie.overview}
          />
        ))}
      </GridLayout>
    </>
  );
}
