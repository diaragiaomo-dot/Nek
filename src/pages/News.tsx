import { Calendar, Tag } from "lucide-react";

export default function News() {
  const news = [
    { 
      title: "Nek annuncia nuove date del tour estivo 2026", 
      desc: "A grande richiesta, aggiunte nuove date al tour nei principali teatri italiani. I biglietti saranno disponibili da domani.",
      date: "10 Maggio 2026", 
      category: "Tour",
      img: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Nek_Valladolid_2009.jpg" 
    },
    { 
      title: "\"Alaska\" compie 27 anni: il disco che ha fatto la storia", 
      desc: "Oggi celebriamo il 27esimo anniversario di uno degli album più iconici di Nek, ripercorrendo la sua creazione.",
      date: "3 Maggio 2026", 
      category: "Musica",
      img: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Nek_2019.jpg" 
    },
    { 
      title: "Nek live a Milano: una serata indimenticabile", 
      desc: "La recensione completa e la galleria fotografica del concerto di Milano al Forum di Assago. Emozioni allo stato puro.",
      date: "28 Aprile 2026", 
      category: "Recensioni",
      img: "https://upload.wikimedia.org/wikipedia/commons/d/da/Nek_in_concerto.jpg" 
    },
    { 
      title: "Il Fan Club ufficiale si rinnova: scopri i nuovi vantaggi", 
      desc: "Da oggi la piattaforma del Fan Club offre nuove funzionalità esclusive, sconti sui biglietti e merchandising.",
      date: "15 Aprile 2026", 
      category: "Fan Club",
      img: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Nek_in_concerto_a_Assago.jpg" 
    },
  ];

  return (
    <div className="w-full flex flex-col items-center pt-10 px-4 md:px-8 max-w-[1600px] mx-auto min-h-screen">
      <div className="w-full border-b border-white/10 pb-8 mb-12">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">News</h1>
        <p className="text-gray-400">Rimani aggiornato su tutte le ultime novità, concerti e uscite discografiche.</p>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {/* Featured News (spans 2 columns on lg) */}
        <div className="lg:col-span-2 relative rounded-3xl overflow-hidden group cursor-pointer aspect-video md:aspect-[21/9]">
          <img src={news[0].img} alt={news[0].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full md:w-3/4">
            <div className="flex items-center gap-4 text-sm font-medium mb-4">
              <span className="bg-[#e60000] text-white px-3 py-1 rounded uppercase tracking-wider">{news[0].category}</span>
              <span className="text-gray-300 flex items-center gap-1"><Calendar className="w-4 h-4" /> {news[0].date}</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4 group-hover:text-[#e60000] transition-colors">{news[0].title}</h2>
            <p className="text-gray-300 line-clamp-2 md:text-lg">{news[0].desc}</p>
          </div>
        </div>

        {/* Regular News Items */}
        {news.slice(1).map((item, i) => (
          <div key={i} className="flex flex-col bg-[#0a0a0a] rounded-2xl overflow-hidden border border-white/10 group cursor-pointer hover:border-white/20 transition-all">
            <div className="w-full aspect-[16/9] overflow-hidden">
              <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                <span className="text-[#e60000] font-bold uppercase tracking-wider">{item.category}</span>
                <span>{item.date}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#e60000] transition-colors line-clamp-2">{item.title}</h3>
              <p className="text-gray-400 text-sm line-clamp-3 mb-6 flex-grow">{item.desc}</p>
              <span className="text-sm font-bold text-white flex items-center gap-1 group-hover:gap-2 transition-all mt-auto">
                Leggi l'articolo <span className="text-[#e60000]">→</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
