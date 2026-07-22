import { Play, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export default function Video() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeVideoId, setActiveVideoId] = useState<string | null>(searchParams.get("id"));

  useEffect(() => {
    if (activeVideoId) {
      setSearchParams({ id: activeVideoId });
    } else {
      setSearchParams({});
    }
  }, [activeVideoId, setSearchParams]);

  const videos = [
    { title: "Nek - Se telefonando", desc: "Official Video", duration: "3:03", id: "hqGiKdy8xjs" },
    { title: "Nek - Lascia che io sia", desc: "Official Video", duration: "3:35", id: "pN5ypa6nuog" },
    { title: "Nek - Laura non c'è", desc: "Official Video", duration: "3:58", id: "zs5G5qPudzo" },
    { title: "Nek - Fatti avanti amore", desc: "Official Video", duration: "3:24", id: "jFxtn_BQauk" },
    { title: "Nek - Unici", desc: "Official Video", duration: "3:30", id: "KPiIqjF6baQ" },
    { title: "Nek - Almeno stavolta", desc: "Official Video", duration: "3:31", id: "T5V0hhZ3IVg" },
  ];

  return (
    <div className="w-full flex flex-col items-center pt-10 px-4 md:px-8 max-w-[1600px] mx-auto min-h-screen">
      <div className="w-full border-b border-white/10 pb-8 mb-12">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Video</h1>
        <p className="text-gray-400">Esplora i videoclip ufficiali e le esibizioni.</p>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {videos.map((video, i) => (
          <div key={i} className="flex flex-col gap-4 group cursor-pointer" onClick={() => setActiveVideoId(video.id)}>
            <div className="w-full aspect-video rounded-2xl overflow-hidden border border-white/10 relative shadow-lg">
              <img src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`} alt={video.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-[#e60000]/80 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#e60000] transition-all shadow-[0_0_20px_rgba(230,0,0,0.5)]">
                  <Play className="w-6 h-6 text-white ml-1" fill="currentColor" />
                </div>
              </div>
              <div className="absolute bottom-3 right-3 bg-black/80 px-2 py-1 rounded text-xs font-bold text-white backdrop-blur-md">
                {video.duration}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white group-hover:text-[#e60000] transition-colors">{video.title}</h3>
              <p className="text-sm text-gray-500 mt-1">{video.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {activeVideoId && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4">
          <button 
            onClick={() => setActiveVideoId(null)}
            className="absolute top-6 right-6 text-white hover:text-[#e60000] transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          <div className="w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <iframe 
              width="100%" 
              height="100%" 
              src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1`} 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}
