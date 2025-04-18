import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MovieRow from "./components/MovieRow";
import Footer from "./components/Footer";
import axios from "axios";
import { useState, useEffect } from "react";
import MovieCard from "./components/MovieCard";

export default function App() {
  const [result, setResult] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/movie`);
        console.log("Réponse axios :", response.data);
        setResult(response.data);
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <section className="space-y-8 px-4 md:px-8 mt-8">
        <div className="flex flex-wrap gap-x-4 gap-y-16">
          {result ? (
            result.map((movie, index) => (
              <MovieCard
                key={index}
                title={movie.title}
                image_url={movie.image_url}
              />
            ))
          ) : (
            <div>Chargement...</div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
}
