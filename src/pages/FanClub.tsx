export default function FanClub() {
  return (
    <div className="w-full flex flex-col items-center justify-center pt-20 px-4 md:px-8 max-w-[1200px] mx-auto min-h-[70vh]">
      <div className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 md:p-16 w-full max-w-4xl text-center flex flex-col items-center relative overflow-hidden">
        {/* Glow effects */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#e60000]/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-[100px] pointer-events-none"></div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 relative z-10">Entra nel Fan Club</h1>
        <p className="text-lg text-gray-400 mb-12 max-w-2xl relative z-10">
          Unisciti alla più grande community non ufficiale dedicata a Nek. Accedi a contenuti esclusivi, partecipa ai forum, commenta le notizie e connettiti con migliaia di fan in tutta Italia.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full relative z-10">
          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl flex flex-col items-center text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Accedi</h3>
            <p className="text-sm text-gray-400 mb-8">Hai già un account? Entra per continuare a interagire con la community.</p>
            
            <form className="w-full flex flex-col gap-4">
              <input type="email" placeholder="Email" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#e60000] transition-all" />
              <input type="password" placeholder="Password" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#e60000] transition-all" />
              <button className="w-full bg-white/10 hover:bg-white/20 text-white font-bold py-3 rounded-xl transition-all mt-2">
                Accedi
              </button>
            </form>
          </div>

          <div className="bg-gradient-to-br from-[#e60000]/20 to-black border border-[#e60000]/30 p-8 rounded-2xl flex flex-col items-center text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Registrati</h3>
            <p className="text-sm text-gray-300 mb-8">Crea un nuovo account gratuito per sbloccare tutti i vantaggi e livelli della community.</p>
            
            <form className="w-full flex flex-col gap-4">
              <input type="text" placeholder="Nome utente" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#e60000] transition-all" />
              <input type="email" placeholder="Email" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#e60000] transition-all" />
              <input type="password" placeholder="Password" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#e60000] transition-all" />
              <button className="w-full bg-[#e60000] hover:bg-red-700 text-white font-bold py-3 rounded-xl transition-all shadow-[0_0_20px_rgba(230,0,0,0.4)] mt-2">
                Crea Account
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
