import poster from "../assets/poster.jpg";

export default function MovieCard({ title, image_url }) {
  return (
    <div className="relative w-[160px] h-[240px] bg-gray-800 rounded overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer">
      <img
        src={image_url ? image_url : poster}
        alt="Movie Poster"
        className="w-full h-full object-cover"
      />
      <div>
        <p className="p-2 text-sm absolute bottom-0 left-0">{title}</p>
      </div>
    </div>
  );
}
