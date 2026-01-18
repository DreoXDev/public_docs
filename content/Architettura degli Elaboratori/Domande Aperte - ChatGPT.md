#### Funzionamento di componenti
 Si descriva il funzionamento del componente **X** della catena programmativa, chiarendo quali siano gli ingressi di questo componente e quali le uscite prodotte. Si richiede anche di specificare da chi vengano predisposti gli ingressi ed in quale momento questa predisposizione abbia luogo.
**X = "compilatore/assemblatore/linker/loader/debugger"**

| Componente       | Ingresso principale            | Uscita                             | Chi predispone ingressi          | Momento                 |
| ---------------- | ------------------------------ | ---------------------------------- | -------------------------------- | ----------------------- |
| **Compilatore**  | Codice sorgente                | File oggetto                       | Programmatore                    | Prima dell’assemblaggio |
| **Assemblatore** | Codice assembly                | File oggetto                       | Compilatore / Programmatore      | Dopo la compilazione    |
| **Linker**       | File oggetto + librerie        | File eseguibile                    | Sistema di build / Programmatore | Dopo l’assemblaggio     |
| **Loader**       | File eseguibile                | Programma in memoria               | Sistema operativo                | All’esecuzione          |
| **Debugger**     | Programma con simboli di debug | Stato e tracciamento del programma | Programmatore / Tester           | Durante l’esecuzione    |
**Funzionamento**
- *Compilatore:* Il compilatore traduce un programma sorgente scritto in un linguaggio ad alto livello (es. C, Java) in linguaggio assembly o in codice oggetto (macchina). 
- *Assemblatore:* L’assemblatore traduce il codice assembly (testuale e mnemonico) in linguaggio macchina binario, cioè in un formato eseguibile dal processore.
- *Linker:* Il linker collega tra loro diversi file oggetto e librerie, risolvendo i riferimenti simbolici (funzioni o variabili definite in altri moduli) e producendo un unico programma eseguibile.
- *Loader:* Il loader si occupa di caricare il programma eseguibile in memoria principale, predisponendo lo spazio per il codice, i dati, lo stack, e risolvendo eventuali collegamenti dinamici (librerie condivise).  Infine, trasferisce il controllo al punto d’ingresso del programma (es. `main`).
- *Debugger:* Il debugger consente di controllare e analizzare l’esecuzione di un programma passo passo, permettendo di individuare errori logici o di esecuzione. Può inserire breakpoints, ispezionare variabili, visualizzare registri e tracciare il flusso di esecuzione.

#### Catena Programmativa
La **catena programmativa** è l’insieme dei componenti software che permettono di trasformare un programma scritto in un **linguaggio ad alto livello** in un **programma eseguibile** dalla macchina.

I principali componenti della catena programmativa sono:
- **Editor**  
  È lo strumento con cui il programmatore scrive il codice sorgente. Non esegue controlli semantici o sintattici approfonditi, ma consente la creazione e modifica dei file di testo contenenti il programma.
- **Compilatore**  
  Traduce il programma sorgente in un linguaggio di livello più basso (tipicamente **assembly** o **codice oggetto**). Durante questa fase vengono effettuati controlli sintattici e semantici e possono essere applicate ottimizzazioni.
- **Assembler**  
  Converte il codice assembly in **codice macchina**, producendo file oggetto che contengono istruzioni direttamente eseguibili dal processore, ma non ancora collegate tra loro.
- **Linker**  
  Collega uno o più file oggetto e le eventuali librerie, risolvendo i riferimenti esterni e generando il **programma eseguibile** finale.
- **Loader**  
  Carica il programma eseguibile in memoria principale, inizializza le strutture necessarie all’esecuzione e avvia il programma trasferendo il controllo alla CPU.

#### Register file e lettura simultanea
Il **register file** è progettato per fornire in uscita il contenuto di **due registri contemporaneamente** perché l’unità di elaborazione deve poter eseguire, nella maggior parte delle istruzioni, **operazioni tra due operandi** nello stesso ciclo di clock.
In particolare, molte istruzioni aritmetico-logiche richiedono la lettura simultanea di **due registri sorgente** (ad esempio per somma, confronto o operazioni logiche). Per evitare di introdurre cicli di clock aggiuntivi, il register file dispone di **due porte di lettura indipendenti**, che permettono di accedere in parallelo ai valori dei registri richiesti.
Questa scelta architetturale aumenta le **prestazioni del processore**, riducendo il numero di cicli necessari per l’esecuzione delle istruzioni e consentendo un flusso di dati efficiente verso l’ALU.

#### Full-adder: ingressi e uscite
Il **full-adder** è un circuito combinatorio utilizzato per sommare **tre bit** e produrre come risultato un bit di somma e un bit di riporto.
Gli **ingressi** del full-adder sono:
- due bit operando, indicati solitamente come **A** e **B**
- un bit di **riporto in ingresso** (*carry-in*, **Cin**), proveniente dalla somma della cifra meno significativa
Le **uscite** del full-adder sono:
- il bit di **somma** (**S**), che rappresenta il risultato della somma dei tre ingressi
- il bit di **riporto in uscita** (*carry-out*, **Cout**), che viene propagato al full-adder successivo
Il full-adder è quindi il blocco fondamentale per la realizzazione di **sommatori multi-bit**, ottenuti concatenando più full-adder in cascata.

#### Macchine combinatorie e sequenziali
Una **macchina combinatoria** è un circuito logico in cui le **uscite dipendono esclusivamente dagli ingressi correnti**. Non è presente memoria dello stato precedente e, fissati gli ingressi, le uscite sono determinate in modo univoco e immediato.
Una **macchina sequenziale**, invece, è un circuito logico in cui le **uscite dipendono sia dagli ingressi correnti sia dallo stato interno** della macchina, che rappresenta l’informazione memorizzata sul passato. Lo stato viene mantenuto tramite elementi di memoria, come **latch** o **flip-flop**, ed è in genere aggiornato in corrispondenza del **clock**.
La differenza fondamentale è quindi la **presenza della memoria**: assente nelle macchine combinatorie, indispensabile nelle macchine sequenziali, che permettono di realizzare sistemi dipendenti dall’evoluzione temporale degli ingressi.

