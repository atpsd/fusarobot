    const grammar = `

I ::=   "title:    Diego Fusaro Generator\\n"
      ^ "author:   fb.me/atpsd - archivefever.tk@gmail.com\\n"
      ^ "language: italian\\n"
      ^ "status:   refinable\\n"
      ^ "topic:    philosophy\\n"
      ^ "comment:  generatore automatico di frasi filosofiche\\n"
      ^ "warning:  nessun Diego Fusaro e' stato maltrattato durante la sua ricreazione \\n"
      ^ "created:  05/02/2023"
;


S ::= \\
(  FraseIoCredo
| FraseApodittica
| -- FraseNeoliberismo
| - FraseSillogismo
) ^"."

;




(*************************************)
(********** FRASE: IO CREDO **********)
(*************************************)

FraseIoCredo ::=
(+++FilosofoCitazione.Lunga | _)
IoCredo CheSiTratti
	( OggiPiuCheMai DiLavorareFilosoficamente  APartireDa una | DellaCompiutaPeccaminosita della)
TematicaFissa ChePortiAllAttenzione {^","Brocardo.Minusc^","}{la Tematica ComeNecessariamenteBasata} sulla TematicaFissa;


IoCredo ::=
 +io (auspico|credo|suppongo|penso) [vivamente|con tutta la fondatezza(epistemologica|ragionativa|"meta-economica") (possibile|di cui sono capace|presente alla mia concettualizzazione|"visibile nella contemporaneit&agrave")]
| io teorizzo
| io ipotizzo [da sempre]
| sono filosoficamente convinto
| i grandi [^ssimi] (eroi|osservatori|studiosi|avversatori|analisti) (della (filosofia|storia del(^la filosofia| neoliberismo [luddista|autoingerente|ricorsivo] ))) sono concordi nel ritenere
| le (dinamiche|apocalissi|rovine|(tristi|feroci|agghiaccianti|inenarrabili|scandalose|arrembanti|paparazzatissime) vicende|guerre) macroeconomiche ci (fanno (pensare|sospettare)|suggeriscono)
| ((la (maturazione|disposizione(imperante|palese|roboante|ParticipioPresenteSing))) | lo (schieramento|straniamento) | "l'incapsulamento" (surrettizio|ricorsivo|devastante|progettantesi|sognante|autoriferito|distruttivo)) delle forze della Tematica suggerisce
;



CheSiTratti ::= che si tratti
| che si parli
| che si argomenti
| che si stia parlando
;

OggiPiuCheMai ::= oggi pi^"&ugrave" che mai
| soprattutto oggi
| come precedenza assoluta
| in special modo in quest'epoca
;

DiLavorareFilosoficamente ::= di lavorare filosoficamente
| di (speculare | riflettere | ragionare | pensare | elucubrare) (dialetticamente | filosoficamente | criticamente | ermeneuticamente)
;

APartireDa ::= a partire da
| a partire da
| a partire da
;


TematicaFissa := Tematica;

Tematica ::= (
	TematicaSost ::= RimaConAzion^i
	;

	TematicaAgg ::=
	(Prefisso.Light | ++++ _)
		( ++(filosofiche|critiche|ideologiche|socioeconomiche|liberiste)
	  	| RimaConIstiche
	  )
	;


Disciplina.(Sost|SostAgg) (++_ | Disciplina.Agg) delle
TematicaSost TematicaAgg
);



Disciplina ::=
	Agg: (
	  dei linguaggi | delle religioni | medievale | antica | dei linguaggi | economica | scientifica | sperimentale | generale | speciale | trascendentale | idealistica | empirica | induttiva | "economico&#8209politica" ) | 

	SostAgg: (


	( (ArtDet: la)

	(
	  semantica | critica | teoretica | morale | logica | dinamica | retorica | microfisica | prossemica | semiotica | didattica | numerica | statistica | chimica | botanica | geotecnica | slavistica | macrobiotica
	)

	)

	|

	( (ArtDet: "l'")

	  interazionistica | anatolistica | armenistica
	)

	)

	|

	Sost:
	(
	  pedagogia | paleografia | teoretica | bibliografia | fisiologia | filologia | geografia
	)


;



ChePortiAllAttenzione ::= che porti all'attenzione
| che porti all'attenzione
| che porti all'attenzione
;


ComeNecessariamenteBasata ::=
come ( necessariamente | obbligatoriamente | fondamentalmente | inevitabilmente ) ( basata | fondata)
;

DellaCompiutaPeccaminosita ::= (


"della compiuta peccaminosit&agrave" | "del cretinismo economico" | "del Grand Hotel Abisso" | "del pensiero unico" | "del capitalismo trionfante" | "dell'abbronzatura integrale" | "della dittatura del capitale" | "dello sfacelo europeistico" | "del mercato sovrastrutturale" | "dell'utopia sanguinaria" | "dell'ordine globalizzato" | "della violenza storica" | "dello sfruttamento capitalistico del lavoro" | "del meccanismo di riproduzione autoreferenziale" | "del nesso simbolico"
);



Filosofo ::=
  1: (Nome: ["Antonio"] "Gramsci" |
  Opera:
( "I quaderni" | "Il materialismo storico e la filosofia di Benedetto Croce" | "Gli intellettuali e l'organizzazione della cultura" | "Il Risorgimento" | "Note sul Machiavelli, sulla politica e sullo Stato moderno" | "Letteratura e vita nazionale" | "Passato e presente"
))

|  2: (Nome: ["Martin"] "Heidegger" |
   Opera:
( "La storia dell'Essere" | "Dottrina delle categorie e del significato in Duns Scoto" | "Fenomenologia della vita religiosa" | "Il concetto di tempo" | "Prolegomeni alla storia del concetto di tempo" | "Essere e tempo" | "Che cos'e' metafisica" | "Kant e il problema della metafisica" | "L'essenza del fondamento" | "Concetti fondamentali della metafisica. Mondo-Finitezza-Solitudine" | "L'origine dell'opera d'arte" | "Holderlin e l'essenza della poesia" | "Contributi alla filosofia. Sull'evento" | "La storia dell'Essere" | "La dottrina platonica della verit&agrave" | "L'essenza della verit&agrave." | "L'essenza del nichilismo" | "Lettera sull'umanismo" | "Sentieri interrotti" | "Il linguaggio" | "Introduzione alla metafisica" | "La questione della tecnica" | "Saggi e discorsi" | "Che cosa significa pensare?" | "Il principio di ragione" | "Identit&agrave e differenza" | "L'abbandono" | "In cammino verso il linguaggio" | "Nietzsche" | "Tempo e essere" | "La tesi di Kant sull'essere" | "Ormai solo un dio ci pu&ograve salvare" | "Segnavia" | "Il trattato di Schelling sull'essenza della libert&agrave umana" | "Quattro seminari"
))

|  3: (Nome: ["Georg Wilhelm Friedrich"] "Hegel" |
  Opera:
( "La vita di Ges&ugrave" | "Primi scritti critici" | "Aforismi jenensi" | "Filosofia dello spirito jenese" | "Fenomenologia dello spirito" | "Scienza della logica" | "Enciclopedia delle scienze filosofiche" | "Lineamenti di filosofia del diritto" | "Estetica" | "Lezioni sulla filosofia della religione" | "Lezioni sulla filosofia della storia" | "Lezioni sulla storia della filosofia"
))

|  4: (Nome: ["Karl"] "Marx" |
  Opera:
( "Il Capitale" | "Grundrisse" | "Lavoro salariato e capitale" | "Manoscritti economico-filosofici" | "Miseria della filosofia" | "Per la critica della filosofia del diritto di Hegel" | "Salario, prezzo e profitto" | "Tesi su Feuerbach"
))


|  5: (Nome: ["Ludwig"] "Feuerbach" |
  Opera:
( "Essenza del cristianesimo" | "Principi della filosofia dell'avvenire" | "Essenza della religione" | "Teogonia secondo le fonti dell'antichit&agrave classica"
))

|  6: (Nome: ["Gyorgy"] "Luk&agravecs" |
  Opera:
( "Goethe e il suo tempo" | "Saggi sul realismo" | "Il marxismo e la critica letteraria" | "La letteratura sovietica" | "Il significato attuale di realismo critico" | "Breve storia della letteratura tedesca" | "Thomas Mann e la tragedia dell'arte moderna" | "Contributi alla storia dell'estetica" | "La lotta fra progresso e reazione nella cultura d'oggi" | "Prolegomeni a un'estetica marxista" | "Il significato attuale del realismo critico" | "La distruzione della ragione" | "Il giovane Hegel e i problemi della societ&agrave capitalistica" | "Teoria del romanzo. Saggio storico-filosofico sulle forme della grande epica" | "Il romanzo storico" | "L'anima e le forme" | "Realisti tedeschi del XIX secolo" | "Scritti di sociologia della letteratura" | "Storia e coscienza di classe" | "Il dramma moderno" | "La genesi della tragedia borghese da Lessing a Ibsen" | "Il Dramma moderno dal Naturalismo a Hofmannsthal" | "Marxismo e politica culturale" | "Il marxismo nella coesistenza" | "Lenin. Unit&agrave e coerenza del suo pensiero" | "Cultura e potere" | "Estetica" | "Primi scritti sull'estetica" | "Scritti politici giovanili" | "Arte e societ&agrave. Scritti scelti di estetica" | "Kommunismus" | "L'uomo e la rivoluzione" | "Ontologia dell'essere sociale" | "Il giovane Marx" | "Prolegomeni all'ontologia dell'essere sociale" | "Marxismo o esistenzialismo" | "Coscienza di classe e storia. Codismo e dialettica"
))

|  7: (Nome: "Mario Adinolfi" |
  Opera:
( "Voglio la mamma"
))


|  8: (Nome: "Ezra Pound" |
  Opera:
( "A Lume Spento" | "Canzoni" | "Ripostes of Ezra Pound" | "Sonnets and ballate of Guido Cavalcanti" | "Cathay" | "Twelve Dialogues of Fontenelle" | "Quia Pauper Amavi" | "The Fourth Canto" | "Cantos LII-LXXI" | "Carta da visita" | "Cantos LXXII-LXXIII" | "L'America, Roosevelt e le Cause della Guerra Presente" | "Introduzione alla Natura Economica degli S.U.A." | "Canti pisani" | "Lavoro ed usura" | "The Cantos" | "Trattato d'armonia ed altri scritti musicali" | "Radiodiscorsi" | "Canti postumi" | "Ego scriptor cantilenae" | "Carte italiane" | "Rose rampicanti"
))

|  9: (Nome: "Lando Buzzanca" |
  Opera:
( "Divorzio all'italiana" | "I giorni contati" | "La parmigiana" | "La smania addosso" | "Le monachine" | "Tutto il bello dell'uomo" | "Sedotta e abbandonata" | "I marziani hanno 12 mani" | "Amore in 4 dimensioni" | "Il magnifico cornuto" | "Extraconiugale" | "Letti sbagliati" | "Colpo grosso ma non troppo" | "James Tont operazione D.U.E." | "Racconti a due piazze" | "Ringo e Gringo contro tutti" | "Per qualche dollaro in meno" | "Una Rosa per tutti" | "Vaya con dios gringo" | "Don Giovanni in Sicilia" | "Le dolci signore" | "Operazione San Pietro" | "Colpo di sole"
))


|  10: (Nome: "Maurizio Costanzo" (---\\preve | +++++++_) |
  Opera:
( "L'amore in provincia. Confessioni al microfono" | "Malhumor" | "Dizionario delle idee correnti" | "Le polemiche di Acquario" | "Stasera amore. Le storie di sesso e sentimento di molti italiani che avete visto su Retequattro" | "Di amori ne ho avuti tanti. Una hostess." | "Per&ograve che brutta paura." | "Smemorie" | "Caro Babbo Natale" | "Il resto &egrave vita" | "Alfredino. Il pozzo dei troppi misteri" | "Orazio. Diario di un uomo straordinariamente normale" | "Bella Italia. perch&eacute le leghe?" | "Dove andiamo. Riflessioni a sipario chiuso" | "Dietro l'angolo. Riflessioni per un anno" | "La televisione &egrave piccola" | "Un paese anormale. L'Italia che non ci piace" | "Show. Vent'anni di storie e di personaggi" | "Facciamo finta che. L'industria televisione." | "Chi mi credo di essere" | "E che sar&agrave mai?" | "La strategia della tartaruga" | "Preferisco i cani (e un gatto)"
))

|  11: (Nome: "Costanzo Preve" |
  Opera:
( "La classe operaia non va in paradiso: dal marxismo occidentale all'operaismo italiano" | "Cosa possiamo chiedere al marxismo" | "La filosofia imperfetta" | "La teoria in pezzi" | "La ricostruzione del marxismo fra filosofia e scienza" | "La rivoluzione teorica di Louis Althusser" | "La passione durevole" | "La musa di Clio vestita di rosso" | "Il filo di Arianna" | "Il marxismo ed il problema teorico dell'eguaglianza oggi" | "Il convitato di pietra. Saggio su marxismo e nichilismo" | "L'assalto al cielo" | "Il pianeta rosso" | "Il tempo della ricerca" | "L'eguale libert&agrave" | "Oltre la gabbia d'acciaio" | "Il teatro dell'assurdo" | "Una teoria nuova per una diversa strategia politica" | "Il marxismo vissuto del Che" | "Un elogio della filosofia" | "Quale comunismo?" | "La fine di una teoria" | "Il comunismo storico novecentesco" | "Nichilismo Verit&agrave Storia" | "Ges&ugrave. Uomo nella storia, Dio nel pensiero" | "Il crepuscolo della profezia comunista" | "L'alba del Sessantotto" | "Marxismo, Filosofia, Verit&agrave" | "Destra e sinistra. La natura inservibile di due categorie tradizionali" | "La questione nazionale alle soglie del XXI secolo" | "Le stagioni del nichilismo" | "Individui liberati, comunit&agrave solidali" | "Contro il capitalismo, oltre il comunismo." | "La fine dell'Urss. Dalla transizione mancata alla dissoluzione reale" | "Il ritorno del clero. La questione degli intellettuali oggi" | "Le avventure dell'ateismo. Religione e materialismo oggi" | "Un nuovo manifesto filosofico"
))


|  12: (Nome: ["Slavoj"] "Zizek" |
  Opera:
( "Il Grande Altro. Nazionalismo, godimento, cultura di massa" | "Il godimento come fattore politico" | "Benvenuti nel deserto del reale" | "Difesa dell'intolleranza" | "Il soggetto scabroso" | "L'isterico sublime. Psicanalisi e filosofia" | "Tredici volte Lenin. Per sovvertire il fallimento del presente" | "Iraq. Il paiolo in prestito" | "Dello sguardo e altri oggetti. Saggi su cinema e psicoanalisi" | "L'epidemia dell'immaginario" | "Distanza di sicurezza. Cronache del mondo rimosso" | "Credere, Roma, Meltemi" | "Contro i diritti umani" | "Psicoanalisi e mondo contemporaneo" | "Il cuore perverso del cristianesimo" | "Considerazioni politicamente scorrette sulla violenza metropolitana" | "La violenza invisibile" | "Il segreto sessuale della Chiesa" | "L'universo di Hitchcock" | "In difesa delle cause perse" | "Leggere Lacan. Guida perversa al vivere contemporaneo" | "Politica della vergogna" | "Zizek presenta Mao. Sulla pratica e sulla contraddizione" | "Dalla Tragedia alla Farsa" | "Vivere alla fine dei tempi" | "Tarkovskij: La cosa dallo spazio profondo" | "Il resto indivisibile. Su Schelling e questioni correlate" | "Benvenuti in tempi interessanti" | "Organi senza corpi. Deleuze e le sue implicazioni" | "Chiedere l'impossibile" | "La visione di parallasse" | "Cosa vuole l'Europa?" | "Il sublime oggetto dell'ideologia" | "Sul teatro musicale" | "107 storielle di Zizek" | "Meno di niente" | "Evento" | "Fare i conti con il negativo"
))


|  13: (Nome: ["Theodor"] "Adorno" |
  Opera:
( "Kierkegaard. La costruzione dell'estetico" | "Dialettica dell'illuminismo" | "Parole chiave. Modelli critici" | "Minima Moralia." | "Teoria dell'Halbbildung" | "Sulla metacritica della gnoseologia" | "Tre studi su Hegel" | "Dialettica negativa" | "Teoria Estetica" | "Il gergo dell'autenticit&agrave" | "Terminologia filosofica" | "La personalit&agrave autoritaria"
))

|  14: (Nome: ["Max"] "Horkheimer" |
  Opera:
( "Filosofia e teoria critica" | "La nostalgia del totalmente altro" | "Eclissi della ragione" | "Taccuini" | "Studi di filosofia della societ&agrave" | "Lezioni di sociologia" | "Kant: la critica del giudizio" | "La societ&agrave di transizione" | "I seminari della Scuola di Francoforte" | "Gli inizi della filosofia borghese della storia" | "Crepuscolo. Appunti presi in Germania" | "Studi sull'autorit&agrave e la famiglia" | "Eclisse della ragione"
))
;






(*****************************************)
(********** FRASE: NEOLIBERISMO **********)
(*****************************************)

FraseNeoliberismo ::=
destra DelDenaro e \\sinistra DelCostume (^","Brocardo.Minusc^"," | +++_) sono LeDueAli DelNeoliberismo;

DelDenaro ::=
del denaro
| dell'industria [globale | culturale | massificata]
| dei potentati [neoglobalizzanti | eurocentrici | oppressivi]
| di \\confindustria
| del (disumano | condannabile | prepotente | problematico) ( \\mercato | oligopolio | potentato | progetto economico) [\\universale]
;

DelCostume ::=
del costume
| della moda
| della \\t^\\v
;

LeDueAli ::=
le due AliSinonimo
| le due AliSinonimo
| le [AliAggettivoPre] AliSinonimo
| le AliSinonimo [AliAggettivoPost]
;

AliSinonimo ::=
ali
|manifestazioni
|progressioni
|estrinsecazioni
|ipostatizzazioni
|esplosioni semantiche
|apparizioni
|prescrizioni
|RimaConAzion^i
;

AliAggettivoPre ::=
agghiaccianti
|palesi
|manifeste
|"pi&ugrave appariscenti"
|superlative
|imprescindibili
;

AliAggettivoPost ::=
"pi&ugrave evidenti"
|innegabili
|non mediabili
|meno ignorabili
|"pi&ugrave devastanti"
;

DelNeoliberismo ::=
del \\neoliberismo [pi^"&ugrave" abietto | di regime | apocalittico | imperante | ParticipioPresenteSing]
| del (pi^"&ugrave" condannabile | deleterio | machiavellico | ParticipioPresenteSing) \\neoliberismo [delle \\nazioni | dell'Europa | AggettivoFantasioso]
| (dell'infernale | dell'agghiacciante | dell'aberrante | dell'inverosimile) \\neoliberismo AggettivoFantasioso
| del \\neoliberismo ParticipioPresenteSing

;





(*************************************)
(********* FRASE: APODITTICA *********)
(*************************************)

FraseApodittica ::= (
	Pred ::= >( (ci(rivela|mostra|fa capire)) | delinea | denuncia | conferma | mistifica | descrive |tratteggia | mappa | perimetra | circostanzia | abbraccia | delimita | specifica | indaga)
	;

	CompModo ::= ("ora pi&ugrave che mai" | con urgenza | "in modo sempre pi&ugrave" (attuale|brutale|accurato|scientifico|profondo|preoccupante|lampante) |con una (chiarezza|"lucidit&agrave"|prontezza|presenza di spirito|precisione|mappatura|retorica)(lampante|cristallina|abbacinante|-bipartisan|AggettivoFantasioso))
	;

	( (Contesto.In PredContesto [ma (mai|non|sempre|di rado) PredContesto]).(M|F)
	che ci mostra la TematicaFissa ^","
	(Contesto.ArtDet PredContesto).(M|F) che Pred la Tematica Pred la TematicaFissa stessa )

	|

	( ( la TematicaFissa ^"," che Pred (Contesto.ArtDet PredContesto).(M|F) della Tematica ^",") a mio avviso (^","Brocardo.Minusc^"," | +++_) Pred CompModo la Tematica [^"," proprio FilosofoCitazione.Breve])

	|

	( Filosofo.Nome.(1|2|3|4|5|6|7|8|9|10|11|12|13|14) e Filosofo.Nome.(1|2|3|4|5|6|7|8|9|10|11|12|13|14) {concordano nel dire che la Tematica "&egrave" iscritta CompModo (Contesto.In PredContesto).(M|F) da cui (prende le mosse|trae sostanza|discende|origina|torna ciclicamente)}{(^","Brocardo.Minusc^"," | +++_)} la Tematica
	)

	|

	( la Tematica ^"," di cui parla Filosofo.Nome.(1|2|3|4|5|6|7|8|9|10|11|12|13|14) Contesto.In.(M|F) della Tematica ^"," Pred tutta la Tematica (Contesto.In PredContesto).(M|F) della Tematica)

	|

	( ( Filosofo.Nome Pred la Tematica (Contesto.In PredContesto).(M|F) della Tematica ^"," e Pred CompModo (^","Brocardo.Minusc^","|++++_) la Tematica AggettivoFantasioso in "&ldquo;" ^Filosofo.Opera^ "&rdquo;")
	).(1|2|3|4|5|6|7|8|9|10|11|12|13|14)

	|

	( (la Tematica Pred CompModo l'importanza di Filosofo.Nome (Contesto.In PredContesto).(M|F) (della Tematica|DelNeoliberismo))
	).(1|2|3|4|5|6|7|8|9|10|11|12|13|14)

	|

	( Filosofo.Nome ci parla CompModo DelNeoliberismo connesso alla Tematica e (Pred questa "verit&agrave" (Contesto.In PredContesto)).(M|F) della Tematica).(1|2|3|4|5|6|7|8|9|10|11|12|13|14)

)
;



(*************************************)
(********* FRASE: SILLOGISMO *********)
(*************************************)

FraseSillogismo ::= (
	Pred ::= >(ci(parla|racconta|"d&agrave" un resoconto)della|(denuncia|descrive|disintegra|appoggia|rivela|atrofizza|espande|neutralizza|scoraggia|congeda|trasforma|mercifica|istanzia|circostanzia)la)
	;

	PredFisso := Pred;

	Agg ::= (drammatica|sconvolgente|crudele|possibilistica|preventiva|brutale|brutta| infernale|laida|mostruosa|bruttissima| agghiacciante|paurosa|oscena|pessima| ributtante|ripugnante|sconcia|spaventosa| turpe|crudele|efferata|feroce|atroce| orribile|terribile|spietata|tremenda| orripilante|schifosa|repellente| raccapricciante|burrascosa|orrida| orrifica|nefanda)
	;

	( la TematicaFissa PredFisso NeoDisciplinaFissa e la NeoDisciplinaFissa (^","Brocardo.Minusc^"," | +++_) PredFisso TematicaFissa [DelNeoliberismo [che Pred Tematica]] )
	|

	((NeoDisciplina^",")+ NeoDisciplina e TematicaFissa) >(traggono(sostanza|[molta]verosimiglianza|[la propria]autorevolezza|"autorit&agrave"|"verit&agrave"|conferma)|originano|discendono|ereditano tutto|provengono|hanno appreso tutto) [in modo ParticipioPresenteSing]  dalla Agg Tematica

);

NeoDisciplina ::= (
Prefisso.Light Disciplina.Sost
);

NeoDisciplinaFissa :=
NeoDisciplina
;

FilosofoCitazione ::= (

Breve: come diceva (Filosofo.Nome [in "&ldquo;" ^Filosofo.Opera^ "&rdquo;"]).(1|2|3|4|5|6|7|8|9|10|11|12|13|14) |

Lunga : (	+come (diceva|ha scritto|chiosava|avvertiva|ammoniva|indicava) [magistralmente] ((il (grand^(e|issimo) | (coraggios|lucid)^(o|issimo) | profetico)) | l'immenso)
| "se ascoltiamo ci&ograve che diceva"
| se rileggiamo ["pi&ugrave" attentamente] un (foglio staccato[trovato negli sgabuzzini dello stampatore|mai (andato in stampa|giunto al tipografo|(dato|consegnato|spedito via email|wetransferato|messo in ftp) alla fotolito)]|lacerto|frammento|appunto|capoverso|rigo|appunto|acrostico|bifronte senza capo|rebus) [non ufficiale|mai pubblicato|in via di riscoperta|privato|enigmatico|chiarificativo] di
| se riprendiamo la [grande|pervasiva|complicata] tematica "gi&agrave" (intrapresa|analizzata|elucubrata) da
| come possiamo leggere in un "post-it" >[volante|spiegazzato|(rosa|verde|azzurro|rosso|giallo)[fluorescente|pastello|spento|anticato]|stropicciato|impiastricciato|piegato|bruciacchiato] di
| come apprendiamo da una ([sapiente|illuminante|preziosa|indecifrabile|profondissima]nota a margine|nota polemica) di
| come ((ritroviamo|scopriamo) [con grande sorpresa|a sorpresa|leggendo al contrario|capovolgendo la pagina]in) una nota polemica di
| -come scopriamo aprendo [con un colpo secco| senza esitazioni| con timore religioso|
	col (taglierino|fermacarte|righello|lapis|coltellino(da caccia|svizzero|multiuso[rubato]))|
	coi denti | (col pollice[tremante]|"con l'indice"|"con l'anulare"|col dito medio|col mignolo["in s&ugrave"])[tenuto (ben fermo|dritto|rigido)]]	una pagina intonsa di
| -come possiamo (intravvedere|intuire|indovinare|scoprire|avere l'impressione di vedere|vedere e non vedere) sovrapponendo [a croce[celtica|bizantina|inversa|capovolta]|a rosone[capovolto|frattale]|a (1|2|3|4|5|6|7|8|9)^[1|2|3|4|5|6|7|8|9] ^"&deg"]( (due|tre|quattro|alcune|gli orli delle) pagine [pari|dispari|con numero primo]) di
)

(Filosofo.Nome
	[
		++(

			(nella sua opera|in|(nel suo|nello) scritto|(nel suo|nel) [magnifico|superlativo|seminale|potentissimo|cardinale|lucidissimo](libro|volume|compendio|saggio|documento|tomo))

			|

			(( "all'inizio" | "circa a met&agrave" | "nell'esergo"	| (nella|"nell'illuminante") prefazione [autografa] | a due terzi | in un punto qualsiasi | (ribadito|ripetuto) ["pi&ugrave" volte|ossessivamente|ripetutamente|diffusamente] nelle (note|pagine|citazioni bibliografiche|righe piccole)

			a ((due|tre)(quarti)|(due|tre|quatro)(quinti)|(due|tre|quattro|cinque)(sesti)) |

			verso la fine | a un certo punto | in un passo | nelle battute iniziali | nel [gran|travogente|potentissimo] finale | in un punto che non ricordo "pi&ugrave" | [da qualche parte] nelle note ) di)


		)

	 "&ldquo;" ^Filosofo.Opera^ "&rdquo;"
	] ^","
).(1|2|3|4|5|6|7|8|9|10|11|12|13|14)
);


Contesto ::= (
	Ogg ::=
			Sost:		(	F: (Sost.la | Sost.l) | M: (Sost.il | Sost.l | Sost.lo)) |
			In: 		(	F: ((Prep Sost).la | (Prep Sost).l) | M: ((Prep Sost).il | (Prep Sost).l | (Prep Sost).lo)) |
			ArtDet: (	F: ((Prep Sost).la | (Prep Sost).l) | M: ((Prep Sost).il | (Prep Sost).l | (Prep Sost).lo))
	;

	Sost ::= 	F: (la: SostFLa | l: SostFL) |
						M: (il: SostMIl| l: SostML | lo: SostMLo)
	;

	SostFLa ::= (scena|veduta|zona|vista|panoramica|trama|tessitura|situazione|posizione|condizione|veduta);
	SostFL ::= (area|arena);
	SostMIl ::= (contesto|luogo|panorama|paesaggio|mondo);
	SostML ::= (ambito|ambiente|aspetto|evento|intreccio|orizzonte);
	SostMLo ::= (scenario|schema);

	Prep ::=
	(	In: (		F: (la: nella | l: nell'^) |
						M: (il: nel | l: nell'^ | lo: nello)
				) |


	ArtDet: ( F: (la: la | l: l'^) |
						M: (il: il | l: l'^ | lo: lo)
				)
	)


	;

Ogg

)
;

PredContesto ::= (
	Avv ::= ((incredibil|enorme|supefacente|vasta|trascendental|immanente|precipua|mera|squisita)^mente)
	;

	Agg ::= ( (estes|vast|compless|intricat|aggressiv|mappat|esplorat|ignot|frastagliat|sfaccettat|poliedric|discuss|contestat|denunciat|allucinat|analizzat|centellinat|scarnificat|tartassat|proletarizzat)

			|

			ParticipioPassat

			)

			^(M: o | F: a)
	;

	( [Avv] Agg | Avv ParticipioPresenteSing | ParticipioPresenteSing )


)
;




(*************************************)
(************* GLOBALI ***************)
(*************************************)





AggettivoFantasioso ::=
Prefisso.(Light|Hard)^ RimaConAzion^ista
;

Prefisso ::= (
	X ::= ((filo|neo|post|multi|ultra|iper|anti|pluri|eso|--idro|logo|-tele|-semi|---bio|----cyber)
	^ "&#8209;"^);
		Light: X
	| Mid: X (++ X | _)
	| Hard: X (++ X | _) [(X)+]
	| Extreme: X X X (X)+
)
;

RimaConIstiche ::= RimaConIst^iche ;

RimaConIst ::= (abiogenet|abolizion|abrogazion|accadem|accessor|aclass|affar|african|agon|algoritm|alien|allarm|allegor|ambiental|american|anabatt|anagramm|anal|anatom|aneddot|anestes|angl|anim|annession|antagon|antiabrogazion|anticomun|anticonform|antidivorz|antifasc|antifemmin|antimilitar|antimperial|antiproibizion|antirazz|antischiav|antisocial|antivivisezion|apolog|apprend|arab|arald|arca|archiv|argan|armonic|armon|arriv|assente|assertiv|assenzial|associazion|assolut|assunzion|astension|astratt|ate|atlant|atom|attend|attes|attic|attiv|attrezz|attribuzion|attual|autolesion|autonom|avanguard|aventin|averro|avvenir|avvent|avventur|aziendal|azion|bal|ballat|ball|bancarell|bancherell|banch|bancon|band|baraccon|bar|barzellett|bas|bat|batter|battip|batt|bellav|bellic|beneficial|benestar|beton|biancher|biblioteconom|bibl|bidon|bilanc|biometr|bioterror|bizantin|blason|bonapart|borsaner|bors|bozzett|brigat|brum|budd|buffon|cabal|cabin|cacofon|call|calvin|camb|camorr|campanil|campegg|campionar|camp|cano|canon|canzonett|capital|carat|caricatur|carrier|cartellon|carton|casell|cas|castr|catalogh|catastrof|catech|cent|centr|ceram|cest|chitarr|ciacch|cicl|ciclocross|ciclomotor|ciclop|cinquecent|civil|clacch|classic|class|cognitiv|collaborazion|collettiv|colonial|color|colpevol|comptometr|comput|comun|conclav|conform|confusion|congregazion|congress|conservazion|contenut|controriform|convegn|convenzional|corporativ|corrent|cors|corsiv|cosmet|costituzional|cottim|crawl|criminal|crocer|cronach|cronolog|cronometr|darvin|decadent|decambr|defezion|de|determin|deuteragon|deviazion|dialog|diplomat|dirig|disces|disfatt|diurn|division|dizionar|documentar|dopolavor|doppiogioch|dors|dual|duecent|duell|ebraic|ecolog|econom|ecopacif|edicol|editorial|edon|efficent|ego|egot|elit|ellen|elog|elzevir|empir|enal|encicloped|endodont|endur|enigm|epigraf|epigramm|episcopal|equilibr|ern|esclusiv|escursion|esibizion|esenzial|esorc|espansion|esperant|esplosiv|espression|estrem|etimolog|eudemon|eufu|eugen|europe|evangel|evoluzion|fad|falang|fallimentar|fantas|fasciocomun|fasc|fatal|fattur|favol|federal|femmin|fetic|fide|figurin|filatel|filocomun|filofasc|final|fiscal|folclor|fondamental|formal|forz|frances|franch|frazion|freddur|frigor|fusion|futur|galen|gapp|garant|gauch|genealog|general|genet|geov|german|gestalt|giansen|gigant|giurisdizional|giur|giustificazion|giustizial|goll|golp|gradual|grafoanal|grammat|grec|iber|iconolog|ideal|ideolog|idrofon|igien|illumin|illusion|immanent|immaterial|immobil|immoral|imperial|impression|imprev|incontr|incunabol|indetermin|indeurope|indian|indipendent|individual|indu|inflazion|infortun|iniziativ|innocent|integral|integrazion|intellettual|interclass|internazional|intervent|intim|intuizion|iperreal|iran|iron|irrazional|irredent|islam|isolazion|ispan|ruttiv|italian|laborator|labur|laic|lass|latin|leal|legal|legh|legittim|lenin|lettur|libell|liber|liberoscamb|librett|liceal|lingu|liturg|lobb|loggion|logg|logic|ludd|lumin|maccart|macchiett|manier|manual|manzon|mao|marcon|marginal|marin|marx|maschil|masch|masoch|massimal|material|matrimonial|meccanic|medagl|medieval|memorial|menefregh|mercantil|meridional|metapsich|metod|microscop|militar|millenar|mineral|mineralog|miniatur|minimal|miracol|mitolog|modell|modern|mod|monetar|mon|monogramm|monologh|monopol|monote|montan|moral|morfolog|mosaic|mottett|municipal|mutazion|narcis|narcoterror|natural|naturamort|nazifasc|nazional|nazionalsocial|naz|necrolog|nepot|nettun|neutral|nichil|nominal|nonconform|nord|normal|novecent|nozion|nuclear|obbligazion|occidental|occult|offensiv|oggettiv|oligopol|oltranz|onan|ontolog|opera|opinion|opportun|oriental|ornat|oscurant|ostacol|ostruzion|ottim|ottocent|pacif|paes|paleocapital|panciafich|panegir|panflett|pangerman|panslav|pante|papirolog|pap|parlamentar|parod|particolar|passat|passion|paternal|pedagog|penal|perben|perfezion|periodic|peron|personal|pessim|petrarch|piazz|pidu|piet|p|plural|pluriprimat|pluton|polem|pol|polite|populazion|popul|positiv|possibil|pragmat|pranoterap|preambol|precett|presenzial|pressapoch|preuman|preventiv|primat|priscillian|privat|probabil|procedur|processual|profession|progett|programm|progress|proibizion|proiezion|propagand|prospettiv|protes|protezion|protocoll|psicanal|psicoanal|psicolog|psicomotric|psicopedagog|psicosomat|psicoterap|pubblic|pur|qualunqu|quaresimal|quattrocent|quiet|rabbin|rapsod|rateal|razional|razz|real|reclam|redentor|reduc|regional|relativ|resin|resocont|revansc|revision|revival|rialz|ribass|ribell|riduzion|riform|rigor|riserv|risorgiment|ritard|ritual|rivestiment|rotativ|rubric|rusp|sacr|sadomasoch|sagg|salutar|sanfed|sanscit|sanscrit|sansepolcr|sanzion|satan|scacch|scaf|scamb|scatt|scenar|schedar|schiav|scission|scrittur|secent|secession|segregazion|seigiorn|semiprofession|semplic|sens|sensual|sessantott|sess|sestograd|settecent|settor|silur|simbol|sincret|sindacal|sinerg|singolar|singol|sion|snob|socialcomun|socialfusion|social|sociolingu|sof|soggett|soggettiv|solips|sol|sommergibil|somm|spazial|special|spirit|spiritual|spontane|squadr|stacanov|staffett|stagnazion|stalin|statal|stilliber|stilnov|storic|strag|struttural|sud|suffrag|sunn|surf|surreal|survival|talmud|tangent|tao|tassinom|tecnic|te|telemetr|temporal|terminal|termin|terror|terz|terzomond|tom|totalitar|tradizional|tradunion|trapiant|trascendental|trasfert|trasformazional|trasform|trattat|trattativ|trecent|tredic|trequart|triag|trial|tributar|trincer|trionfal|tripl|tritagon|trite|trotzk|uman|union|unitar|universal|uran|urban|util|utilitar|utop|vacu|vatican|vedut|ventral|ver|verricell|versiliber|vertic|vetrin|visag|virginal|vital|vittim|vocabolar|zar|zoolog)

		^ist
;

ParticipioPresenteSing ::=
RimaConAzionRadice^ante
;

ParticipioPresentePlur ::=
RimaConAzionRadice^anti
;


ParticipioPassat ::=
RimaConAzionRadice^at
;

RimaConAzion ::=
RimaConAzionRadice^azion
;

RimaConAzionRadice ::= (abbrevi|abdic|aberr|abilit|abl|abneg|abrog|accentu|accett|acclam|acclimat|accomod|accultur|accumul|acetific|acidific|acutizz|adegu|ador|adul|adulter|aer|affett|affili|affranc|agevol|aggettiv|agglomer|agglutin|aggreg|agit|alfabetizz|alien|aliment|alleg|allitter|alloc|allucin|alter|ambient|americanizz|amministr|ammir|ammonizz|amplific|amput|angol|anim|annichil|annot|annunci|anticip|antisofistic|antropizz|appell|applic|approb|appropri|approssim|approv|archivi|are|argoment|armonizz|aromatizz|arrog|articol|aspir|asport|assegn|assicur|assimil|assiomatizz|associ|assolutizz|assuef|astr|atomizz|atrofizz|attenu|attest|attiv|attr|attualizz|attu|autentic|autocertific|autocit|autocommiser|autoconserv|autocontempl|autoconvoc|autocorrel|autodetermin|autodissemin|autoeccit|autoeduc|autofecond|autoflagell|autoformatt|autoimmunizz|autoimpollin|autointossic|autoliquid|automatizz|autom|automedic|automutil|autooscill|autoregolament|autoresponsabilizz|autoripar|autorizz|autost|autotass|autovalut|avoc|aziendalizz|balcanizz|balne|banalizz|beatific|biforc|biloc|bipolarizz|birifr|bonific|bufferizz|burocratizz|calcin|calibr|canalizz|cancell|canonizz|capitalizz|capitol|caratterizz|carbonizz|carbur|carcer|cardiodilat|caseific|castr|catalizz|catalog|categorizz|cavill|cavit|cefalizz|celebr|cement|centralizz|centrifug|certific|cess|cheratinizz|chiarific|chilific|chimific|cicatrizz|circol|circumnavig|cit|civilizz|classific|climatizz|clon|cloroformizz|coabit|coagul|co|codific|cogener|coibent|collabor|coll|collettivizz|collim|colloc|collutt|colonizz|color|coltiv|combin|commemor|commend|commercializz|commin|commiser|commisur|commut|compar|compartecip|compatt|compenetr|compens|compil|complic|comput|comunic|concaten|concentr|concert|concili|concit|concretizz|condens|confabul|confeder|configur|conflagr|conform|confut|conglob|conglomer|congreg|coni|coniug|connot|consacr|conserv|consider|consoci|consol|consolid|constat|consult|consum|contabilizz|contamin|contempl|contest|continu|contraff|contr|controdichiar|controindic|controprest|convalid|convers|convoc|cooper|coordin|copul|coron|corpor|correl|corrobor|cosonantizz|cospir|costell|costern|craterizz|cre|crem|crepit|criminalizz|crioconserv|cristallizz|cronicizz|culmin|cumul|dann|dat|dealloc|debilit|decaffeinizz|decalcific|decant|decapit|decarbur|deceler|decentralizz|decifr|decim|declam|declin|decodific|decoll|decolonizz|decolor|decongel|decontamin|decontestualizz|decontr|decor|decret|decritt|decurt|dedic|defalc|defec|defenestr|defibrill|deflagr|defl|deflor|defogli|deform|deframment|defraud|degener|degrad|degust|deidrat|deific|del|deleg|delegittim|delib|deliber|deline|delocalizz|delucid|demarc|demilitarizz|demistific|demitizz|democratizz|demodul|demoltiplic|demonizz|demoralizz|denalizz|denigr|denomin|denot|denud|depauper|depenalizz|depil|deplor|depolarizz|depolimerizz|deport|deprav|deprec|depred|depriv|depur|deput|dequalific|deregolament|deriv|derog|deruralizz|desegreg|desertific|design|desol|destabilizz|destalinizz|destin|destruttur|deterior|determin|detest|detr|detronizz|deturp|devalut|devast|devi|devitalizz|dichiar|diffam|differenzi|diffr|digitalizz|digit|digrad|dilacer|dilapid|dilat|dil|dimostr|diram|disabilit|disaggreg|disapplic|disapprov|disarticol|disassuef|disattiv|discrimin|diseduc|disequ|disered|disgreg|disinfest|disinform|disintegr|disintossic|disloc|disoccup|disorganizz|disper|disput|dissacr|dissal|dissec|dissecc|dissemin|dissert|dissimil|dissimul|dissip|dissmul|dissoci|distill|distr|dittong|divag|divaric|diversific|divin|divinizz|divulg|document|dolomitizz|domestic|domific|domin|don|dot|drammatizz|duplic|eburne|eccit|edific|educ|edulcor|effettu|effr|elabor|elenc|elettrific|elettrizz|elev|elimin|ellenizz|elucubr|eman|emancip|emargin|emascul|emend|emigr|emul|enfatizz|enucle|enumer|enunci|epur|equalizz|equ|equipar|eradic|erborizz|erog|erotizz|erutt|esacerb|esager|esagit|esal|esalt|esar|esasper|esautor|es|escav|esclam|esclaustr|escogit|escori|esecr|esemplific|esercit|esfoli|esit|esond|esorcizz|esort|espettor|espiant|espi|espir|esplet|esplic|esplicit|esplor|esport|espropri|espugn|espurg|essicc|essud|estenu|esterific|esteriorizz|estern|estim|estirp|estiv|estrani|estrapol|estr|estremizz|estrinsec|esulcer|esum|eterific|eterizz|europeizz|eutrofizz|evacu|evangelizz|evapor|evir|eviscer|evoc|fabbric|fabul|facilit|falsific|farnetic|fascin|fascistizz|fattorizz|fattur|f|fecond|feder|felicit|ferment|fertilizz|fertirrig|fessur|fibr|fibrill|figur|fili|filtr|finalizz|fiscalizz|fiss|flagell|floccul|flott|fluidific|fluit|fluorizz|fluttu|focalizz|fogli|folgor|foment|fond|fonematizz|fonoregistr|forest|formalizz|formatt|form|formul|fornic|fortific|fossilizz|framment|francesizz|frantum|fraternizz|fr|frequent|frigoconserv|frustr|fruttific|fulmin|fumig|fustig|galvanizz|gambizz|gelatinizz|gelific|gemin|gemm|generalizz|gener|geometrizz|gerarchizz|germanizz|germin|germogli|gessific|gest|gesticol|gettosostent|ghettizz|gir|giubil|giugul|giustific|glaci|globalizz|glorific|grad|gradu|granul|grass|gratific|gravit|gutt|ibern|ibrid|idealizz|ide|identific|ideologizz|idrat|idrogen|ignifug|ill|illumin|illustr|imbalsam|imit|immagin|immatricol|immedesim|immigr|immobilizz|immol|immunizz|impagin|imperfor|impermeabilizz|impersonific|impiegatizz|implement|implic|implor|impollin|impolver|import|impost|imprec|impregn|impremedit|imprepar|improvvis|impugn|imput|inabilit|inal|inalve|inaugur|in|incant|incarcer|incardin|incarn|incentiv|inchiostr|inciner|incit|inclin|inconsider|incoordin|incoron|incorpor|incrimin|incrost|incub|incultur|indent|indetermin|indic|indicizz|indign|individualizz|individu|industrializz|ineduc|infatu|infest|infeud|infiamm|infibul|infiltr|infior|infl|informatizz|inform|infr|ingegnerizz|inizializz|inizi|innerv|innov|inoccup|inocul|inond|inquart|insaliv|insatur|insemin|insinu|insoddisf|insol|insonorizz|inspir|install|instaur|instill|insubordin|insuffl|intavol|integr|intellettualizz|intensific|inter|intercal|intercett|intercomunic|interin|interiorizz|interline|intermedi|internalizz|interpol|interpret|interrel|interrog|intersec|intest|intim|intimid|intitol|inton|intossic|intradermore|intronizz|intub|inuman|inum|invagin|invalid|inventari|investig|invoc|ionzz|iperaliment|ipersostent|iperventil|ipoaliment|ipostatizz|irradi|irreggiment|irrig|irrit|irrog|irror|islamizz|isomerizz|ispir|istanzi|istig|istill|istituzionalizz|italianizz|iter|labializz|lacer|lacrim|laicizz|lall|lament|lamin|lapid|lateralizz|laterizz|latinizz|latt|lavor|legalizz|leg|legisl|legittim|lemmatizz|levig|levit|lib|liberalizz|liber|libr|licit|lievit|lignific|limit|liofilizz|liqu|liquef|liquid|liscivi|livell|localizz|loc|lottizz|lubrific|lun|luppolizz|luss|lustr|lut|macchin|macell|macer|macin|maggior|magnetizz|magnific|maleduc|malform|malvers|manifest|manipol|marginalizz|marmorizz|marn|massific|massimizz|masterizz|mastic|masturb|matematizz|materializz|matricol|matt|matur|meccanizz|medi|medicalizz|medic|medit|memorizz|menom|mercerizz|mercific|meridionalizz|mescol|mestru|metall|metallizz|metamerizz|metanizz|metil|micromanipol|microminiaturizz|micron|micronizz|microprogramm|migr|militarizz|mimetizz|mineralizz|miniaturizz|minimizz|minor|miscel|mistific|misur|miticizz|mitig|mitizz|mitridatizz|mobilit|mobilizz|modell|modellizz|moder|modernizz|modific|modul|moltiplic|monac|mondializz|monet|monetizz|monopolizz|monoprogramm|monor|monorifr|monottong|monumentalizz|moralizz|mormor|mortific|mostrific|motiv|motorizz|mototr|moviment|multipl|multiprogramm|mummific|municipalizz|mut|mutil|narr|naturalizz|navig|nalizz|n|nebulizz|neg|negozi|neoform|neutralizz|nidific|nitrat|nitr|nitrific|nitros|nitrur|nittit|niv|nobilit|nominalizz|normalizz|norm|normodot|not|notific|nov|nuclearizz|numer|nun|nuncup|nut|nutric|obbiettiv|obblig|obiettiv|obl|obliter|obnubil|obsecr|occidentalizz|occult|occup|oggettiv|omin|omogeneizz|omolog|ondul|opacizz|opalinizz|oper|oppugn|or|orchestr|ordin|organic|organizz|orientalizz|orient|orin|ornament|orripil|oscill|oscit|oscul|oscur|ospedalizz|osserv|ossid|ossific|ossigen|ostent|ostin|ottim|ottimizz|ottur|ovalizz|ov|ovul|ozonizz|pacchettizz|pacific|paganizz|palatalizz|palatizz|palific|pallettizz|palp|palpit|pandicul|panific|parallelizz|parametr|parametrizz|parcell|parcellizz|parific|parlamentarizz|partecip|particolarizz|parzializz|passiv|pastific|pastorizz|pauperizz|paviment|pedonalizz|pedonizz|pellettizz|penalizz|penetr|peptizz|peptonizz|percentualizz|percol|peregrin|perequ|perfor|perfriger|perlustr|permut|peror|perpetr|perpetu|personalizz|personific|perspir|perturb|pianific|piantum|picchett|pietrific|pigment|pirogen|placent|placit|plastific|polarizz|policondens|poligon|polimerizz|politicizz|pollin|polverizz|ponder|popol|porfirizz|postalizz|post|postdat|posterg|postf|posticip|postul|potabilizz|precett|precipit|precis|precompil|preconizz|pred|predestin|predetermin|predic|predimostr|predomin|prefabbric|pref|prefigur|preflor|prefogli|preform|pregust|prel|premedit|prememorizz|premi|prenot|preoccup|preordin|preospedalizz|prepar|prerefriger|present|preserv|pressurizz|prest|prestidigit|prevaric|preventiv|privatizz|priv|proceduralizz|proclam|procrastin|procre|procur|profan|professionalizz|progett|programm|prol|proletarizz|prolifer|prolific|prolung|proman|promulg|pron|pronunci|propag|propaggin|propizi|prostern|prostr|protr|provincializz|provoc|psichiatrizz|psicosomatizz|pubblic|pubblicizz|pullul|puls|punt|puntualizz|purg|purific|putref|quadruplic|qualific|quantific|quantizz|quart|quot|raccomand|racemizz|radarlocalizz|radarnavig|radi|radicalizz|radic|radioattiv|radiocomunic|radioconvers|radioeman|radiolocalizz|radionavig|radiopropag|radioscintill|radiost|raffigur|raffin|ramific|randomizz|rappacific|rappresent|raref|rassegn|rassicur|rastrem|rate|rateizz|ratific|raziocin|ralizz|r|realizz|re|reciproc|recit|reclamizz|recrimin|red|reduplic|refl|refriger|regim|regionalizz|registr|regolament|regolarizz|regol|reidrat|reific|reimpost|reincarn|reinizializz|reintegr|reinterpret|reiter|relativizz|rel|releg|remuner|renderizz|replic|rept|reput|resin|resinific|respir|responsabilizz|restaur|reticol|retr|retro|retrodat|retroform|retrograd|retroillumin|retromoder|retromut|rettific|revoc|riabilit|riacutizz|riafferm|rianim|riappropri|riassicur|riattiv|ricalibr|ricanalizz|ricapitol|ricett|ricompil|riconcili|riconsacr|riconsider|riconvoc|ricre|ricus|riedific|rieduc|rielabor|riesport|riesum|rievoc|riferment|rifond|riforest|riform|rifr|rigener|rilavor|rilev|rimastic|rimedit|rimpagin|rimuner|rinegozi|rinnov|rioccup|riordin|riorganizz|ripar|riprecipit|ripresent|ripristin|riprogramm|riprov|ripubblic|riput|riqualific|riscolarizz|risistem|risocializz|ristor|ristruttur|ritratt|ritr|ritualizz|riunific|rivaccin|rivalut|rivascolarizz|rivel|rivendic|riverber|rivisit|rivitalizz|robotizz|rog|romanizz|rot|rottam|roulottizz|rubric|rudiment|rumin|russific|saccarific|salicilizz|salific|saliv|salt|salut|salv|sanforizz|sanific|santific|saponific|satellizz|satur|sburocratizz|scarcer|scarific|scarnific|schedul|schematizz|scintill|sclerotizz|scolarizz|scompagin|scomunic|scomunistizz|sconsacr|sconsol|scristianizz|scrittur|scuoi|sdrammatizz|secolarizz|sediment|segment|segnal|segreg|segret|semplific|senilizz|sens|sensibilizz|separ|sequenzializz|sequestr|serializz|seri|sessualizz|settimanalizz|settorializz|signific|silicatizz|silicizz|sillab|simbolizz|simmetrizz|simul|sincronizz|sindacalizz|sinterizz|sintonizz|sistematizz|sistem|situ|smagnetizz|smaterializz|smilitarizz|smitizz|smobilit|smotorizz|snalizz|sobill|socializz|soddisf|soffoc|sofistic|soggettiv|solarizz|sol|solennizz|solfat|solfit|solfon|solfor|solidific|sollecit|sollev|solmis|solubilizz|solvat|somatizz|somm|somministr|sonorizz|sopport|sopraeccit|sopraff|sopravvalut|sopreccit|sopredific|soprelev|sostent|sottaliment|sottoaliment|sottoassicur|sottoccup|sottofond|sottoinform|sottooccup|sottost|sottotitol|sottoutilizz|sottovalut|sottr|sovietizz|sovraliment|sovraoccup|sovrappopol|sovrautilizz|sovreccit|spall|specializz|speci|specific|specul|sperequ|speriment|spersonalizz|spettacolarizz|spettacol|spieg|spirantizz|spir|spiritualizz|splenocontr|spogli|spoli|spoliticizz|sponsorizz|sporul|sprovincializz|spumantizz|squalific|stabilizz|stabul|stagfl|stagn|stalinizz|standardizz|stassanizz|statalizz|statizz|st|steppific|sterilizz|stigmatizz|stilizz|still|stimol|stipul|storicizz|stratific|strumentalizz|strument|struttur|stupef|subaltern|subdeleg|suberific|suberizz|subinfeud|subirrig|sublim|subloc|subluss|subordin|suborn|sudor|suffrag|suffumic|suggell|superaliment|superclor|superfecond|superfet|supervalut|supin|supplic|suppur|suraliment|surgel|surrog|svalut|svapor|tabell|tabul|tacit|targ|tariff|tass|tavol|teatralizz|tecnicizz|telecomunic|teledocument|teleelabor|telematizz|telemisur|teleprenot|teleregistr|teleregol|telesegnal|tent|teorizz|terebr|tergivers|termin|termocoagul|termoregol|termostabilizz|termoventil|territorializz|terziarizz|tesaurizz|tesorizz|testific|testurizz|tindalizz|tipizz|titol|titub|tonific|torref|totalizz|trabe|tracim|trafor|tramut|transamin|transanim|trans|transcodific|transcultur|transistorizz|transubstanzi|transum|transustanzi|trapan|trapiant|trasfigur|trasform|trasl|traslitter|trasmigr|trasmut|traspir|trasport|trasud|trasuman|tratt|tr|trepid|triangol|tribol|triforc|trimestralizz|triplic|tritur|trivell|trivializz|tropicalizz|tub|tubercolinizz|tubercolizz|tumef|tumul|turb|turisticizz|turn|ubic|ufficializz|ulcer|ultim|ultrafiltr|ultrapastorizz|umanizz|um|umidific|umific|umili|und|unific|uniform|unitizz|universalizz|uperizz|urbanizz|usurp|utilizz|vac|vaccin|vaiolizz|valid|valorizz|valut|vaporizz|vari|vascolarizz|vasodilat|vegetativizz|veget|veicol|velarizz|velocizz|vener|ventil|verbalizz|verbiger|verific|vermicol|vermin|vernalizz|vern|versific|verticalizz|vescic|vess|vetrific|vibr|videoimpagin|videoinform|videoregistr|vidim|vietnamizz|vinific|viol|virg|virilizz|virtualizz|visit|visualizz|vitaminizz|vittimizz|vivific|vocalizz|voc|vocifer|volatilizz|volgarizz|voluminizz|vot|vulcanizz|zonizz)

;


BrocardoImprobabile ::=
Brocardo | ++++++_
;

Brocardo ::= (
Maiusc: "<i>"^ \\BrocardoRadice ^"</i>" |
Minusc: "<i>"^ BrocardoRadice ^"</i>"
);

BrocardoRadice ::= (
  magni minores saepe fures puniunt | fiat iustitia et pereat mundus | felicium omnes sunt cognati | in girum imus nocte et consumimur igni | sapiens fingit fortunam sibi | do ut des | ira brevis furor | duo que maxima putantur onera^"," paupertatem et senectutem | nemo propheta in patria | epistula non erubescit | suffucit diei malatia sua | leges bonae ex malis moribus procreantur | summum ius summa iniura | avarus nisi cum moritur^"," nihil recte facit | de se confesso non creditur super crimine alterius | dignitas delinquentis peccatum auget | pecunia non olet | iudex damnatur ubi nocens absolvitur | vasa inania multum strepunt | quae nocent docent | adducere inconveniens non est solvere argumentum | stultitiam simulare loco prudentia summa est | mihi heri^"," et tibi hodie | silent leges inter arma | in praetoriis leones^"," in castris lepores | ipsa olera olla legit | corruptissima republica plurimae leges | obsequium amicos^"," veritas odium parit | solamen miseris socios habuisse malorum | testi unus testis nullus | nitimur in vetitum semper cupimusque negatum | peras imposuit iuppiter nobi duas | veritas filia temporis | virtute duce^"," comite fortuna | primum vivere^"," deinde philosophari | in magnis et voluisse sat est | fortiter in re^"," suaviter in modo | successus improborum plures allicit | lex est araneae tela | parcere subiectis et debellare superbos | homo homini lupus | leve aes alienum debitorem facit^"," grave inimicum | memento audere semper | in dubiis abstine | fortuna fortes metuit^"," ignavos premit | asinus asinum fricat | timeo hominem unius libri | si vis pacem^"," para bellum | homo sine pecunia^"," immago mortis | mulier recte olet ubi nihil olet | derideri merito potest qui sine virtute vanas excercet minas | nomen est omen | vulgus veritatis pessimus interpres | qui tacet non utique fatetur sed tamen verum est eum non negare | marcet sine adversario virtus | nimium ne crede colori | numquam est fidelis cum potente societas | ad maiora | si tacuisses phiposophus manuisses | tabula rasa | ira furor brevis est | casus belli | rem tene^"," verba sequentur | lis est cum forma magna pudicitiae | bonae fidei non congruit de apicibus iuris disputare | clausulae insolitae indicunt suspicionem | advocatus diaboli | nulla dies sine linea | fidem qui perdit^"," perdere ultra nihil potest | summum ius^"," summa iniuria | divide et impera | nulla poena sine lege | semper avarus eget | audacter calumniare^"," semper aliquid haeret | dissoluta negligentia prope dolum est | deus ex machina | etiam periere ruinae | pons asinorum | impunitas semper ad deteriora invitat | coactus volui | testibus^"," non testimoniis creditur | experimentum crucis | transactio est timor litis | ignis et aquae interdictio | sacrificium intellectus | non aetate verum ingenio apiscitur sapientia | noli me tangere | video meriora proboque^"," deteriora sequor | video meriora proboque^"," deteriora sequor | invenit forte calvus in trivio pectinem | dubium sapientiae initium | dies irae | albo signanda lapillo | more uxorio | exigua his tribuenda fides^"," qui multa loquuntur | datur omnibus | alter ego | volenti non fit iniuria | bonum certamen certavi^"," cursum consummavi^"," fidem servavi | beneficium accipere^"," libertatem est vendere | senectus^"," quam ut adipiscantur omnes optant^"," eandem accusant adepti | quot servi^"," tot hostes | de gustibus non est disputandum | malum est mulier sed necessarium malum | vincere scis^"," hannibal^"," victoria uti nescis | excusatio non petita^"," accusatio manifesta | teres atque rotundus | sol omnibus lucet | ad bestias | ultima ratio regum | in corpore vili | levis est fortuna^";" cito reposcit quod dedit | infidum hominem malo suo esse cordatum | ipse dixit | miserere | fama^"," malum qua non aliud velocius ullum | aquae et ignis interdictio | ita amare oportere^"," ut si aliquando esset osurus | lex est araneae tela | quis custodiet ipsos custodes^"?" | utere temporibus | carpe diem | carpe diem quam minimum credula postero | promoveatur ut amoveatur | hoc opus^"," hic labor est | eripe me his^"," invicte^"," malis | parcere subiectis et debellare superbos | maximo periculo custoditur quod multis placet | festina lente | quod scripsi^"," scripsi | errare umanum est^"," perseverare autem diabolicum | cuivis homini est errare^"," nullius nisi insipientis est perseverare in errore | nemo pro parte testatus pro parte intestatus decedere potest | timeo hominem unius libri | deligere oportet quem velis diligere | in vino veritas | amor et deliciae humani generis | difficile est longum subito deponere amorem | vox populi^"," vox dei | excusatio non petita^"," accusatio manifesta | dum excusare credis^"," accusare | dulce est desipere in loco | nulla dies sine linea | caligat in sole | omne trinum est perfectum | nemo mortalium omnibus horis sapit | miscere sacra profanis | video meliora proboque^","  deteriora sequor | ne supra crepidam sutor iudicaret | fortiter in re^"," suaviter in modo | quatuor abscondi non possunt^":" tussis^"," amor^"," ignis^"," dolor | otium cum dignitate | paterna paternis^"," materna maternis | pretium sceleris | hosti non solum dandam esse viam ad fugiendum^"," sed etiam muniendam | nullus dolor est^"," quem non longinquitas temporis minuat ac molliat | pecca fortier^"," sed fortius fide et gaude in \\christo | somnia ne cures^"," nam mens humana quod optat | iniuria illata iudici videtur ipsi regi illata | nullius boni sine socio iucunda possessio est | desine fata deum flecti sperare precando | quos ego | tardiora sunt rimedia quam mala | donec eris sospes^"," multos numerabis amicos^":" tempora si fuerint nubila^"," solus eris | conscia mens recti famae mendacia  risit | quod tu es ego fui^"," quod ego sum et tu eris | ita di(vi)s est placitum^"," voluptatem ut maeror comes consequator | impossibilium nulla obligatio est | ignoti nulla cupido | boni pastoris esse tondere pecus^"," non deglubere | quid dulcius quam habere^"," quicum omnia audeas sic loqui ut tecum^"?" | estore ergo prudentes sicut serpentes et simplices sicut columbae | lepores duos insequens neutrum capit | posteriores enim cogitationes sapientiores solent esse | si quis non vult operari^"," nec manducet | ira furor brevis est | memento audere semper | stultitia maxime soror est malitiae | pereant amici^"," dum inimici una intercidant | vestigia terrent | ubi tu gaius ego gaia | nunc est bibendum | ama et fac quod vis | non multa sed multum | eheu fugaces^"..." labuntur anni | ubi lex voluit dixit ubi noluit tacuit | leve aes alienum debitorem facit^"," grave inimicum | age^"," si quid^"," agis | inexpertis enim dulcis est pugna | nocte latent mendae | actor debet venire instructior quam reus | crimen silentii | hac lupi hac canes | consummatum est | amor et dominium non patiuntur socium | amicus diu quaeritur^"," vix invenitur^"," difficile servatur | acta exteriora indicant interiora secreta | absolutio ab actione | tertium non datur | aut amat aut odit mulier^":" nil est tertium | credere est cum assensione cogitare | aut amat aut odit mulier^":" nil est tertium | ille terrarum mihi praeter omnes angulus ridet | leonina societas | solve et repete | in medio stat virtus | barba non facit philosophum | longe fugit quisquis suos fugit | incohatio delicti | quod sine die debetur^"," statim debetur | bellum punitivum | exigua est virtus praestare silentia rebus^"," at contra gravis est culpa tacenda loqui | fides scripturae est indivisibilis | stulta credulitas | ubi leonis pellis deficit^"," vulpina induenda est | paete^"," non dolet | excusatio non petita^"," accusatio manifesta | levis est fortuna^";" cito reposcit quod dedit | nec vi^"," nec clam^"," nec precario | parvulae serpentes non nocent | militia est vita hominis super terram | aut regem aut fatuum nasci oportere | sint ut sunt aut non sint | ante litteram | non sunt nova veteribus substituenda^"," sed perpetuo iungenda foedere | legis virtus est imperare^"," vetare^"," permittere^"," punire | aquila non captat muscas | cum sunt partium iura obscura reo favendum est potius quam actori | dorsus totus prurit | domina omnium et regina ratio | nolite mittere margaritas ante porcos | sat cito si sat bene | oderint dum metuant | concordia parvae crescunt^"," discordia maximae dilabuntur | nihil est in intellectu quod non fuerit prius in sensu | in claris non fit iterpretatio | ad impossibilia nemo tenetur | de minimis non curat praetor | est modus in rebus | ubi rem meam invenio^"," ibi vindico | nemo beneficia in calendario scribit | nemo plus iuris in alium trasferre potest quam ipse habet | qui non habet in aere^"," luat in corpore | errantibus^"," non dormientibus^"," iura succurrunt | loqui qui nescit discat aliquando reticere | in dubiis abstine | rem tene^"," verba sequentur | aliquam reperitis rimam | dubitando ad veritatem pervenimus | in utroque iure | sine pennis volare haud facile est | sua enim cuique prudentia deus est | si vitam inspicias hominum | mutuum muli scabunt | hoc volo^"," sic iubeo^";" sit pro ratione voluntas | si parva licet componere magnis | cessat | timeo danaos^"," et dona ferentes | etiam capillus unus umbram suam | rideo advocatum qui patrono egeat | esse eum omnium horarum | summus ius^"," summa iniuria | ridentem decere verum^"," quid vetat^"?" | odium generis humani | timeo hominem unius libri | omnia munda mundis | si vir es | obsequium amicos^"," veritas odium parit | minus habens | hic manebimus optime | semel in anno lecit insanire | non expedit | nec aures me credo habere nec tango | qui in iure suo utitur naeminem laedit | obtorto collo | ita amare oportere^"," ut si aliquando esset osurus | nemo mortalium omnibus horis sapit | res est solliciti plena timoris amor | nihil de principe^"," parum de deo | iucundum nihil agere | stultorum incurata pudor malus ulcera celat | affectio maritalis | parva sed apta mihi | do ut des | vana est sine viribus ira | superflua non nocent | maiora premunt | lucri bonus est odor ex re qualibet | accessit huic patellae dignum operculum | boni iudicis est lites dirimere | aura seminalis | fortuna fortes metuit^"," ignavos premit | prior in tempore^"," potior in iure | estote ergo prudentes sicut serpentes et simplices sicut columbae | leges bonae ex malis moribus procreantur | neque imbellem feroces rogenerant aquilae columbam
);


(*****************************

Note

	*** Caratteri speciali ***
	Non si possono inserire direttamente ma vanno sostituite dal codice ASCII così precedute da carattere di escape backslash \ e tra virgolette quando indicato:
	à = "&agrave"
	è = "&egrave"
	é = "&eacute"
	ò = "&ograve"
	ì = "&igrave"
	ù = "&ugrave"
	- = "&ndash"
	° = "&deg"
	backslash \ = \\
  virgolette " = \"
	a capo = \n
	return = \r
	backspace = \b
	tab = \t

	trattino d'unione html = "&#8209;"

	es.
	S ::= "La mela &eacute sul tavolo";

	manuale polygen: http://goo.gl/5zL1GZ
	tabella caratteri ASCII: http://goo.gl/Ktkm2a

	*** ESEMPIO FRASE SEMPLICE ***
	S ::= (\Frase ^".");

***********************************)






      `