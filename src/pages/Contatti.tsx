import { Mail, MessageSquare, AlertCircle } from "lucide-react";

export default function Contatti() {
  return (
    <div className="w-full flex flex-col items-center pt-10 px-4 md:px-8 max-w-[1200px] mx-auto min-h-screen">
      <div className="w-full border-b border-white/10 pb-8 mb-12 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Contattaci</h1>
        <p className="text-gray-400">Hai domande, suggerimenti o vuoi segnalare un problema? Scrivici!</p>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-4 flex flex-col gap-6">
          <div className="bg-[#0a0a0a] border border-white/10 p-6 rounded-2xl flex items-start gap-4">
            <div className="bg-[#e60000]/10 p-3 rounded-xl text-[#e60000]">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Email Info</h3>
              <p className="text-sm text-gray-400 mt-1">info@nekfanclubitalia.it</p>
            </div>
          </div>
          <div className="bg-[#0a0a0a] border border-white/10 p-6 rounded-2xl flex items-start gap-4">
            <div className="bg-blue-500/10 p-3 rounded-xl text-blue-500">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Collaborazioni</h3>
              <p className="text-sm text-gray-400 mt-1">staff@nekfanclubitalia.it</p>
            </div>
          </div>
          <div className="bg-[#0a0a0a] border border-white/10 p-6 rounded-2xl flex items-start gap-4">
            <div className="bg-yellow-500/10 p-3 rounded-xl text-yellow-500">
              <AlertCircle className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Segnalazioni</h3>
              <p className="text-sm text-gray-400 mt-1">Usa il modulo per segnalare contenuti protetti da copyright.</p>
            </div>
          </div>
        </div>

        <div className="md:col-span-8 bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 md:p-10">
          <h2 className="text-2xl font-bold text-white mb-8">Invia un messaggio</h2>
          <form className="flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm text-gray-400 font-medium">Nome</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#e60000] transition-all" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm text-gray-400 font-medium">Cognome</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#e60000] transition-all" />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm text-gray-400 font-medium">Email</label>
                <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#e60000] transition-all" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm text-gray-400 font-medium">Tipo di richiesta</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#e60000] transition-all appearance-none">
                  <option value="info" className="bg-[#0a0a0a]">Informazioni generiche</option>
                  <option value="collab" className="bg-[#0a0a0a]">Collaborazioni</option>
                  <option value="error" className="bg-[#0a0a0a]">Segnalazione errore / tecnico</option>
                  <option value="copyright" className="bg-[#0a0a0a]">Rimozione contenuti / Copyright</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm text-gray-400 font-medium">Messaggio</label>
              <textarea rows={5} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#e60000] transition-all resize-none"></textarea>
            </div>

            <div className="flex items-start gap-3 mt-2">
              <input type="checkbox" id="privacy" className="mt-1 bg-white/5 border-white/10 rounded" />
              <label htmlFor="privacy" className="text-sm text-gray-400">
                Acconsento al trattamento dei miei dati personali ai sensi della Privacy Policy per gestire la mia richiesta.
              </label>
            </div>

            <button type="submit" className="self-end bg-[#e60000] hover:bg-red-700 text-white font-bold py-3 px-8 rounded-xl transition-all shadow-[0_0_20px_rgba(230,0,0,0.4)] mt-4">
              Invia Messaggio
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