#### Archi nel formalismo grafico delle macchine a stati finiti
Nel formalismo grafico delle **macchine a stati finiti**, gli **archi del grafo** rappresentano le **transizioni di stato** della macchina.
Ogni arco collega uno **stato sorgente** a uno **stato di destinazione** e indica il passaggio da uno stato all’altro al verificarsi di una determinata **condizione sugli ingressi**. Sugli archi sono in genere riportate le **etichette** che specificano il valore degli ingressi che attivano la transizione e, a seconda del modello adottato (Moore o Mealy), anche il valore delle **uscite** associate alla transizione.
Gli archi descrivono quindi il **comportamento dinamico** della macchina, ossia come essa evolve nel tempo in funzione degli ingressi.

#### Program Counter (PC)
Il **Program Counter (PC)** è un registro della CPU che contiene l’**indirizzo della prossima istruzione** da prelevare ed eseguire dalla memoria.
Durante il normale flusso di esecuzione, il contenuto del PC viene **incrementato automaticamente** dopo il prelievo di un’istruzione, così da puntare all’istruzione successiva. In presenza di istruzioni di **salto**, **branch** o **chiamata di funzione**, il PC viene invece caricato con un nuovo valore, che modifica la sequenza di esecuzione del programma.
Il Program Counter svolge quindi un ruolo fondamentale nel **controllo del flusso di esecuzione** delle istruzioni all’interno del processore.

#### Instruction Register (IR)
L’**Instruction Register (IR)** è un registro della CPU che contiene l’**istruzione attualmente prelevata dalla memoria** e in fase di esecuzione.
Dopo la fase di **fetch**, l’istruzione letta dalla memoria viene caricata nell’IR, dove rimane per tutta la durata delle fasi successive di **decodifica** ed **esecuzione**. In questo modo, i campi dell’istruzione (opcode, registri, indirizzi) possono essere analizzati dall’unità di controllo e utilizzati per generare i segnali di controllo necessari.
La funzione dell’Instruction Register è quindi quella di **mantenere stabile l’istruzione corrente** durante il suo processamento all’interno della CPU.

#### Codice operativo (opcode)
Il **codice operativo** (*opcode*) è il sottoinsieme dei bit di un’istruzione macchina che **identifica l’operazione da eseguire** da parte della CPU.
In base al valore dell’opcode, l’**unità di controllo** riconosce il tipo di istruzione (ad esempio aritmetica, logica, di salto, di accesso alla memoria) e genera i **segnali di controllo** necessari per attivare correttamente i vari componenti del datapath, come ALU, registri e memoria.
Il codice operativo determina quindi **il comportamento dell’istruzione**, mentre gli altri campi dell’istruzione specificano gli **operandi** o le modalità di indirizzamento.

#### Relazioni tra formati R e J delle istruzioni MIPS e aspetti chiave dell’architettura
Nell’architettura **MIPS**, i formati delle istruzioni riflettono precise scelte architetturali.
Il **formato R** è utilizzato per le istruzioni che operano sui registri. In questo formato sono presenti campi dedicati all’indicazione dei registri sorgente e di destinazione (rs, rt, rd), ciascuno codificato su **5 bit**. Questo implica che l’architettura MIPS mette a disposizione **32 registri generali** accessibili al programmatore, poiché con 5 bit è possibile rappresentare \(2^5 = 32\) registri distinti.
Il **formato J**, invece, è utilizzato per le istruzioni di salto incondizionato. Esso contiene un campo indirizzo di **26 bit**, che non rappresenta direttamente un indirizzo completo, ma viene combinato con i bit più significativi del **Program Counter** per formare l’indirizzo di destinazione. Questa codifica consente di raggiungere una **finestra di salto di 2²⁸ byte** (pari a 256 MB), grazie all’allineamento a parola delle istruzioni.
In sintesi, il formato R determina il **numero di registri accessibili**, mentre il formato J determina la **dimensione della finestra di indirizzi** raggiungibile con un salto incondizionato.

#### Lunghezza delle istruzioni e dimensione dei registri in MIPS
Nell’architettura **MIPS** la lunghezza delle istruzioni (32 bit) coincide con la dimensione dei **registri general purpose** (32 bit), ma questa condizione **non è strettamente necessaria** dal punto di vista teorico.
Il principale **vantaggio** di questa scelta è la **semplicità del datapath e dell’unità di controllo**: istruzioni di lunghezza fissa facilitano il fetch, la decodifica e l’allineamento in memoria, mentre registri della stessa dimensione delle istruzioni semplificano il trasferimento dei dati all’interno della CPU. Inoltre, la corrispondenza tra dimensioni rende l’architettura più regolare e facilmente pipelineizzabile.
Modificare questa condizione può avere sia vantaggi sia svantaggi. Utilizzare istruzioni più corte ridurrebbe lo spazio occupato in memoria e potrebbe migliorare l’efficienza della cache, ma limiterebbe il numero di campi disponibili per opcode, registri e indirizzi. Istruzioni più lunghe, invece, permetterebbero una maggiore espressività, a costo di un hardware più complesso e tempi di fetch potenzialmente maggiori. Analogamente, registri più grandi consentono di gestire dati più ampi, ma aumentano il costo e la complessità dell’hardware.
In conclusione, l’uguaglianza tra lunghezza delle istruzioni e dimensione dei registri in MIPS è una **scelta progettuale di compromesso**, orientata a semplicità ed efficienza, ma non un vincolo architetturale indispensabile.

