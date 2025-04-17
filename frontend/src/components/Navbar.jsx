export default function Navbar() {
       return (
         <nav className="flex justify-between items-center px-6 py-4 bg-gradient-to-b from-black via-transparent">
           <h1 className="text-2xl font-bold text-red-600">Moovies</h1>
           <ul className="hidden md:flex space-x-6">
             <li className="hover:text-red-500 cursor-pointer">Accueil</li>
             <li className="hover:text-red-500 cursor-pointer">Films</li>
             <li className="hover:text-red-500 cursor-pointer">Series</li>
             <li className="hover:text-red-500 cursor-pointer">Ma liste</li>
           </ul>
           <div className="w-8 h-8 bg-gray-500 rounded-full"></div>
         </nav>
       )
     }
     