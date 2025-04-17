export default function MovieCard() {
       return (
         <div className="min-w-[160px] h-[240px] bg-gray-800 rounded overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer">
           <img src="/poster.jpg" alt="Movie Poster" className="w-full h-full object-cover" />
         </div>
       )
     }
     