#### Stack del kernel: vantaggi e svantaggi
Uno **stack separato dedicato al kernel** è uno stack utilizzato esclusivamente durante l’esecuzione in **modalità kernel**, distinto dallo stack dei programmi utente.
Un primo **vantaggio** è l’aumento della **sicurezza e dell’affidabilità** del sistema: il kernel non utilizza lo stack dell’utente, che potrebbe essere corrotto o contenere dati non affidabili. In questo modo si evitano interferenze tra codice utente e codice di sistema. Inoltre, uno stack separato garantisce che il kernel disponga sempre di **spazio sufficiente** per gestire interrupt, eccezioni e chiamate di sistema, indipendentemente dallo stato dello stack utente.
Tra gli **svantaggi** vi è un aumento della **complessità del sistema**, poiché è necessario gestire il cambio di stack durante il passaggio da modalità utente a modalità kernel. Questo comporta anche un lieve **overhead** in termini di tempo e risorse hardware. Inoltre, è richiesto un maggiore **consumo di memoria**, dato che ogni processo o thread deve disporre di uno stack kernel dedicato.
In sintesi, lo stack separato del kernel migliora sicurezza e robustezza, ma al costo di una maggiore complessità e di un utilizzo più elevato delle risorse.

#### Registri generali dedicati al kernel: vantaggi e svantaggi
Avere **più di due registri di uso generale dedicati al kernel** significa riservare alcuni registri della CPU esclusivamente all’esecuzione in **modalità kernel**, rendendoli non accessibili ai programmi utente.
Il principale **vantaggio** è l’aumento dell’**efficienza e della semplicità del codice del kernel**: il kernel può utilizzare registri già disponibili per gestire strutture dati, indirizzi e valori temporanei senza doverli salvare e ripristinare continuamente dallo stack. Questo riduce l’overhead durante la gestione di **interrupt**, **eccezioni** e **system call**, migliorando le prestazioni.
Un altro vantaggio è una maggiore **sicurezza**, poiché i registri dedicati non sono visibili né modificabili dal codice utente, evitando interferenze o corruzioni dello stato del kernel.
Lo **svantaggio** principale è la riduzione del **numero di registri disponibili ai programmi utente**, che può peggiorare le prestazioni del codice applicativo a causa di un maggiore utilizzo della memoria (spill su stack). Inoltre, riservare molti registri al kernel rende l’architettura **meno flessibile** e più vincolata a specifiche scelte di sistema operativo.
In conclusione, dedicare più registri al kernel migliora efficienza e sicurezza del sistema, ma comporta un compromesso in termini di flessibilità e prestazioni per il codice utente.

#### Controllo di programma e interruzioni: correttezza dell’affermazione
L’affermazione secondo cui *la gestione delle periferiche a controllo di programma consente di gestire periferiche più critiche in termini di latenza e banda passante rispetto alle interruzioni* **non è corretta in generale**.
Nel **controllo di programma** (polling), la CPU interroga ripetutamente la periferica per verificarne lo stato. Questo può garantire una **bassa latenza** solo se la CPU dedica continuamente tempo alla periferica, ma ciò avviene a costo di un **uso inefficiente delle risorse** e limita fortemente la banda complessiva disponibile per altre attività.
La gestione tramite **interruzioni di programma**, invece, consente alla CPU di eseguire altre istruzioni e di intervenire solo quando la periferica segnala la necessità di servizio. Questo approccio è generalmente **più efficiente** e permette di gestire periferiche con **maggiore banda passante**, soprattutto se abbinate a meccanismi come buffer e DMA.
Il controllo di programma può risultare vantaggioso solo in casi particolari, ad esempio per periferiche molto semplici o quando il tempo di risposta deve essere estremamente prevedibile. In generale, tuttavia, le **interruzioni** rappresentano una soluzione più adatta alla gestione di periferiche critiche sia in termini di latenza sia di capacità di trasferimento dati.
Pertanto, l’affermazione è **fuorviante**: il controllo di programma non consente, in generale, di gestire periferiche più critiche rispetto alla tecnica a interruzione.

#### Architettura di I/O basata esclusivamente su DMA
Ipotizzare un’architettura di I/O che utilizzi **esclusivamente il DMA** e non preveda l’uso delle **interruzioni** ha **senso solo in contesti molto limitati**, ma **non è una soluzione generale**.
Il DMA è estremamente efficiente per il trasferimento di **grandi quantità di dati**, poiché riduce il coinvolgimento della CPU. Tuttavia, senza interruzioni, la CPU non avrebbe un meccanismo efficiente per essere **notificata** del completamento di un trasferimento, della presenza di errori o di eventi asincroni. Sarebbe quindi necessario ricorrere nuovamente al **controllo di programma**, vanificando in parte i vantaggi del DMA.
Le interruzioni sono fondamentali per gestire:
- il **completamento** delle operazioni di I/O
- le **condizioni di errore**
- eventi asincroni non prevedibili
Senza di esse, il sistema perderebbe **reattività** ed efficienza, soprattutto in ambienti multitasking o con molte periferiche.
In conclusione, un’architettura di I/O basata solo su DMA è teoricamente possibile, ma poco pratica: **DMA e interruzioni sono tecniche complementari**, e la loro combinazione consente di ottenere le migliori prestazioni e flessibilità.

#### Gestione dei registri della CPU in caso di interrupt
In caso di **interrupt**, è necessario preservare lo **stato di esecuzione** del programma interrotto affinché possa riprendere correttamente dopo la gestione dell’interruzione.
A questo scopo, i **registri della CPU** (in particolare Program Counter, registri generali e registri di stato) devono essere **salvati** prima di eseguire la routine di servizio dell’interrupt (*Interrupt Service Routine*, ISR). Il salvataggio può essere effettuato automaticamente dall’hardware per alcuni registri fondamentali, mentre i restanti vengono salvati dal software su uno **stack** (tipicamente lo stack del kernel).
Al termine della ISR, i registri precedentemente salvati vengono **ripristinati**, permettendo alla CPU di riprendere l’esecuzione del programma interrotto come se l’interrupt non fosse mai avvenuto.
Questa gestione garantisce la **trasparenza dell’interruzione** e la correttezza dell’esecuzione dei programmi.

