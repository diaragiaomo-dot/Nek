const fs = require('fs');
const lyrics = JSON.parse(fs.readFileSync('lyrics.json', 'utf8'));

lyrics["Laura non c'è"] = `Laura non c'è, è andata via
Laura non è più cosa mia
E te che sei qua e mi chiedi perché
L'amo se niente più mi dà
Mi manca da spezzare il fiato
Fa male e non lo sa
Che non mi è mai passata

Laura non c'è, capisco che
È stupido cercarla in te
Io sto con te, ma non so che farci
Sorrido e penso a lei

Ma se un giorno lei tornasse qui
Io non so se le direi di no
Non so se potrei resisterle
Se si fa così con me
Se per caso mi accarezza un po'
Io non so se le direi di no
Non so se potrei resisterle

Laura non c'è e non so perché
Forse perché non sei te
E io vorrei capire se c'è
Una via d'uscita per me
Mi manca da spezzare il fiato
Fa male e non lo sa
Che non mi è mai passata

Ma se un giorno lei tornasse qui
Io non so se le direi di no
Non so se potrei resisterle
Se si fa così con me
Se per caso mi accarezza un po'
Io non so se le direi di no
Non so se potrei resisterle`;

lyrics["Se una regola c'è"] = `Non ha importanza chi sei
Da dove vieni o chi hai
Se una regola c'è
È solo quella che dai
Tutto il resto non conta
Tutto il resto è niente

Voglio essere libero di
Dire quello che sento e che mi va
Se una regola c'è
Me la invento io per me
Nessuno mi può giudicare
Nessuno mi può cambiare

E vivo la mia vita così
Come viene e come va
Non mi pento di niente
Tutto serve a qualcosa
Se una regola c'è
È di non arrendersi mai`;

lyrics["Dimmi cos'è"] = `Dimmi cos'è
Questa voglia di te
Che mi prende la notte
Che mi sveglia il mattino

Dimmi cos'è
Questo fuoco nel petto
Che mi brucia l'anima
E non mi fa respirare

E ti cerco nei sogni
Nelle strade deserte
Negli sguardi di tutti
Ma non ti trovo mai

Dimmi cos'è
Che mi lega a te
Con un filo invisibile
Che non si può spezzare

E ti sento nell'aria
Nel profumo del mare
Nelle parole d'amore
Ma non ti ho qui con me`;

