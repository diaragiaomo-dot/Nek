import { useState } from "react";
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
      lyrics: `Laura non c'è, è andata via
Laura non è più cosa mia
e te che sei qua e mi chiedi perché
l'amo se niente più mi dà
mi manca da spezzare il fiato
fa male e non lo sa
che non mi è mai passata.

Laura non c'è, capisco che
è stupido cercarla in te
io sto con te, ma non so che farci
sorrido e penso a lei
ma se un giorno lei tornasse qui
io non so se le direi di no
non so se potrei resisterle
se si fa così con me
se per caso mi accarezza un po'
io non so se le direi di no
non so se potrei resisterle.

Laura non c'è e non so perché
forse perché non sei te
e io vorrei capire se c'è
una via d'uscita per me
mi manca da spezzare il fiato
fa male e non lo sa
che non mi è mai passata.`
    },
    {
      id: 2,
      title: "Lascia che io sia",
      album: "Una parte di me (2005)",
      lyrics: `Io non ti chiedo niente
Il tuo saluto indifferente mi basta
Ma tu non puoi più farmi
Male da starci male
Non vali più di questa luna spenta
Ricorda che dicevi a me

Lascia che io sia il tuo brivido più grande
Non andare via accorciamo le distanze
Nelle lunghe attese tra di noi
Io non ho confuso mai
Braccia sconosciute con le tue

e parli e scherzi e ridi
Ti siedi e poi mi escludi sento addosso
Sorrisi che conosco sorrisi sulla pelle
Quando eravamo terra e stelle
Adesso se tu mi vuoi e se lo vuoi

Lascia che io sia il tuo brivido più grande
E non andare via accorciamo le distanze
Nelle lunghe attese tra di noi
Io non ho confuso mai
I tuoi pensieri mi sfiorano
Ti vengo incontro e più niente è importante

Solo...

E se lo vuoi
Lascia che io sia il tuo brivido più grande
E non andare via non sei più così distante
Quello che c'è stato tra di noi
Io non l'ho confuso mai
I tuoi pensieri mi sfiorano
Ed il passato si arrende al presente`
    },
    {
      id: 3,
      title: "Fatti avanti amore",
      album: "Prima di parlare (2015)",
      lyrics: `Abbiamo gambe
per fare passi
trovarci persi
avvicinarsi e poi
abbiamo bocche
per dare baci
o meglio dire
per assaggiarci
se un pianto ci fa nascere
un senso a tutto il male forse c'è
io sono pronto a vivere
ti guardo e so perché

Siamo fatti per amare
nonostante noi
siamo due braccia
con un cuore
solo questo avrai da me
fatti avanti amore
fatti avanti amore

Abbiamo mani
per afferrarci
girare insieme
come ingranaggi e poi
abbiamo occhi
con cui vediamo
ma se li chiudi
ci riconosciamo
perfetti come macchine
miracolo di nervi ed anime
io non ti chiederò perché
ti stringo e credo a te

Siamo fatti per amare
nonostante noi
siamo due braccia
con un cuore
solo questo avrai di me
fatti avanti amore
fatti avanti amore

Senti quanto rumore
il cuore fa da solo
dividiamolo in due
io la tengo per te
la sua parte migliore
fatti avanti amore
e fatti avanti amore

Siamo fatti per amare
nonostante noi
siamo due braccia
con un cuore
solo questo avrai da me
e fatti avanti amore
tu fatti avanti amore
fatti avanti amore
fatti avanti amore`
    },
    {
      id: 4,
      title: "Se io non avessi te",
      album: "In due (1998)",
      lyrics: `Se io non avessi te
forse mi arrenderei
tu sei la prima che
fa un viaggio dentro me
e poi non molla mai
se io non avessi te
che alternative avrei
qualcuno ha detto già
che non funzionerà
ma io non cambio idea
do retta solo a me
scelgo e riscelgo te
sai che amarti non è mai abbastanza
e che tu sei tutto quello che mi manca
dimmi un po'
dimmi cos'altro c'è
se io non avessi te
se io non avessi te
forse vivrei a metà
e un uomo chiuso in sé
vegeta e non lo sa
che se non dai non hai
e ti convinci poi
che solo non ce la fai
sai che amarti non è mai abbastanza
è che tu sei tutto quello che mi manca
e così
come una scheggia te
sei entrata dentro me
se io non avessi te
sai che amarti non è mai abbastanza
è che tu sei tutto quello che mi manca
ed andiamo avanti soli o in mezzo a tanti
sempre accelerando sempre fino in fondo
finché vuoi`
    },
    {
      id: 5,
      title: "Se una regola c'è",
      album: "In due (1998)",
      lyrics: `Mi dici cosa c'è che non va
pensi ancora a quella storia là
lo so già si fatica a stare soli
sai che rimango qua finché vuoi
io capisco bene come stai
fossi in te credo che reagirei
che consigli vuoi da me
se poi fai quel che vuoi te
sai che mai ti direi va' da lei

Se una regola c'è
non la chiedere a me
che le regole sai le ho sempre infrante
dico a tutti così
poi chissà, pure io
mi ritroverei a sperare per niente

Molla tutto e andiamo via, un po' qua
basta la mia compagnia per metà
una donna non sarà mai la tua
fino a quando la ritrovi qua
nella tua testa ma...`
    },
    {
      id: 6,
      title: "Almeno stavolta",
      album: "The Best of Nek - L'anno zero (2003)",
      lyrics: `Se non ti vuoi fidare,
almeno ascoltami,
di rimanermi ostile
non serve a te
nè a me
non voglio interrogarti
rinfacciarti quel che fai
io piuttosto sto cercando
chi eravamo noi
almeno stavolta
almeno ascolta

almeno stavolta
col coraggio di guardarci in faccia
ridammi l'effetto di un battito nel petto

sara' che siamo stanchi,
sara' il carattere
la lista dei difetti
l'hai fatta tu
io mai
ora smetti di pensare
a un problema che non c'e'
e dammi il tempo di inchiodare
tutti i tuoi perche'
almeno stavolta
almeno ascolta

almeno stavolta col coraggio di guardarci in faccia
ridammi l'effetto
di un battito nel petto

sono qui, questa notte
dietro a un sì
che non parte

almeno stavolta
con la voglia di guardarci in faccia
sperando che un'ora
ti dia voglia di ridarti ancora
e cosi' non so come
griderai il mio nome

se non ti vuoi fidare
almeno ascoltami
di rimanermi ostile
non serve a te
nè a me.`
    },
    {
      id: 7,
      title: "Sei grande",
      album: "Lei, gli amici e tutto il resto (1997)",
      lyrics: `Ogni passo, ogni faccia, ogni cosa che fai
ogni volta è un massacro
se tu te ne vai
si lo so che mi piace
fermarmi a pensarti
ma se posso toccarti
funziona di più
e non serve spiegarti la storia che sei...
le parole son senza ritorno lo sai
preferisco appoggiare le labbra alle tue...
col respiro che si agita contro le mie
non mi va
di parlare di ieri
con la vita non ci sto mai pari
tu sei molto diversa dagli altri
dai di più

a pensarci bene il bello di te
è che viaggi sempre sulle mie frequenze,
sei grande
ed in certe cose sei come me
non t'accontenti di essere
una fra tante
sei grande

ed ho molto rispetto per ogni tua idea...
non la voglio cambiare per pazzesca che sia
non ti stresso per farti più simile a me...
che se fossi diversa non saresti più te
poi nessuno conosce nessuno
non si sa mai con chi stai, però

a pensarci bene il bello di te
è che viaggi sempre sulle mie frequenze,
sei grande
prendi quel che serve fino che c'è
mi dai tanto e non te ne accorgi neanche,
sei grande,
ma grande...
sei grande

a pensarci bene il bello di te
è che viaggi sempre sulle mie frequenze,
sei grande
ed in certe cose sei come me
e non t'accontenti di essere una fra tante,
sei grande
a pensarci bene il bello di te
è che viaggi sempre sulle mie frequenze, sei grande
ed in certe cose sei come me
e non t'accontenti di essere una fra tante,
sei grande`
    },
    {
      id: 8,
      title: "Se telefonando",
      album: "Prima di parlare (2015)",
      lyrics: `Lo stupore della notte
spalancata sul mar
ci sorprese che eravamo sconosciuti
io e te.
Poi nel buio le tue mani
d'improvviso sulle mie,
è cresciuto troppo in fretta
questo nostro amor.
Se telefonando
io potessi dirti addio
ti chiamerei.
Se io rivedendoti
fossi certo che non soffri
ti rivedrei.
Se guardandoti negli occhi
sapessi dirti basta
ti guarderei.
Ma non so spiegarti
che il nostro amore appena nato
è già finito.
Se telefonando
io volessi dirti addio
ti chiamerei.
Se io rivedendoti
fossi certo che non soffri
ti rivedrei.
Se guardandoti negli occhi
sapessi dirti basta
ti guarderei.
Ma non so spiegarti
che il nostro amore appena nato
è già finito...è già finito`
    },
    {
      id: 9,
      title: "Dimmi cos'è",
      album: "Lei, gli amici e tutto il resto (1997)",
      lyrics: `Fammi un po' compagnia
dai baciami adesso
io non so cosa sia
sto sul depresso
è una noia bestiale
che mi prende se solo non ci sei
è una cosa normale
o succede solo a me?

Dimmi dimmi dimmi cos'è cos'è che c'è
dimmi dimmi dimmi cos'è che c'è tra noi
forse i troppi impegni che hai
sempre diversi
quest'amore a sorsi lo sai non mi va

cosa credi che sia
e stringimi adesso
io ti poggio la testa sul petto e ti ascolto
è una noia bestiale...`
    },
    {
      id: 10,
      title: "E da qui",
      album: "E da qui - Greatest Hits (2010)",
      lyrics: `Gli amici di sempre,
gli abbracci più lunghi,
la musica, i libri, aprire i regali,
i viaggi lontani che fanno sognare,
i film che ti restano impressi nel cuore,
gli sguardi e quell'attimo prima di un bacio,
le stelle cadenti, il profumo del vento,
la vita rimane la cosa più bella che ho.

Una stretta di mano,
tuo figlio che ride,
la pioggia d'agosto
e il rumore del mare,
un bicchiere di vino insieme a tuo padre,
aiutare qualcuno a sentirsi migliore
e poi fare l'amore sotto la luna
guardarsi e rifarlo più forte di prima,
la vita rimane la cosa più bella che ho.

E da qui
non c'è niente di più naturale
che fermarsi un momento a pensare
che le piccole cose son quelle più vere
e restano dentro di te
e ti fanno sentire il calore
ed è quella la sola ragione
per guardare in avanti e capire
che in fondo ti dicono quel che sei.

È bello sognare di vivere meglio,
è giusto tentare di farlo sul serio
per non consumare nemmeno un secondo
e sentire che anche io sono parte del mondo
e con questa canzone dico quello che da sempre so
che la vita rimane la cosa più bella che ho.

E da qui
non c'è niente di più naturale che fermarsi
un momento a pensare che le piccole cose
son quelle più vere le vivi le senti e tu
ogni giorno ti renderai conto che sei vivo
a dispetto del tempo
quelle cose che hai dentro le avrai al tuo fianco
e non le abbandoni più
e non le abbandoni più
dicono chi sei tu.`
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