#### Attivazione di un gestore di eccezioni: operazioni dell’hardware
Quando si verifica un’**eccezione**, l’hardware della CPU esegue automaticamente una serie di operazioni per trasferire il controllo al **gestore di eccezioni** in modo corretto e sicuro.
In primo luogo, la CPU **salva il contesto minimo di esecuzione**, tipicamente l’indirizzo della prossima istruzione (Program Counter) e le informazioni di stato del processore, così da poter riprendere l’esecuzione in seguito. Questi valori vengono memorizzati in registri dedicati o sullo **stack del kernel**.
Successivamente, la CPU **identifica il tipo di eccezione** verificatasi e utilizza tale informazione per determinare l’indirizzo del corrispondente gestore, spesso tramite una **tabella dei vettori delle eccezioni**. Il Program Counter viene quindi caricato con l’indirizzo del gestore.
Infine, l’hardware **commuta il livello di privilegio** (passando alla modalità kernel, se necessario) e inibisce o modifica temporaneamente la gestione di ulteriori eccezioni o interrupt, garantendo che il gestore possa operare in modo controllato.
Queste operazioni permettono di avviare il gestore di eccezioni preservando lo stato del programma interrotto e assicurando la corretta gestione dell’evento anomalo.

#### Commento sull’affermazione relativa al pipelining
L’affermazione è **corretta**.
Il **pipelining** aumenta il **throughput** del processore, cioè il numero di istruzioni che vengono completate per unità di tempo, grazie alla sovrapposizione delle diverse fasi di esecuzione di istruzioni differenti. Una volta riempita la pipeline, è possibile completare idealmente **un’istruzione per ciclo di clock**.
Tuttavia, il pipelining **non riduce la latenza** di una singola istruzione: il tempo necessario affinché una specifica istruzione attraversi tutte le fasi della pipeline e venga completata rimane sostanzialmente invariato, e in alcuni casi può persino aumentare a causa dell’introduzione dei registri di pipeline.
In sintesi, il pipelining migliora la **capacità di elaborazione complessiva** del processore, ma non accelera il completamento della singola istruzione.

#### Effetto di una sequenza senza salti su una CPU pipeline
Una **lunga sequenza di istruzioni priva di salti condizionati** dà luogo a una **migliore performance** in una CPU dotata di **pipelining**.
In assenza di salti condizionati, la pipeline può procedere senza **interruzioni o svuotamenti** (*pipeline flush*), mantenendo un flusso continuo di istruzioni. Questo consente di sfruttare al massimo la sovrapposizione delle fasi di esecuzione e di avvicinarsi alle **prestazioni ideali**, con il completamento di una istruzione per ciclo di clock.
Al contrario, i salti condizionati introducono **incertezza sul flusso di controllo**, che può causare stalli o svuotamenti della pipeline in caso di predizione errata, peggiorando le prestazioni.
Pertanto, una sequenza lineare e priva di salti condizionati è particolarmente favorevole all’efficienza di una CPU pipeline.

#### Data hazards: esempi e contromisure hardware
I **data hazards** sono conflitti che si verificano in una CPU con **pipelining** quando un’istruzione dipende dai risultati di un’istruzione precedente non ancora completata.
Un esempio tipico è il **Read After Write (RAW)**, in cui un’istruzione tenta di leggere un operando che deve essere scritto da un’istruzione precedente:
```text
ADD R1, R2, R3
SUB R4, R1, R5
```
La seconda istruzione necessita del valore di `R1` prima che questo sia stato scritto.
Esistono anche:
- **Write After Read (WAR)**, quando una scrittura anticipa una lettura
- **Write After Write (WAW)**, quando due istruzioni scrivono sullo stesso registro in ordine errato
Per affrontare i data hazards intervenendo sull’**hardware**, si possono adottare diverse tecniche:
- **Forwarding (o bypassing)**: il risultato di un’istruzione viene inoltrato direttamente allo stadio successivo della pipeline senza attendere la scrittura nel registro.
- **Stall della pipeline**: l’hardware introduce cicli di attesa per ritardare l’istruzione dipendente.
- **Rinomina dei registri**: elimina i conflitti WAR e WAW utilizzando registri fisici differenti.
- **Esecuzione fuori ordine** (_out-of-order execution_): consente di eseguire istruzioni indipendenti anticipatamente.
Queste soluzioni permettono di ridurre o eliminare l’impatto dei data hazards sulle prestazioni del processore.

#### Segnali tra datapath e unità di controllo
Il **datapath** e l’**unità di controllo** si scambiano principalmente due tipi di segnali, che consentono il corretto funzionamento della CPU.
Il primo tipo è costituito dai **segnali di controllo**, generati dall’unità di controllo e diretti verso il datapath. Essi servono a **pilotare il comportamento dei componenti del datapath**, ad esempio selezionando le operazioni dell’ALU, abilitando la scrittura nei registri, scegliendo le sorgenti degli ingressi tramite i multiplexer e controllando l’accesso alla memoria.
Il secondo tipo è costituito dai **segnali di stato**, inviati dal datapath all’unità di controllo. Questi segnali forniscono informazioni sullo stato dell’esecuzione, come l’esito di un confronto, il valore di flag (zero, negativo, overflow) o il completamento di determinate operazioni, permettendo all’unità di controllo di **decidere la sequenza corretta delle azioni successive**.
In sintesi, i segnali di controllo comandano il *cosa fare*, mentre i segnali di stato informano l’unità di controllo su *ciò che è avvenuto* nel datapath.

