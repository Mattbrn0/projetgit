import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MovieRow from "./components/MovieRow";
import Footer from "./components/Footer";
import axios from "axios";
import { useState, useEffect } from "react";

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
        {result ? (
          result.map((movie, index) => (
            <div key={index} className="border-b border-gray-700 pb-2">
              {movie.title}
            </div>
          ))
        ) : (
          <div>Chargement...</div>
        )}

        {/* <MovieRow title="Trending Now" />
        <MovieRow title="Top Rated" />
        <MovieRow title="New Releases" />
        <MovieRow title="Action Movies" />
        <MovieRow title="TV Shows" /> */}
      </section>
      <Footer />
    </div>
  );
}
