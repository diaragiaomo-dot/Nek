import { Search, Play, Pause, Clock, Heart, Loader2 } from "lucide-react";
import { useState, useEffect, useRef } from "react";

interface Song {
  trackId: number;
  trackName: string;
  collectionName: string;
  releaseDate: string;
  trackTimeMillis: number;
  previewUrl: string;
  artworkUrl100: string;
}

export default function Canzoni() {
  const [songs, setSongs] = useState<Song[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [playingId, setPlayingId] = useState<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const fetchSongs = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://itunes.apple.com/search?term=nek+filippo&entity=song&limit=50");
        const data = await response.json();
        
        // Filter out some random stuff and sort
        const validSongs = data.results
          .filter((s: any) => s.artistName.toLowerCase().includes("nek"))
          .sort((a: any, b: any) => a.trackName.localeCompare(b.trackName));
          
        setSongs(validSongs);
      } catch (error) {
        console.error("Error fetching songs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSongs();
  }, []);

  const formatDuration = (millis: number) => {
    const minutes = Math.floor(millis / 60000);
    const seconds = ((millis % 60000) / 1000).toFixed(0);
    return `${minutes}:${Number(seconds) < 10 ? '0' : ''}${seconds}`;
  };

  const handlePlayPause = (song: Song) => {
    if (playingId === song.trackId) {
      audioRef.current?.pause();
      setPlayingId(null);
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      const newAudio = new Audio(song.previewUrl);
      newAudio.play();
      newAudio.onended = () => setPlayingId(null);
      audioRef.current = newAudio;
      setPlayingId(song.trackId);
    }
  };

  const filteredSongs = songs.filter(s => s.trackName.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="w-full flex flex-col items-center pt-10 px-4 md:px-8 max-w-[1600px] mx-auto min-h-screen">
      <div className="w-full flex flex-col md:flex-row items-end justify-between border-b border-white/10 pb-8 mb-8">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Canzoni</h1>
          <p className="text-gray-400">Archivio dei brani di Nek. Ascolta un'anteprima di 30 secondi.</p>
        </div>
        
        <div className="mt-8 md:mt-0 w-full md:w-[350px]">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input 
              type="text" 
              placeholder="Cerca una canzone..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white focus:outline-none focus:border-[#e60000] focus:ring-1 focus:ring-[#e60000] transition-all"
            />
          </div>
        </div>
      </div>

      <div className="w-full bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden">
        <div className="grid grid-cols-12 gap-4 px-6 py-4 border-b border-white/10 bg-white/5 text-xs font-bold tracking-widest uppercase text-gray-500">
          <div className="col-span-1 text-center">#</div>
          <div className="col-span-5 md:col-span-4">Titolo</div>
          <div className="col-span-4 hidden md:block">Album</div>
          <div className="col-span-2 hidden md:block">Anno</div>
          <div className="col-span-4 md:col-span-1 flex justify-center"><Clock className="w-4 h-4" /></div>
        </div>
        
        <div className="flex flex-col min-h-[400px]">
          {loading ? (
            <div className="w-full flex justify-center items-center py-20">
              <Loader2 className="w-8 h-8 text-[#e60000] animate-spin" />
            </div>
          ) : filteredSongs.length === 0 ? (
            <div className="w-full text-center py-20 text-gray-500">
              Nessuna canzone trovata.
            </div>
          ) : (
            filteredSongs.map((song, i) => (
              <div 
                key={song.trackId} 
                onClick={() => handlePlayPause(song)}
                className="grid grid-cols-12 gap-4 px-6 py-3 border-b border-white/5 last:border-0 items-center hover:bg-white/5 transition-colors group cursor-pointer"
              >
                <div className="col-span-1 flex justify-center items-center text-gray-500 text-sm group-hover:text-[#e60000]">
                  {playingId === song.trackId ? (
                     <Pause className="w-4 h-4 text-[#e60000]" fill="currentColor" />
                  ) : (
                    <>
                      <span className="group-hover:hidden">{i + 1}</span>
                      <Play className="w-4 h-4 hidden group-hover:inline-block" fill="currentColor" />
                    </>
                  )}
                </div>
                <div className="col-span-5 md:col-span-4 flex items-center gap-3">
                  <img src={song.artworkUrl100} alt={song.trackName} className="w-10 h-10 rounded shadow object-cover" />
                  <span className={`font-bold transition-colors ${playingId === song.trackId ? "text-[#e60000]" : "text-gray-200 group-hover:text-white"}`}>
                    {song.trackName}
                  </span>
                </div>
                <div className="col-span-4 hidden md:block text-gray-400 text-sm truncate pr-4">{song.collectionName}</div>
                <div className="col-span-2 hidden md:block text-gray-500 text-sm">{song.releaseDate.substring(0, 4)}</div>
                <div className="col-span-4 md:col-span-1 flex justify-center items-center gap-4 text-gray-400 text-sm">
                  <button className="opacity-0 group-hover:opacity-100 transition-opacity hover:text-[#e60000]" onClick={(e) => e.stopPropagation()}>
                    <Heart className="w-4 h-4" />
                  </button>
                  {formatDuration(song.trackTimeMillis)}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