#### Impatto di 64 registri general purpose sul formato delle istruzioni MIPS
Nell’architettura **MIPS** attuale i registri general purpose sono **32**, e ciascun registro è identificato tramite un campo di **5 bit** all’interno delle istruzioni (\(2^5 = 32\)).
Se si volessero implementare **64 registri general purpose**, sarebbe necessario utilizzare **6 bit** per identificare ciascun registro (\(2^6 = 64\)). Di conseguenza, i campi delle istruzioni che specificano i registri (ad esempio **rs**, **rt**, **rd** nel formato R) dovrebbero essere **allargati di 1 bit** ciascuno.
Questo avrebbe come principale conseguenza una **modifica del formato delle istruzioni**: a parità di lunghezza dell’istruzione (32 bit), rimarrebbero **meno bit disponibili** per gli altri campi, come l’opcode o i campi funzionali, oppure sarebbe necessario **aumentare la lunghezza complessiva dell’istruzione**.
In sintesi, introdurre 64 registri migliorerebbe la disponibilità di operandi in registro, ma comporterebbe un **compromesso progettuale** tra lunghezza dell’istruzione, complessità del decoding e spazio per opcode e altri campi.

#### Page table sempre residenti in memoria: vantaggi e svantaggi
Mantenere le **page table** dei processi più utilizzati sempre in memoria, in una regione **non paginabile**, è una scelta progettuale che presenta sia benefici sia criticità.
Il principale **vantaggio** è il miglioramento delle **prestazioni**: evitando il page fault delle page table, la traduzione degli indirizzi virtuali in fisici risulta più rapida e prevedibile. Questo riduce la latenza degli accessi in memoria, migliora l’efficacia della **TLB** e rende più efficiente il **context switch** tra processi frequentemente utilizzati.
Dal punto di vista dell’affidabilità, mantenere le page table residenti evita situazioni di **page fault annidati**, semplificando la gestione della memoria da parte del sistema operativo.
Lo **svantaggio** principale è l’aumento della **pressione sulla memoria fisica**: le page table occupano spazio che non può essere utilizzato per altri scopi e non può essere recuperato tramite paging. Questo riduce la flessibilità del sistema e può peggiorare le prestazioni globali in presenza di molti processi attivi o di memoria limitata. Inoltre, la scelta di quali page table mantenere residenti introduce una maggiore **complessità gestionale** per il sistema operativo.
In conclusione, mantenere sempre in memoria le page table dei processi più usati migliora prestazioni e prevedibilità, ma al costo di un maggiore consumo di memoria e di una minore flessibilità del sistema.

#### Write-through e write-back nella gestione delle scritture in cache
Nella gestione delle scritture in memoria cache si distinguono principalmente due approcci: **write-through** e **write-back**.
Nel **write-through**, ogni operazione di scrittura aggiorna **sia la cache sia la memoria principale**. Questo garantisce una **coerenza immediata** tra cache e memoria, semplificando il progetto del sistema e la gestione della coerenza, soprattutto in sistemi multiprocessore. Inoltre, in caso di rimpiazzo di una linea di cache, non è necessario effettuare scritture aggiuntive in memoria. Lo svantaggio principale è l’aumento del **traffico verso la memoria**, che può penalizzare le prestazioni.
Nel **write-back**, la scrittura aggiorna **solo la cache**, mentre la memoria principale viene aggiornata **solo quando la linea di cache viene rimpiazzata**. Questo riduce significativamente il traffico verso la memoria e migliora le **prestazioni**, soprattutto quando una stessa linea viene scritta più volte. Tuttavia, richiede una gestione più complessa, poiché è necessario mantenere un **bit di dirty** per sapere se una linea è stata modificata, e complica la coerenza della memoria.
In sintesi, il write-through privilegia **semplicità e coerenza immediata**, mentre il write-back privilegia **efficienza e prestazioni**, al costo di una maggiore complessità.

#### Sostituzione casuale dei blocchi di cache: motivazioni
La scelta di utilizzare una **politica di sostituzione casuale** (*random replacement*) per selezionare il blocco di cache da rimpiazzare è comune in molti processori per ragioni di **semplicità ed efficienza**.
Dal punto di vista **hardware**, una politica casuale è molto semplice da implementare e richiede una logica minima, evitando strutture complesse come quelle necessarie per politiche più sofisticate (ad esempio **LRU** o sue approssimazioni). Questo consente di ridurre **costi, area e consumo energetico**, aspetti particolarmente critici per cache di primo livello.
Dal punto di vista **prestazionale**, la sostituzione casuale offre risultati medi spesso **comparabili** a politiche più complesse, soprattutto per cache con elevato grado di associatività. Inoltre, evita alcuni **casi patologici** in cui politiche deterministiche possono portare a rimpiazzi sistematicamente sfavorevoli.
In sintesi, la sostituzione casuale rappresenta un buon **compromesso progettuale**: prestazioni adeguate nella maggior parte dei casi, con una complessità hardware molto contenuta.

#### Modi user e kernel e coesistenza di spazi di indirizzamento
La presenza di **due modi di funzionamento del processore**, comunemente detti **user** e **kernel**, è necessaria per garantire la **coabitazione sicura di più spazi di indirizzamento** e la protezione del sistema.
In **modo user**, i programmi applicativi possono accedere solo al **proprio spazio di indirizzamento** e non possono eseguire istruzioni privilegiate né accedere direttamente alle risorse di sistema. Questo impedisce che un processo interferisca con la memoria o con i dati di altri processi.
In **modo kernel**, il sistema operativo dispone di **privilegi completi**: può accedere a tutti gli spazi di indirizzamento, gestire la memoria, aggiornare le page table e controllare l’hardware. Il passaggio dal modo user al modo kernel avviene in modo controllato tramite **system call**, interrupt o eccezioni.
Questa separazione garantisce che ogni processo operi nel proprio spazio di indirizzamento in modo isolato, mentre il kernel può **coordinare e proteggere** l’uso della memoria e delle risorse, assicurando sicurezza, stabilità e corretto funzionamento del sistema.

