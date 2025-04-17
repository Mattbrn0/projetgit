import MovieCard from './MovieCard'

export default function MovieRow({ title }) {
  // Dummy data for example
  const movies = Array(10).fill(null)

  return (
    <div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <div className="flex overflow-x-scroll space-x-4 scrollbar-hide">
        {movies.map((_, idx) => (
          <MovieCard key={idx} />
        ))}
      </div>
    </div>
  )
}
