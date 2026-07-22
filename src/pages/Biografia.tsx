import { useState } from "react";
import { cn } from "../lib/utils";

export default function Biografia() {
  const [activeChapter, setActiveChapter] = useState(0);

  const chapters = [
    { title: "Gli inizi", year: "1972-1991" },
    { title: "I primi successi", year: "1992-1996" },
    { title: "Il successo di “Laura non c’è”", year: "1997-1998" },
    { title: "La carriera internazionale", year: "1999-2004" },
    { title: "Gli anni recenti", year: "2005-Oggi" },
  ];

  const timeline = [
    { year: 1972, title: "Nasce a Sassuolo", desc: "Filippo Neviani nasce il 6 gennaio." },
    { year: 1992, title: "Primo album", desc: "Pubblica il suo primo album omonimo 'Nek'." },
    { year: 1997, title: "Sanremo e Laura non c'è", desc: "Partecipa al Festival di Sanremo con 'Laura non c'è', che diventa un successo mondiale." },
    { year: 2005, title: "Una parte di me", desc: "Pubblica l'album 'Una parte di me' che include la hit 'Lascia che io sia'." },
    { year: 2015, title: "Ritorno a Sanremo", desc: "Partecipa a Sanremo con 'Fatti avanti amore', vincendo il premio per il miglior arrangiamento." },
    { year: 2026, title: "Nuovo Tour", desc: "Annuncia un nuovo tour negli stadi italiani dopo i successi dei progetti degli ultimi anni." },
  ];

  return (
    <div className="w-full flex flex-col items-center pt-20 px-4 md:px-8 max-w-[1600px] mx-auto">
      <div className="w-full relative h-[400px] rounded-3xl overflow-hidden mb-16">
        <img src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Nek_2019.jpg" alt="Nek Portrait" className="w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent"></div>
        <div className="absolute bottom-10 left-10">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">Biografia</h1>
          <p className="text-xl text-gray-300">La storia, la musica, l'uomo.</p>
        </div>
      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-12">
        <div className="lg:col-span-1">
          <div className="sticky top-28 flex flex-col gap-2">
            <h3 className="text-sm font-bold tracking-widest uppercase text-gray-500 mb-4">Capitoli</h3>
            {chapters.map((chap, idx) => (
              <button 
                key={idx}
                onClick={() => setActiveChapter(idx)}
                className={cn(
                  "text-left px-4 py-3 rounded-lg transition-all",
                  activeChapter === idx ? "bg-[#e60000]/10 text-[#e60000] border-l-2 border-[#e60000]" : "text-gray-400 hover:text-white hover:bg-white/5 border-l-2 border-transparent"
                )}
              >
                <div className="font-bold">{chap.title}</div>
                <div className="text-xs opacity-70 mt-1">{chap.year}</div>
              </button>
            ))}
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className="prose prose-invert max-w-none prose-lg">
            <h2 className="text-3xl font-bold text-white mb-6">{chapters[activeChapter].title}</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Filippo Neviani, in arte Nek, nasce a Sassuolo il 6 gennaio 1972. Fin da giovanissimo mostra una grande passione per la musica, iniziando a suonare la batteria e la chitarra. Le sue prime esperienze musicali avvengono in piccoli gruppi locali, dove inizia a sviluppare il suo stile unico che mescola pop, rock e melodia italiana.
            </p>
            <p className="text-gray-300 leading-relaxed mb-12">
              Nel corso della sua carriera ha venduto milioni di dischi in tutto il mondo, diventando uno degli artisti italiani più amati e riconosciuti a livello internazionale. La sua voce inconfondibile e la sua capacità di emozionare il pubblico lo hanno reso un'icona della musica leggera.
            </p>

            <h3 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4">Timeline della carriera</h3>
            
            <div className="relative border-l-2 border-white/10 pl-8 ml-4 flex flex-col gap-10">
              {timeline.map((item, idx) => (
                <div key={idx} className="relative">
                  <div className="absolute -left-[41px] w-5 h-5 rounded-full bg-[#050505] border-4 border-[#e60000]"></div>
                  <div className="text-[#e60000] font-bold text-xl mb-1">{item.year}</div>
                  <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