#### Page table come parte dello stato di un processo
La **page table** è parte integrante dello **stato di un processo** perché descrive la **mappatura tra indirizzi virtuali e indirizzi fisici** valida esclusivamente per quel processo.
Ogni processo dispone di un **proprio spazio di indirizzamento virtuale**, e la page table contiene le informazioni necessarie affinché la CPU possa tradurre correttamente gli indirizzi generati dal processo durante la sua esecuzione. Senza la page table corretta, lo stesso indirizzo virtuale potrebbe riferirsi a dati errati o a memoria appartenente a un altro processo.
Durante un **context switch**, oltre ai registri della CPU, è quindi necessario aggiornare anche il riferimento alla page table del nuovo processo attivo, poiché essa rappresenta una parte fondamentale del suo contesto di esecuzione.
In sintesi, la page table è parte dello stato del processo perché **determina il suo spazio di memoria visibile** e garantisce isolamento e correttezza nell’esecuzione.

#### Gerarchia di memoria con più livelli di cache
Una **gerarchia di memoria** con più livelli di **cache** è organizzata in modo da bilanciare **prestazioni, costo e capacità**, sfruttando il principio di **località** dei programmi.
Il livello più vicino alla CPU è la **cache di primo livello (L1)**, caratterizzata da dimensioni ridotte e tempi di accesso molto bassi. In caso di **cache hit**, il dato viene fornito immediatamente alla CPU. In caso di **cache miss**, la richiesta viene inoltrata al livello successivo.
La **cache di secondo livello (L2)** e, se presente, la **cache di terzo livello (L3)** hanno dimensioni progressivamente maggiori e tempi di accesso più elevati. Ogni livello funge da **filtro** per quello successivo: un miss in L1 non implica necessariamente un accesso alla memoria principale se il dato è presente in L2 o L3.
Quando un dato viene trovato in un livello inferiore, esso viene **copiato nei livelli superiori** secondo politiche di gestione prestabilite. Se il dato non è presente in nessuna cache, viene recuperato dalla **memoria principale**, con un costo temporale molto più elevato.
In questo modo, la gerarchia di cache consente di avvicinare alla CPU i dati più frequentemente utilizzati, riducendo il **tempo medio di accesso alla memoria** e migliorando le prestazioni complessive del sistema.

#### Perché il write-through non è adatto ai sistemi di memoria virtuale
Nei sistemi di **memoria virtuale**, l’approccio **write-through** non è ragionevole perché comporterebbe un **numero eccessivo di scritture** verso livelli di memoria molto più lenti, come la **memoria secondaria** (disco o SSD).
Con il write-through, ogni operazione di scrittura aggiorna immediatamente il livello sottostante. Applicato alla memoria virtuale, ciò significherebbe propagare ogni scrittura dalla memoria principale fino al supporto di massa, introducendo una **latenza enorme** e un drastico peggioramento delle prestazioni. Inoltre, i dispositivi di memoria secondaria hanno **banda passante e tempi di accesso** molto inferiori rispetto alla RAM, rendendo questo approccio impraticabile.
L’approccio tipicamente adottato nei sistemi di memoria virtuale è invece assimilabile al **write-back**: le modifiche vengono mantenute in memoria principale e una pagina viene scritta su disco **solo se necessario**, ad esempio quando viene rimpiazzata. Questo consente di ridurre il numero di accessi al disco e di sfruttare la **località temporale delle scritture**.
In sintesi, il write-through è inefficiente nei sistemi di memoria virtuale perché causerebbe un eccessivo traffico verso la memoria secondaria, mentre il write-back garantisce prestazioni e scalabilità molto migliori.

#### Write-through e write-back nella gestione delle scritture
Nella gestione delle scritture in una gerarchia di memoria si utilizzano principalmente due approcci: **write-through** e **write-back**.
Nel **write-through**, ogni operazione di scrittura aggiorna **simultaneamente la cache e la memoria di livello inferiore**. Il vantaggio principale è la **semplicità** e la **coerenza immediata** dei dati tra cache e memoria, che facilita la gestione del sistema (in particolare nei sistemi multiprocessore). Lo svantaggio è l’aumento del **traffico di scrittura** verso la memoria, con possibili penalizzazioni delle prestazioni.
Nel **write-back**, le scritture aggiornano **solo la cache**; la memoria di livello inferiore viene aggiornata **solo quando una linea modificata viene sostituita**. Questo approccio riduce il traffico verso la memoria e migliora le **prestazioni**, soprattutto quando una stessa linea viene scritta più volte. Di contro, richiede una gestione più complessa, tramite un **dirty bit**, e rende più articolata la coerenza dei dati.
In sintesi, il write-through privilegia **semplicità e coerenza**, mentre il write-back privilegia **efficienza e prestazioni**, al costo di una maggiore complessità.

#### Bit di abilitazione alla scrittura nelle pagine di memoria
L’uso di un **bit di abilitazione/disabilitazione alla scrittura** per ogni pagina di memoria è necessario per garantire **protezione, sicurezza e corretto funzionamento** del sistema.
Questo bit consente di distinguere le pagine **sola lettura** da quelle **scrivibili**. In questo modo è possibile proteggere aree di memoria che non devono essere modificate, come il **codice dei programmi**, le **librerie condivise** o le **strutture del sistema operativo**, evitando scritture accidentali o malevole.
Dal punto di vista del sistema operativo, il bit di scrittura permette inoltre di implementare meccanismi avanzati come il **copy-on-write**, in cui più processi condividono inizialmente una stessa pagina in sola lettura, che viene duplicata solo al primo tentativo di scrittura. Inoltre, una violazione del bit di scrittura genera una **eccezione**, consentendo al kernel di intercettare errori o accessi non autorizzati.
In sintesi, il bit di abilitazione alla scrittura per pagina è fondamentale per **isolamento dei processi**, protezione del codice e gestione efficiente della memoria virtuale.

#### Salti condizionati e incondizionati
I **salti** sono istruzioni che modificano il normale flusso sequenziale di esecuzione di un programma.
Un **salto incondizionato** provoca sempre il trasferimento del controllo verso un nuovo indirizzo, indipendentemente da qualsiasi condizione. L’istruzione di salto viene quindi sempre eseguita e il **Program Counter** viene caricato con l’indirizzo di destinazione.
Un **salto condizionato**, invece, provoca il trasferimento del controllo solo se una **condizione logica** risulta vera, tipicamente valutata in base a **flag** o al risultato di un confronto. Se la condizione non è soddisfatta, l’esecuzione prosegue con l’istruzione successiva.
In sintesi, i salti incondizionati modificano sempre il flusso di esecuzione, mentre quelli condizionati lo modificano solo in presenza di una specifica condizione.