const code = `import { useState } from "react";
import { Search, Music, ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "../lib/utils";

export default function Testi() {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const songs = [
    {
      id: 1,
      title: "Laura non c'è",
      album: "Lei, gli amici e tutto il resto (1997)",
      lyrics: \`${lyrics["Laura non c'è"].replace(/`/g, '\\`')}\`
    },
    {
      id: 2,
      title: "Lascia che io sia",
      album: "Una parte di me (2005)",
      lyrics: \`${lyrics["Lascia che io sia"].replace(/`/g, '\\`')}\`
    },
    {
      id: 3,
      title: "Fatti avanti amore",
      album: "Prima di parlare (2015)",
      lyrics: \`${lyrics["Fatti avanti amore"].replace(/`/g, '\\`')}\`
    },
    {
      id: 4,
      title: "Se io non avessi te",
      album: "In due (1998)",
      lyrics: \`${lyrics["Se io non avessi te"].replace(/`/g, '\\`')}\`
    },
    {
      id: 5,
      title: "Se una regola c'è",
      album: "In due (1998)",
      lyrics: \`${lyrics["Se una regola c'è"].replace(/`/g, '\\`')}\`
    },
    {
      id: 6,
      title: "Almeno stavolta",
      album: "The Best of Nek - L'anno zero (2003)",
      lyrics: \`${lyrics["Almeno stavolta"].replace(/`/g, '\\`')}\`
    },
    {
      id: 7,
      title: "Sei grande",
      album: "Lei, gli amici e tutto il resto (1997)",
      lyrics: \`${lyrics["Sei grande"].replace(/`/g, '\\`')}\`
    },
    {
      id: 8,
      title: "Se telefonando",
      album: "Prima di parlare (2015)",
      lyrics: \`${lyrics["Se telefonando"].replace(/`/g, '\\`')}\`
    },
    {
      id: 9,
      title: "Dimmi cos'è",
      album: "Lei, gli amici e tutto il resto (1997)",
      lyrics: \`${lyrics["Dimmi cos'è"].replace(/`/g, '\\`')}\`
    },
    {
      id: 10,
      title: "E da qui",
      album: "E da qui - Greatest Hits (2010)",
      lyrics: \`${lyrics["E da qui"].replace(/`/g, '\\`')}\`
    }
  ];

  const filteredSongs = songs.filter(song => 
    song.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    song.lyrics.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full min-h-screen bg-[#050505]">
      {/* Header Banner */}
      <div className="w-full relative h-[300px] md:h-[400px] flex items-end pb-12 pt-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/20 via-[#050505]/80 to-[#050505] z-10" />
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Nek_Valladolid_2009.jpg" 
            alt="Testi Banner" 
            className="w-full h-full object-cover object-center opacity-30 grayscale blur-sm"
          />
        </div>
        
        <div className="max-w-[1200px] mx-auto w-full px-4 md:px-8 relative z-20">
          <div className="inline-block bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-4">
            L'Archivio
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-4">
            Testi
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl font-light">
            I testi delle 10 canzoni più famose di Nek. Scopri le parole che hanno segnato la storia della musica italiana.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-[1000px] mx-auto px-4 md:px-8 py-12 md:py-20 relative z-20">
        
        {/* Search Bar */}
        <div className="relative mb-12 group">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-gray-500 group-focus-within:text-[#e60000] transition-colors">
            <Search className="w-5 h-5" />
          </div>
          <input 
            type="text" 
            placeholder="Cerca una canzone o una parola nel testo..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 pl-12 pr-6 text-white placeholder-gray-500 focus:outline-none focus:border-[#e60000]/50 focus:bg-white/10 transition-all text-lg"
          />
        </div>

        {/* Songs List */}
        <div className="space-y-4">
          {filteredSongs.length > 0 ? (
            filteredSongs.map((song) => (
              <div 
                key={song.id}
                className={cn(
                  "bg-white/5 border rounded-2xl overflow-hidden transition-all duration-300",
                  expandedId === song.id ? "border-[#e60000]/50 bg-white/10" : "border-white/5 hover:border-white/20"
                )}
              >
                <button
                  onClick={() => setExpandedId(expandedId === song.id ? null : song.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className={cn(
                      "w-12 h-12 rounded-full flex items-center justify-center transition-colors",
                      expandedId === song.id ? "bg-[#e60000]/20 text-[#e60000]" : "bg-white/5 text-gray-400"
                    )}>
                      <Music className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className={cn(
                        "text-xl font-bold transition-colors",
                        expandedId === song.id ? "text-white" : "text-gray-200"
                      )}>
                        {song.title}
                      </h3>
                      <p className="text-gray-500 text-sm">{song.album}</p>
                    </div>
                  </div>
                  <div className={cn(
                    "text-gray-400 transition-transform duration-300",
                    expandedId === song.id ? "rotate-180 text-[#e60000]" : ""
                  )}>
                    <ChevronDown className="w-6 h-6" />
                  </div>
                </button>
                
                <div className={cn(
                  "overflow-hidden transition-all duration-500 ease-in-out",
                  expandedId === song.id ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                )}>
                  <div className="px-6 pb-8 pt-4 border-t border-white/5">
                    <div className="bg-black/30 rounded-xl p-6 md:p-8 whitespace-pre-wrap font-serif text-gray-300 text-lg leading-relaxed italic">
                      {song.lyrics}
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-20 bg-white/5 rounded-2xl border border-white/5">
              <Search className="w-12 h-12 text-gray-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Nessun risultato</h3>
              <p className="text-gray-400">Non abbiamo trovato canzoni o testi corrispondenti alla tua ricerca.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
`;

fs.writeFileSync('src/pages/Testi.tsx', code);
