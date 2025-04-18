import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MovieRow from "./components/MovieRow";
import Footer from "./components/Footer";
import axios from "axios";
import { useState, useEffect } from "react";

export default function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/movie`);
        setMovies(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  // Extraire les genres uniques
  const genres = [...new Set(movies.map((movie) => movie.genre))];

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <Hero />
      <section className="space-y-8 px-4 md:px-8 mt-8">
      
        {genres.map((genre) => (
          <MovieRow
            key={genre}
            title={genre}
            movies={movies}
            genre={genre}
          />
        ))}
      </section>
      <Footer />
    </div>
  );
}
