export default function Hero() {
  return (
    <div className="relative h-[70vh] bg-cover bg-center" style={{ backgroundImage: "url('/banner.jpg')" }}>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent"></div>
      <div className="absolute bottom-20 left-6 md:left-12 text-white space-y-4">
        <h2 className="text-4xl md:text-6xl font-bold">TOP GUN MAVERICK</h2>
        <p className="max-w-md text-sm md:text-base">
          Après plus de 30 ans de service en tant que l'un des meilleurs aviateurs de la Marine, Pete "Maverick" Mitchell est à sa place, repoussant les limites en tant que pilote d'essai courageux et esquivant l'avancement de grade qui le mettrait à la terre.
        </p>
        <div className="space-x-4">
          <button className="bg-white text-black px-4 py-2 rounded font-bold">Play</button>
          <button className="bg-gray-700 px-4 py-2 rounded">Informations</button>
        </div>
      </div>
    </div>
  );
}