#### Salti assoluti e salti relativi
I **salti** sono istruzioni che modificano il flusso di esecuzione di un programma trasferendo il controllo a un’altra istruzione.
Un **salto assoluto** specifica direttamente l’**indirizzo di destinazione** a cui il Program Counter deve essere impostato. L’indirizzo indicato nell’istruzione non dipende dalla posizione corrente del programma ed è quindi valido indipendentemente da dove l’istruzione si trovi in memoria.
Un **salto relativo**, invece, specifica la destinazione come uno **spostamento (offset)** rispetto al valore corrente del Program Counter. L’indirizzo finale viene calcolato sommando tale offset al Program Counter, rendendo il salto **dipendente dalla posizione** dell’istruzione.
In sintesi, i salti assoluti utilizzano un indirizzo esplicito, mentre i salti relativi utilizzano uno spostamento rispetto alla posizione corrente, risultando più flessibili e adatti alla rilocazione del codice.

#### Differenza tra i salti MIPS32 `j` e `jr`
Nell’architettura **MIPS32** esistono due principali istruzioni di **salto incondizionato**: `j` e `jr`, che differiscono per il modo in cui viene determinato l’indirizzo di destinazione.
L’istruzione **`j`** utilizza il **formato J** e specifica la destinazione tramite un **campo indirizzo di 26 bit** contenuto nell’istruzione. L’indirizzo di salto viene ricostruito combinando i bit più significativi del **Program Counter** con il campo indirizzo e tenendo conto dell’allineamento a parola. Questo tipo di salto è quindi un **salto pseudo-assoluto**, limitato a una finestra di indirizzi.
L’istruzione **`jr`** (*jump register*), invece, utilizza il **formato R** e preleva l’indirizzo di destinazione direttamente da un **registro**. In questo caso il Program Counter viene caricato con il contenuto del registro specificato, consentendo un salto verso **qualsiasi indirizzo** contenuto nel registro.
In sintesi, `j` è un salto incondizionato con indirizzo codificato nell’istruzione e limitato nella portata, mentre `jr` realizza un salto incondizionato **indiretto**, più flessibile, tipicamente usato per il **ritorno da una funzione**.

#### Campo immediato di `beq` e ampiezza del salto in MIPS32
Nell’architettura **MIPS32**, l’istruzione **`beq`** utilizza un campo **immediato di 16 bit** per specificare la destinazione del salto, ma tale campo **non rappresenta direttamente un indirizzo di memoria**.
Il valore immediato viene infatti interpretato come un **offset relativo** rispetto al **Program Counter** e viene prima **esteso di segno** a 32 bit, poi **moltiplicato per 4** (equivalentemente, shift a sinistra di 2 bit). Questo è possibile perché le istruzioni MIPS sono **allineate a parola**, quindi gli ultimi due bit dell’indirizzo sono sempre zero.
Di conseguenza, i 16 bit dell’immediato permettono di rappresentare **2¹⁶ possibili valori di offset in parole**, che corrispondono a **2¹⁸ possibili indirizzi di byte**. Il salto condizionato può quindi raggiungere una finestra di **2¹⁸ locazioni di memoria** attorno all’istruzione corrente.
In sintesi, grazie all’allineamento a parola e allo shift di 2 bit, un campo immediato di 16 bit consente di indirizzare una regione di memoria più ampia di quanto suggerisca la sua dimensione apparente.

#### Campo address dell’istruzione `j` e ampiezza del salto in MIPS32
Nell’architettura **MIPS32**, l’istruzione di salto incondizionato **`j`** contiene un campo **address di 26 bit**, che **non rappresenta direttamente un indirizzo di byte**.
Poiché le istruzioni MIPS sono **allineate a parola**, gli indirizzi delle istruzioni hanno sempre i **2 bit meno significativi uguali a zero**. Per questo motivo, il campo address viene **shiftato a sinistra di 2 bit**, ottenendo un valore effettivo di **28 bit**.
L’indirizzo di salto finale viene poi costruito concatenando:
- i **4 bit più significativi** del **Program Counter** dell’istruzione successiva
- i **28 bit** ottenuti dallo shift del campo address
In questo modo, i 26 bit dell’istruzione consentono di identificare **una tra 2²⁸ locazioni di memoria** all’interno di una stessa regione di indirizzamento.
In sintesi, grazie all’allineamento a parola e allo shift di 2 bit, un campo di 26 bit permette di indirizzare una finestra di **2²⁸ byte**.

#### Istruzioni macchina e pseudoistruzioni
Le **istruzioni macchina** sono istruzioni **effettivamente supportate dall’hardware** della CPU e fanno parte dell’insieme di istruzioni dell’architettura. Ogni istruzione macchina ha una codifica binaria precisa ed è direttamente eseguita dal processore.
Le **pseudoistruzioni**, invece, sono istruzioni di **livello assembly** che **non corrispondono a una singola istruzione macchina**. Esse vengono riconosciute dall’**assembler**, che le traduce in una o più istruzioni macchina equivalenti.
Le pseudoistruzioni hanno lo scopo di **semplificare la scrittura e la leggibilità** dei programmi assembly, rendendo il codice più chiaro e compatto dal punto di vista del programmatore, senza introdurre nuove funzionalità hardware.
In sintesi, le istruzioni macchina sono eseguite direttamente dalla CPU, mentre le pseudoistruzioni sono una **convenzione software** gestita dall’assembler.

