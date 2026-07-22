import { useState } from "react";
import { Search, Filter, Play } from "lucide-react";
import { cn } from "../lib/utils";

export default function Discografia() {
  const [filter, setFilter] = useState("Tutti");

  const albums = [
    { title: "5030", year: "2022", type: "Raccolta", img: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Nek_2019.jpg" },
    { title: "Il mio gioco preferito: parte seconda", year: "2020", type: "Studio", img: "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/90/35/a7/9035a704-3929-5076-ca39-0013867898fc/190295226114.jpg/400x400bb.jpg" },
    { title: "Il mio gioco preferito: parte prima", year: "2019", type: "Studio", img: "https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/59/c6/9d/59c69d41-9eee-1f13-edaa-a69a37441b12/190295431679.jpg/400x400bb.jpg" },
    { title: "Unici", year: "2016", type: "Studio", img: "https://is1-ssl.mzstatic.com/image/thumb/Music71/v4/11/7e/08/117e0803-ef01-6fa2-b7ef-21851a91f139/190295894474.jpg/400x400bb.jpg" },
    { title: "Prima di parlare", year: "2015", type: "Studio", img: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/be/e6/d3/bee6d332-e588-ba32-65f1-a820f05e3e71/825646145607.jpg/400x400bb.jpg" },
    { title: "Filippo Neviani", year: "2013", type: "Studio", img: "https://is1-ssl.mzstatic.com/image/thumb/Music/v4/39/0b/af/390bafa8-c42f-3ae2-7d8e-f48691fd6d72/825646454044.jpg/400x400bb.jpg" },
    { title: "E da qui - Greatest Hits 1992-2010", year: "2010", type: "Raccolta", img: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/24/91/f0/2491f0f4-bb2a-2916-749a-469b2913f12d/mzi.nclhpfmb.jpg/400x400bb.jpg" },
    { title: "Un'altra direzione", year: "2009", type: "Studio", img: "https://is1-ssl.mzstatic.com/image/thumb/Music/5b/e3/fc/mzi.ftjjnlua.jpg/400x400bb.jpg" },
    { title: "Nella stanza 26", year: "2006", type: "Studio", img: "https://is1-ssl.mzstatic.com/image/thumb/Music18/v4/03/e5/ba/03e5ba30-889d-b7f5-b0ee-550d1697c34b/mzm.puaxrrrm.jpg/400x400bb.jpg" },
    { title: "Una parte di me", year: "2005", type: "Studio", img: "https://is1-ssl.mzstatic.com/image/thumb/Music/y2005/m05/d13/h19/s06.pdtqqnyc.jpg/400x400bb.jpg" }
  ];

  const filters = ["Tutti", "Studio", "Raccolta", "Live", "Internazionali"];

  return (
    <div className="w-full flex flex-col items-center pt-10 px-4 md:px-8 max-w-[1600px] mx-auto min-h-screen">
      <div className="w-full flex flex-col md:flex-row items-end justify-between border-b border-white/10 pb-8 mb-12">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Discografia</h1>
          <p className="text-gray-400">Esplora tutti gli album, le raccolte e le edizioni speciali.</p>
        </div>
        
        <div className="mt-8 md:mt-0 w-full md:w-auto flex flex-col sm:flex-row gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input 
              type="text" 
              placeholder="Cerca album o canzone..." 
              className="w-full sm:w-[250px] bg-white/5 border border-white/10 rounded-full pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:border-[#e60000] focus:ring-1 focus:ring-[#e60000] transition-all"
            />
          </div>
          <button className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 rounded-full px-6 py-2 text-sm hover:bg-white/10 transition-colors">
            <Filter className="w-4 h-4" />
            Filtra
          </button>
        </div>
      </div>

      <div className="w-full flex gap-2 overflow-x-auto pb-4 mb-8 scrollbar-hide">
        {filters.map(f => (
          <button 
            key={f}
            onClick={() => setFilter(f)}
            className={cn(
              "px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all",
              filter === f ? "bg-[#e60000] text-white" : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
            )}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8">
        {albums.filter(a => filter === "Tutti" || a.type === filter).map((album, i) => (
          <div key={i} className="flex flex-col gap-4 group">
            <div className="w-full aspect-square rounded-xl overflow-hidden relative border border-white/5 shadow-lg group-hover:border-white/20 transition-all duration-300">
              <img src={album.img} alt={album.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button className="w-12 h-12 rounded-full bg-[#e60000] flex items-center justify-center text-white transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-[0_0_20px_rgba(230,0,0,0.5)]">
                  <Play className="w-5 h-5 ml-1" fill="currentColor" />
                </button>
              </div>
              <div className="absolute top-2 right-2 bg-black/80 px-2 py-1 rounded text-[10px] font-bold text-white uppercase tracking-wider backdrop-blur-md border border-white/10">
                {album.type}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white group-hover:text-[#e60000] transition-colors line-clamp-1">{album.title}</h3>
              <p className="text-sm text-gray-500 mt-1">{album.year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
