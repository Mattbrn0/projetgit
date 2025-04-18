import MovieCard from './MovieCard';

export default function MovieRow({ title, movies, genre }) {
  // Filtrer les films par genre
  const filteredMovies = movies.filter((movie) => movie.genre === genre);

  return (
    <div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <div className="flex  space-x-4 scrollbar-hide">
        {filteredMovies.map((movie, idx) => (
          <MovieCard key={idx} title={movie.title} image_url={movie.image_url} />
        ))}
      </div>
    </div>
  );;
}
