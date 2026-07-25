import { Play, Pause, Calendar, Music, Mail } from "lucide-react";
import { cn } from "../lib/utils";
import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

export default function Home() {
  const navigate = useNavigate();
  const [playingId, setPlayingId] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const topSongs = [
    { id: "laura", title: "Laura non c'è", preview: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/a4/bc/59/a4bc59f0-12d2-2901-3240-462776b90e43/mzaf_16780296813686141943.plus.aac.p.m4a" },
    { id: "lascia", title: "Lascia che io sia", preview: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/06/2e/2e/062e2e2f-d6a8-def8-4b33-c987895d826e/mzaf_10774936359223451321.plus.aac.p.m4a" },
    { id: "fatti", title: "Fatti avanti amore", preview: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/d0/ff/55/d0ff55a4-c820-7519-2e87-7da87f528654/mzaf_3255653907925672393.plus.aac.p.m4a" },
    { id: "se", title: "Se telefonando", preview: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/f5/09/34/f50934c4-9622-31ac-6cf3-671efc995a60/mzaf_13289480214935126047.plus.aac.p.m4a" },
    { id: "almeno", title: "Almeno stavolta", preview: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/5a/89/ff/5a89ff65-d3dc-7ddd-951e-f2b452625d07/mzaf_898374434569542917.plus.aac.p.m4a" }
  ];

  const handlePlayPause = (songId: string, previewUrl: string) => {
    if (playingId === songId) {
      audioRef.current?.pause();
      setPlayingId(null);
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      const newAudio = new Audio(previewUrl);
      newAudio.play();
      newAudio.onended = () => setPlayingId(null);
      audioRef.current = newAudio;
      setPlayingId(songId);
    }
  };

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  return (
    <div className="w-full flex flex-col items-center">
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[600px] md:min-h-[800px] flex items-center justify-center px-4 md:px-8">
        {/* Background Image & Gradient overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Nek_in_concerto_a_Assago.jpg" 
            alt="Nek Live" 
            className="w-full h-full object-cover object-top opacity-60 mix-blend-lighten"
          />
          {/* Radial gradients to simulate concert lights */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent"></div>
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen"></div>
          <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-red-600/10 rounded-full blur-[100px] mix-blend-screen"></div>
        </div>

        <div className="relative z-10 w-full max-w-[1600px] flex flex-col pt-20 md:pt-32">
          <h1 className="text-7xl md:text-[140px] font-bold leading-none tracking-tighter text-white">
            NEK
          </h1>
          <h2 className="text-3xl md:text-5xl font-medium mt-2 md:mt-4 text-gray-100 flex items-center gap-4">
            <span className="w-8 md:w-16 h-1 bg-white inline-block"></span>
            Una voce, mille emozioni
          </h2>
          <p className="mt-6 md:mt-8 text-lg md:text-xl text-gray-300 max-w-2xl font-light">
            Da oltre trent'anni, le sue canzoni ci accompagnano, ci emozionano, ci appartengono.
          </p>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-10 md:mt-12">
            <button onClick={() => navigate('/discografia')} className="group flex items-center gap-3 bg-black/40 backdrop-blur-sm border border-[#e60000]/60 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#e60000]/10 hover:border-[#e60000] hover:shadow-[0_0_20px_rgba(230,0,0,0.4)] transition-all duration-300">
              <Music className="w-5 h-5 text-[#e60000] group-hover:animate-pulse" />
              Scopri la sua musica
            </button>
            <button onClick={() => navigate('/news')} className="group flex items-center gap-3 bg-black/40 backdrop-blur-sm border border-blue-500/60 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-500/10 hover:border-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-300">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" className="text-blue-500">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              Ultime notizie
            </button>
          </div>
        </div>
        
        {/* Decorative signature-like text */}
        <div className="absolute right-10 bottom-20 md:right-32 md:bottom-40 opacity-30 transform -rotate-12 pointer-events-none">
          <span className="text-6xl md:text-9xl font-serif italic font-light tracking-tighter">Nek</span>
        </div>
      </section>

      {/* Bento Grid Layout Section */}
      <section className="relative z-20 w-full max-w-[1600px] px-4 md:px-8 py-16 -mt-10 md:-mt-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Row 1: News (3 cols), Albums (6 cols), Top Songs (3 cols) */}
          
          {/* Ultime Notizie */}
          <div className="lg:col-span-3 bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-colors duration-300 flex flex-col">
            <div className="flex justify-between items-end border-b border-white/10 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-1 h-4 bg-[#e60000]"></div>
                <h3 className="text-sm font-bold tracking-widest uppercase">Ultime Notizie</h3>
              </div>
              <a onClick={() => navigate('/news')} className="text-xs text-[#e60000] hover:underline cursor-pointer">Vedi tutte</a>
            </div>
            
            <div className="flex flex-col gap-6 flex-grow">
              {[
                { title: "Nek annuncia nuove date del tour estivo 2026", date: "10 Maggio 2026", img: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Nek_Valladolid_2009.jpg", link: "/tour" },
                { title: "\"Alaska\" compie 27 anni: il disco che ha fatto la storia", date: "3 Maggio 2026", img: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Nek_2019.jpg", link: "/discografia" },
                { title: "Nek live a Milano: una serata indimenticabile", date: "28 Aprile 2026", img: "https://upload.wikimedia.org/wikipedia/commons/d/da/Nek_in_concerto.jpg", link: "/tour" }
              ].map((news, i) => (
                <div key={i} onClick={() => navigate(news.link)} className="flex gap-4 group cursor-pointer">
                  <div className="w-20 h-14 rounded-lg overflow-hidden flex-shrink-0">
                    <img src={news.img} alt={news.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h4 className="text-sm font-medium text-gray-200 group-hover:text-white line-clamp-2 leading-tight">{news.title}</h4>
                    <span className="text-xs text-gray-500 mt-1">{news.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Album In Evidenza */}
          <div className="lg:col-span-6 bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-colors duration-300 flex flex-col">
             <div className="flex justify-between items-end border-b border-white/10 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-1 h-4 bg-[#e60000]"></div>
                <h3 className="text-sm font-bold tracking-widest uppercase">Album In Evidenza</h3>
              </div>
              <a href="#" className="text-xs text-[#e60000] hover:underline">Vedi tutti</a>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 flex-grow content-start">
              {[
                { title: "5030", year: "2022", img: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Nek_2019.jpg" },
                { title: "Il mio gioco preferito: parte seconda", year: "2020", img: "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/90/35/a7/9035a704-3929-5076-ca39-0013867898fc/190295226114.jpg/400x400bb.jpg" },
                { title: "Unici", year: "2016", img: "https://is1-ssl.mzstatic.com/image/thumb/Music71/v4/11/7e/08/117e0803-ef01-6fa2-b7ef-21851a91f139/190295894474.jpg/400x400bb.jpg" },
                { title: "Filippo Neviani", year: "2013", img: "https://is1-ssl.mzstatic.com/image/thumb/Music/v4/39/0b/af/390bafa8-c42f-3ae2-7d8e-f48691fd6d72/825646454044.jpg/400x400bb.jpg" },
                { title: "Una parte di me", year: "2005", img: "https://is1-ssl.mzstatic.com/image/thumb/Music/y2005/m05/d13/h19/s06.pdtqqnyc.jpg/400x400bb.jpg" }
              ].map((album, i) => (
                <div key={i} className="flex flex-col gap-2 group cursor-pointer">
                  <div className="w-full aspect-square rounded-lg overflow-hidden border border-white/5 relative">
                    <img src={album.img} alt={album.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter grayscale group-hover:grayscale-0" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-200 truncate">{album.title}</h4>
                    <span className="text-xs text-gray-500">{album.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Canzoni Più Amate */}
          <div className="lg:col-span-3 bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-colors duration-300 flex flex-col">
            <div className="flex justify-between items-end border-b border-white/10 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-1 h-4 bg-[#e60000]"></div>
                <h3 className="text-sm font-bold tracking-widest uppercase">Canzoni Più Amate</h3>
              </div>
            </div>
            
            <div className="flex flex-col gap-4 flex-grow">
              {topSongs.map((song) => (
                <div key={song.id} className="flex items-center justify-between group cursor-pointer" onClick={() => handlePlayPause(song.id, song.preview)}>
                  <div className="flex items-center gap-3">
                    <button className={cn("w-8 h-8 rounded-full border flex items-center justify-center transition-colors", playingId === song.id ? "text-[#e60000] border-[#e60000]" : "text-gray-400 border-white/20 group-hover:text-[#e60000] group-hover:border-[#e60000]")}>
                      {playingId === song.id ? (
                        <Pause className="w-3 h-3" fill="currentColor" />
                      ) : (
                        <Play className="w-3 h-3 ml-0.5" fill="currentColor" />
                      )}
                    </button>
                    <span className={cn("text-sm font-medium transition-colors", playingId === song.id ? "text-[#e60000]" : "text-gray-300 group-hover:text-white")}>{song.title}</span>
                  </div>
                  <div className={cn("flex gap-0.5 h-3 items-center transition-opacity", playingId === song.id ? "opacity-100" : "opacity-30 group-hover:opacity-100")}>
                    {[2, 4, 3, 6, 4, 2, 5, 3, 7, 4].map((h, idx) => (
                      <div key={idx} className={cn("w-0.5 transition-colors", playingId === song.id ? "bg-[#e60000] animate-pulse" : "bg-gray-400 group-hover:bg-[#e60000]")} style={{ height: `${h * 2}px`, animationDelay: `${idx * 0.1}s` }}></div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            <a href="#" className="text-sm text-[#e60000] hover:underline mt-4 flex items-center gap-1 group">
              Vedi tutte le canzoni 
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>

          {/* Row 2: Concerts (3 cols), Videos (6 cols), Newsletter (3 cols) */}
          
          {/* Prossimi Concerti */}
          <div className="lg:col-span-3 bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-colors duration-300 flex flex-col">
            <div className="flex justify-between items-end border-b border-white/10 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-1 h-4 bg-[#e60000]"></div>
                <h3 className="text-sm font-bold tracking-widest uppercase">Prossimi Concerti</h3>
              </div>
              <a href="#" className="text-xs text-[#e60000] hover:underline">Vedi tutti</a>
            </div>
            
            <div className="flex flex-col gap-4 flex-grow">
              {[
                { day: "15", month: "GIU", city: "Roma", venue: "Cavea Auditorium Parco della Musica" },
                { day: "22", month: "GIU", city: "Bari", venue: "Fiera del Levante" },
                { day: "29", month: "GIU", city: "Firenze", venue: "Teatro del Maggio Musicale" },
                { day: "06", month: "LUG", city: "Verona", venue: "Arena di Verona" }
              ].map((concert, i) => (
                <div key={i} className="flex items-center gap-4 group cursor-pointer pb-4 border-b border-white/5 last:border-0 last:pb-0">
                  <div className="w-12 h-14 border border-white/10 rounded-lg flex flex-col items-center justify-center bg-white/5 group-hover:border-[#e60000]/50 group-hover:bg-[#e60000]/10 transition-colors">
                    <span className="text-lg font-bold text-white leading-none">{concert.day}</span>
                    <span className="text-[10px] text-[#e60000] font-bold mt-1">{concert.month}</span>
                  </div>
                  <div className="flex flex-col flex-grow">
                    <h4 className="text-sm font-bold text-gray-200 group-hover:text-white">{concert.city}</h4>
                    <span className="text-xs text-gray-500 truncate">{concert.venue}</span>
                  </div>
                  <a href="#" className="text-xs text-[#e60000] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Biglietti ›
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Video In Evidenza */}
          <div className="lg:col-span-6 bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-colors duration-300 flex flex-col">
            <div className="flex justify-between items-end border-b border-white/10 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-1 h-4 bg-[#e60000]"></div>
                <h3 className="text-sm font-bold tracking-widest uppercase">Video In Evidenza</h3>
              </div>
              <a href="#" className="text-xs text-[#e60000] hover:underline">Vedi tutti</a>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 flex-grow content-start">
              {[
                { title: "Nek - Se telefonando", desc: "Official Video", duration: "3:03", id: "hqGiKdy8xjs" },
                { title: "Nek - Lascia che io sia", desc: "Official Video", duration: "3:35", id: "pN5ypa6nuog" },
                { title: "Nek - Laura non c'è", desc: "Official Video", duration: "3:58", id: "zs5G5qPudzo" }
              ].map((video, i) => (
                <div key={i} className="flex flex-col gap-3 group cursor-pointer" onClick={() => navigate(`/video?id=${video.id}`)}>
                  <div className="w-full aspect-video rounded-lg overflow-hidden border border-white/10 relative">
                    <img src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`} alt={video.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full border border-white backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="w-4 h-4 text-white ml-1" fill="currentColor" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/80 px-1.5 py-0.5 rounded text-[10px] font-medium text-white">
                      {video.duration}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-200 group-hover:text-white truncate">{video.title}</h4>
                    <span className="text-xs text-gray-500">{video.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-3 bg-[#0a0a0a]/80 backdrop-blur-xl border border-blue-500/30 shadow-[0_0_20px_rgba(59,130,246,0.1)] rounded-2xl p-6 flex flex-col justify-between">
            <div>
               <div className="flex justify-between items-start mb-4">
                 <div className="flex items-center gap-2">
                    <div className="w-1 h-4 bg-blue-500"></div>
                    <h3 className="text-sm font-bold tracking-widest uppercase">Newsletter</h3>
                 </div>
                 <div className="w-10 h-10 rounded-full border border-blue-500/50 flex items-center justify-center bg-blue-500/10 text-blue-400">
                    <Mail className="w-5 h-5" />
                 </div>
               </div>
               <p className="text-sm text-gray-400 mb-6 font-light">
                 Iscriviti alla newsletter ufficiale per ricevere news, anteprime, esclusive e molto altro!
               </p>
            </div>
            
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="La tua email" 
                className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                required
              />
              <button 
                type="submit" 
                className="w-full bg-[#e60000]/80 hover:bg-[#e60000] text-white border border-[#e60000] rounded-lg px-4 py-3 text-sm font-bold shadow-[0_0_15px_rgba(230,0,0,0.4)] transition-all"
              >
                Iscriviti ora
              </button>
              <div className="flex items-center gap-2 mt-2">
                <svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" strokeWidth="2" fill="none" className="text-gray-500">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
                <span className="text-[10px] text-gray-500">La tua privacy è al sicuro con noi.</span>
              </div>
            </form>
          </div>

        </div>
      </section>

    </div>
  );
}
