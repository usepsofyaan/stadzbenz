export default function HeroBanner() {
  return (
    <div className="relative w-full h-64 sm:h-80 bg-gradient-to-r from-primary-500 to-accent-500 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 text-9xl">🍜</div>
        <div className="absolute bottom-2 right-10 text-8xl">🍛</div>
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-2">Stadz Benz Kuliner</h1>
        <p className="text-white text-lg sm:text-xl mb-6 max-w-md">Nikmati cita rasa autentik kuliner Indonesia dengan kualitas terbaik</p>
        <button className="bg-white hover:bg-zinc-100 text-primary-600 font-semibold px-8 py-3 rounded-full transition-colors">🛒 Pesan Sekarang</button>
      </div>
    </div>
  );
}