#### Pipeline stall e “bubble”
Un **pipeline stall** si verifica in una CPU pipeline quando l’avanzamento delle istruzioni lungo la pipeline viene **temporaneamente arrestato** perché non sono soddisfatte le condizioni per proseguire l’esecuzione corretta (ad esempio per **hazard** di dati, di controllo o di struttura).
Durante uno stall, uno o più stadi della pipeline restano inattivi per uno o più cicli di clock, mentre le istruzioni precedenti o successive attendono che la condizione di conflitto venga risolta. Dal punto di vista logico, in pipeline viene inserita una **istruzione fittizia** che non esegue alcuna operazione utile.
Per questo motivo lo stall è comunemente chiamato **“bubble”**: come una bolla d’aria in un fluido, occupa uno stadio della pipeline senza produrre lavoro, avanzando lungo la pipeline e riducendo temporaneamente il throughput del processore.
In sintesi, una pipeline stall rappresenta un **vuoto operativo** introdotto per preservare la correttezza dell’esecuzione delle istruzioni.

#### Branch prediction e miglioramento delle prestazioni
La **branch prediction** è una tecnica utilizzata nelle CPU pipeline per **prevedere l’esito dei salti condizionati** (preso o non preso) prima che la condizione sia effettivamente valutata.
In presenza di un salto condizionato, senza predizione la CPU dovrebbe **attendere** la risoluzione della condizione, causando **stall o svuotamento della pipeline**. Con la branch prediction, invece, il processore **assume un esito probabile** del salto e continua a prelevare ed eseguire istruzioni lungo il percorso previsto.
Se la previsione è **corretta**, la pipeline rimane piena e il throughput aumenta, migliorando significativamente la **performance**. Se la previsione è **errata**, le istruzioni speculative vengono scartate e la pipeline viene svuotata, introducendo una penalità temporale.
In sintesi, la branch prediction migliora le prestazioni perché **riduce l’impatto dei salti condizionati** sul flusso della pipeline, aumentando il numero di istruzioni completate per unità di tempo.

#### Problema dell’overflow
L’**overflow** si verifica quando il risultato di un’operazione aritmetica **eccede l’intervallo di valori rappresentabili** con il numero di bit disponibili per un dato tipo di dato o registro.
In una CPU, l’overflow è tipicamente associato alle **operazioni aritmetiche su interi** con rappresentazione in **complemento a due**. Ad esempio, sommando due numeri positivi si può ottenere un risultato che, per mancanza di bit, viene interpretato come negativo. In questo caso il risultato memorizzato non rappresenta il valore matematicamente corretto.
Dal punto di vista hardware, l’overflow viene rilevato confrontando il **segno degli operandi** con il **segno del risultato** e può generare un **flag di overflow** o un’**eccezione**, a seconda dell’architettura e dell’istruzione utilizzata.
In sintesi, l’overflow indica una **perdita di correttezza del risultato** dovuta ai limiti di rappresentazione dei dati e deve essere gestito esplicitamente dal software o dall’hardware per evitare errori di calcolo.

#### Codifiche per la rappresentazione di numeri interi positivi e negativi
Per rappresentare numeri interi **positivi e negativi** in un calcolatore sono state introdotte diverse **codifiche binarie**, ciascuna con caratteristiche e implicazioni diverse.
La **rappresentazione modulo e segno** utilizza un bit (il più significativo) per indicare il **segno** del numero, mentre i restanti bit rappresentano il **valore assoluto**. È una codifica concettualmente semplice, ma presenta svantaggi pratici, come l’esistenza di due rappresentazioni dello zero (+0 e −0) e una gestione più complessa delle operazioni aritmetiche.
La **rappresentazione in complemento a uno** ottiene i numeri negativi invertendo tutti i bit della rappresentazione positiva. Anche in questo caso esistono due zeri distinti e le operazioni aritmetiche richiedono trattamenti particolari del riporto finale.
La **rappresentazione in complemento a due** è la più utilizzata nelle architetture moderne. Un numero negativo si ottiene invertendo i bit del numero positivo e aggiungendo uno. Questa codifica elimina il problema del doppio zero e consente di utilizzare gli **stessi circuiti aritmetici** per numeri positivi e negativi, semplificando l’hardware.
In sintesi, sebbene esistano più codifiche possibili, il **complemento a due** è preferito perché garantisce **semplicità, efficienza e correttezza** nelle operazioni aritmetiche.

#### Ottenere il complemento a due di −x
Dato un codice binario di **n bit** che rappresenta un numero **x**, con valore assoluto compreso tra  
\(0\) e \(2^{\,n-1}-1\), il **codice in complemento a due** che rappresenta il numero **−x** si ottiene con la seguente procedura:
1. **Invertire tutti i bit** del codice che rappresenta \(x\) (operazione di complemento a uno).
2. **Aggiungere 1** al risultato ottenuto, considerando l’aritmetica su \(n\) bit.
Il codice risultante rappresenta il valore **−x** in complemento a due.
Questa procedura è valida perché, nel complemento a due, il numero negativo è definito come l’opposto additivo del numero positivo modulo \(2^n\), e consente di utilizzare gli stessi circuiti aritmetici per la somma di numeri positivi e negativi.

#### Prezzo da pagare per l’ampio intervallo dei numeri in virgola mobile
I numeri in **virgola mobile** consentono di rappresentare valori in un **intervallo molto più ampio** rispetto alla virgola fissa, ma questo avviene a un preciso **prezzo**.
Il principale costo è la **perdita di precisione**: a differenza della virgola fissa, non tutti i numeri reali possono essere rappresentati esattamente e la precisione varia a seconda dell’ordine di grandezza del numero. Le operazioni aritmetiche introducono quindi **errori di approssimazione e arrotondamento**.
Un ulteriore svantaggio è la maggiore **complessità hardware e software**: la gestione della virgola mobile richiede circuiti più complessi e operazioni più costose in termini di tempo rispetto all’aritmetica in virgola fissa.
Inoltre, i calcoli in virgola mobile non sono sempre **associativi o distributivi**, rendendo i risultati dipendenti dall’ordine delle operazioni.
In sintesi, l’ampio intervallo di rappresentazione della virgola mobile si ottiene sacrificando **precisione, semplicità e prevedibilità** dei calcoli.
