import { MapPin, Calendar, ArrowRight } from "lucide-react";

export default function Tour() {
  const concerts = [
    { date: "15 Giugno 2026", city: "Roma", venue: "Cavea Auditorium Parco della Musica", status: "Disponibili" },
    { date: "22 Giugno 2026", city: "Bari", venue: "Fiera del Levante", status: "In esaurimento" },
    { date: "29 Giugno 2026", city: "Firenze", venue: "Teatro del Maggio Musicale", status: "Disponibili" },
    { date: "06 Luglio 2026", city: "Verona", venue: "Arena di Verona", status: "Disponibili" },
    { date: "12 Luglio 2026", city: "Milano", venue: "Mediolanum Forum", status: "Sold Out" },
    { date: "18 Luglio 2026", city: "Torino", venue: "Pala Alpitour", status: "Disponibili" },
  ];

  return (
    <div className="w-full flex flex-col items-center pt-10 px-4 md:px-8 max-w-[1600px] mx-auto min-h-screen">
      <div className="w-full relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden mb-12">
        <img src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Nek_Valladolid_2009.jpg" alt="Tour 2026" className="w-full h-full object-cover opacity-70 object-top" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent"></div>
        <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
          <div className="inline-block bg-[#e60000] text-white px-3 py-1 rounded text-sm font-bold uppercase tracking-widest mb-4 w-max">Tour Estivo 2026</div>
          <h1 className="text-4xl md:text-7xl font-bold text-white leading-tight mb-2">Nek Live</h1>
          <p className="text-xl text-gray-300">Ritorno sui palchi italiani con un nuovo emozionante tour.</p>
        </div>
      </div>

      <div className="w-full flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-white">Date e Biglietti</h2>
        <div className="flex gap-2">
          <button className="bg-white/10 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/20 transition-colors">Calendario</button>
          <button className="text-gray-400 px-4 py-2 text-sm font-medium hover:text-white transition-colors">Mappa</button>
        </div>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {concerts.map((c, i) => (
          <div key={i} className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 hover:border-[#e60000]/50 hover:shadow-[0_0_20px_rgba(230,0,0,0.1)] transition-all duration-300 flex flex-col">
            <div className="flex items-center gap-2 text-[#e60000] mb-4">
              <Calendar className="w-5 h-5" />
              <span className="font-bold">{c.date}</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">{c.city}</h3>
            <div className="flex items-center gap-2 text-gray-400 mb-8 flex-grow">
              <MapPin className="w-4 h-4 flex-shrink-0" />
              <span className="text-sm">{c.venue}</span>
            </div>
            <div className="flex items-center justify-between mt-auto">
              <span className={`text-xs font-bold uppercase tracking-wider ${c.status === 'Sold Out' ? 'text-gray-500' : 'text-green-500'}`}>
                {c.status}
              </span>
              <button 
                disabled={c.status === 'Sold Out'}
                className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold transition-all ${
                  c.status === 'Sold Out' 
                    ? 'bg-white/5 text-gray-500 cursor-not-allowed' 
                    : 'bg-[#e60000] text-white hover:bg-red-700 hover:shadow-[0_0_15px_rgba(230,0,0,0.4)]'
                }`}
              >
                Acquista <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
