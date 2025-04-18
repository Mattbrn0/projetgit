import poster from "../assets/poster.jpg";

export default function MovieCard({ title, image_url }) {
  return (
    <div className="relative w-[45vw] sm:w-[30vw] md:w-[160px] h-[30vh] sm:h-[200px] bg-gray-800 rounded overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer">
      <img
        src={image_url || poster}
        alt="Movie Poster"
        className="w-full h-full object-cover"
        onError={(e) => (e.target.parentElement.style.display = "none")}
      />
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-2">
        <p className="text-xs sm:text-sm">{title}</p>
      </div>
    </div>
  );
}
