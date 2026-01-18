# Flashcard & Quiz Pack (Obsidian)

> [!Info] Come usarlo in modo “interattivo”
> 
> - **Modalità Flashcard (Q/A):** copri la risposta (o usa un plugin tipo _Spaced Repetition_) e prova a rispondere.
>     
> - **Modalità Cloze:** completa i buchi (utile per ripasso veloce).
>     
> - **Modalità Quiz:** fai i test (timer 10–15 min), poi correggi con le soluzioni.
>     

---

## Deck 1 — Flashcard Q/A (formato semplice)

> [!Tip] Regola d’oro  
> Rispondi **in 1–3 frasi** (stile orale). Se serve, aggiungi un esempio.

### Catena programmativa: componenti

> [!Question]- **Q1. Cos’è la catena programmativa?**  
**A.** È l’insieme dei componenti software che trasformano il **codice sorgente** in un **programma eseguibile** (o caricabile in memoria) dalla macchina.

> [!Question]- **Q2. Compilatore: ingresso, uscita, chi prepara gli ingressi, quando?**  
**A.** Ingresso: **codice sorgente** (dal programmatore). Uscita: **codice assembly o file oggetto**. Avviene **prima dell’assemblaggio** (fase di build).

> [!Question]- **Q3. Assemblatore: ingresso, uscita, chi prepara gli ingressi, quando?**  
**A.** Ingresso: **assembly** (generato dal compilatore o scritto dal programmatore). Uscita: **file oggetto**. Avviene **dopo compilazione**.

> [!Question]- **Q4. Linker: cosa fa e cosa produce?**  
**A.** Collega **file oggetto + librerie**, risolve **simboli esterni** e produce un **eseguibile**.

> [!Question]- **Q5. Loader: cosa fa?**  
**A.** Carica l’eseguibile in **RAM**, prepara **codice/dati/stack**, risolve collegamenti dinamici se necessari e passa il controllo al **punto d’ingresso**.

> [!Question]- **Q6. Debugger: a cosa serve e quando interviene?**  
**A.** Serve per analizzare l’esecuzione (breakpoint, step, ispezione variabili/registri, tracing). Opera **durante l’esecuzione**.

---

### CPU & Datapath

> [!Question]- **Q7. Program Counter (PC): cos’è e cosa fa?**  
**A.** Registro che contiene l’**indirizzo della prossima istruzione**; si incrementa nel flusso normale o viene caricato con un nuovo valore su salti/branch/call.

> [!Question]- **Q8. Instruction Register (IR): cos’è e a cosa serve?**  
**A.** Registro che mantiene l’**istruzione corrente** dopo il fetch, stabilizzandola per decodifica ed esecuzione.

> [!Question]- **Q9. Opcode: che cos’è?**  
**A.** Campo dell’istruzione che identifica **quale operazione** eseguire; guida l’unità di controllo nella generazione dei segnali.

> [!Question]- **Q10. Che segnali si scambiano datapath e unità di controllo?**  
**A.** Dal controllo al datapath: **segnali di controllo** (abilitazioni, selezioni mux, ALUop, mem read/write). Dal datapath al controllo: **segnali di stato** (flag, esiti confronti, completamenti).

> [!Question]- **Q11. Perché il register file legge due registri contemporaneamente?**  
**A.** Perché molte istruzioni (ALU) usano **due operandi sorgente** nello stesso ciclo; due porte di lettura evitano cicli extra.

---

### Logica digitale

> [!Question]- **Q12. Full-adder: ingressi e uscite?**  
**A.** Ingressi: A, B, Cin. Uscite: S (somma), Cout (riporto).

> [!Question]- **Q13. Macchina combinatoria vs sequenziale?**  
**A.** Combinatoria: uscita dipende solo dagli **ingressi correnti** (niente memoria). Sequenziale: uscita dipende da ingressi + **stato interno** (memoria, clock).

> [!Question]- **Q14. In un grafo di una FSM, cosa rappresentano gli archi?**  
**A.** Le **transizioni di stato** attivate da condizioni sugli ingressi (e talvolta con uscite associate, Mealy/Moore).

---
### MIPS: formati e salti

> [!Question]- **Q15. Formato R: perché 5 bit per registro e cosa implica?**  
**A.** 5 bit identificano (2^5=32) registri → MIPS ha **32 registri** general purpose accessibili.

> [!Question]- **Q16. Formato J: perché 26 bit permettono 2^28 byte di finestra?**  
**A.** Il campo address è **shiftato di 2** (allineamento a parola) → 28 bit effettivi; i 4 bit alti arrivano dal PC.

> [!Question]- **Q17. Perché istruzioni MIPS sono 32 bit (lunghezza fissa) e quali effetti ha?**  
**A.** Semplifica fetch/decodifica/allineamento e favorisce pipeline; alternative (più corte/lunghe) cambiano espressività vs complessità/efficienza cache.

> [!Question]- **Q18. Differenza tra `j` e `jr` in MIPS32?**  
**A.** `j`: target codificato (26 bit + PC high) → salto “pseudo-assoluto” in finestra. `jr`: target preso da un **registro** → salto indiretto verso qualsiasi indirizzo contenuto nel registro.

> [!Question]- **Q19. `beq`: come si ottiene l’indirizzo di salto dal campo immediato?**  
**A.** Offset 16 bit → **sign-extend** a 32 → **shift left 2** → somma al PC (salto relativo in parole).

> [!Question]- **Q20. Salto assoluto vs relativo?**  
**A.** Assoluto: specifica un indirizzo (indipendente dalla posizione). Relativo: usa un **offset** rispetto al PC (più adatto a rilocazione).

> [!Question]- **Q21. Salto condizionato vs incondizionato?**  
**A.** Incondizionato: sempre. Condizionato: solo se una condizione (flag/confronto) è vera.

> [!Question]- **Q22. Istruzioni macchina vs pseudoistruzioni?**  
**A.** Macchina: supportate dall’hardware, 1 codifica binaria. Pseudo: convenzioni assembly espanse dall’assembler in 1+ istruzioni macchina.

---

### Pipeline

> [!Question]- **Q23. Cos’è un pipeline stall e perché si chiama bubble?**  
**A.** Arresto temporaneo dell’avanzamento per hazard; una “istruzione fittizia” occupa stadi senza lavoro → bubble.

> [!Question]- **Q24. Branch prediction: cos’è e perché migliora le prestazioni?**  
**A.** Prevede l’esito dei branch per continuare il fetch speculativo; se corretta evita stall/flush e aumenta throughput.

> [!Question]- **Q25. Pipelining: perché aumenta throughput ma non riduce latenza della singola istruzione?**  
**A.** Sovrappone fasi di istruzioni diverse → più istruzioni/tempo, ma ogni istruzione attraversa comunque tutti gli stadi.

> [!Question]- **Q26. Perché una lunga sequenza senza salti condizionati è “perfetta” per pipeline?**  
**A.** Riduce hazard di controllo (meno flush/stall) → pipeline piena, vicino a 1 istruzione/ciclo.

> [!Question]- **Q27. Data hazards: esempio RAW e contromisure hardware?**  
**A.** RAW: un’istruzione legge un registro prima che la precedente lo scriva. Contromisure: forwarding, stall, rinomina registri, out-of-order.

---

### Interrupt / Eccezioni / Modalità kernel

> [!Question]- **Q28. Cosa succede ai registri CPU durante un interrupt?**  
**A.** Si salva il contesto (PC + registri necessari + stato) tipicamente su **stack kernel**; a fine ISR si ripristina.

> [!Question]- **Q29. Eccezione: quali operazioni fa l’hardware per attivare il gestore?**  
**A.** Salva contesto minimo, identifica tipo di eccezione, carica PC al gestore (tabella vettori), passa a modo kernel e gestisce mascheramenti/flag.

> [!Question]- **Q30. Perché servono due modi (user/kernel) per coesistenza sicura di spazi di indirizzamento?**  
**A.** In user: niente istruzioni privilegiate, accesso limitato → isolamento. In kernel: privilegi completi per gestire memoria, page table, I/O.

> [!Question]- **Q31. Stack kernel separato: pro e contro?**  
**A.** Pro: sicurezza/robustezza, stack utente non “fidato”, spazio garantito per ISR. Contro: complessità cambio stack + overhead + memoria.

> [!Question]- **Q32. Registri generali dedicati al kernel (più di due): pro e contro?**  
**A.** Pro: meno save/restore → più efficienza e sicurezza. Contro: meno registri per user → più spill su memoria, meno flessibilità.

---

### I/O: polling, interrupt, DMA

> [!Question]- **Q33. Perché “controllo di programma gestisce periferiche più critiche delle interruzioni” è in generale falso?**  
**A.** Polling può dare bassa latenza solo dedicando CPU continuamente (inefficiente). Interrupt permette CPU libera e buona gestione di banda/reattività.

> [!Question]- **Q34. Ha senso un’I/O basata solo su DMA senza interrupt?**  
**A.** Poco pratico: senza interrupt la CPU deve comunque fare polling per fine trasferimento/errori → perde reattività; DMA e interrupt sono complementari.

---

### Memoria virtuale & cache

> [!Question]- **Q35. Page table: perché è parte dello stato di un processo?**  
**A.** Definisce la mappatura virtuale→fisica del processo; nel context switch bisogna riferirsi alla page table corretta per isolamento e correttezza.

> [!Question]- **Q36. Page table sempre residenti (non paginabili) per processi usati: pro e contro?**  
**A.** Pro: meno page fault “critici”, traduzione più prevedibile, TLB più efficace. Contro: occupano RAM non recuperabile, più complessità decisionale.

> [!Question]- **Q37. Gerarchia cache L1/L2/L3: perché più livelli?**  
**A.** Bilancia velocità/costo/capacità: L1 velocissima piccola; L2/L3 più grandi più lente; riducono tempo medio di accesso filtrando miss.

> [!Question]- **Q38. Write-through vs write-back (cache): differenze chiave?**  
**A.** WT: scrive subito anche in memoria → semplice/coerente ma più traffico. WB: scrive in memoria solo a rimpiazzo (dirty bit) → più performance ma più complesso.

> [!Question]- **Q39. Perché write-through non è adatto alla memoria virtuale?**  
**A.** Propagherebbe ogni scrittura verso livelli molto lenti (anche disco/SSD) → traffico enorme; si preferisce comportamento tipo write-back.

> [!Question]- **Q40. Perché sostituzione casuale in cache può essere una buona scelta?**  
**A.** Hardware semplice e poco costoso; prestazioni medie spesso comparabili a politiche complesse, evitando casi patologici deterministici.

> [!Question]- **Q41. Bit per pagina “write enable”: perché serve?**  
**A.** Protegge pagine read-only (codice/librerie/OS), abilita meccanismi come copy-on-write e genera eccezioni su scritture non consentite.

---
### Numeri & rappresentazioni

> [!Question]- **Q42. Overflow: cos’è e come si rileva (idea)?**  
**A.** Risultato fuori dall’intervallo rappresentabile; in complemento a 2 spesso si rileva confrontando segni operandi/risultato (flag o eccezione).

> [!Question]- **Q43. Codifiche per interi con segno: quali e perché complemento a 2 è preferito?**  
**A.** Modulo e segno, complemento a 1, complemento a 2. Il complemento a 2 elimina doppio zero e usa la stessa logica aritmetica per ±.

> [!Question]- **Q44. Come ottenere la rappresentazione in complemento a 2 di −x (n bit)?**  
**A.** Inverti tutti i bit di x e aggiungi 1 (aritmetica su n bit).

> [!Question]- **Q45. “Prezzo” della virgola mobile per avere grande intervallo?**  
**A.** Perdita di precisione (arrotondamenti), complessità maggiore e proprietà algebriche non sempre valide (dipendenza dall’ordine delle operazioni).

---

## Deck 2 — Cloze (buchi da completare)

> [!Info] Suggerimento  
> Leggi la frase e completa a voce alta. Poi controlla.

1. Il **PC** contiene l’indirizzo della {{prossima istruzione}} da prelevare.
2. Il **IR** mantiene stabile l’{{istruzione corrente}} durante decodifica/esecuzione.
3. Un **full-adder** somma tre bit: {{A}}, {{B}}, {{Cin}} e produce {{S}} e {{Cout}}.
4. Una macchina **sequenziale** ha {{memoria}} e dipende dallo {{stato}}.
5. In MIPS, 5 bit identificano {{32}} registri.
6. In `beq`, l’immediato è un offset {{relativo al PC}} e viene shiftato di {{2}} bit.
7. `j` usa un campo address di {{26}} bit che diventa {{28}} bit con shift.
8. La branch prediction riduce {{stall/flush}} e aumenta il {{throughput}}.
9. In write-back serve un bit di {{dirty}}.
10. Il complemento a 2 di −x si ottiene con {{inverti bit}} + {{1}}.

---

## Quiz 1 — Vero/Falso (correzione in fondo)
1. Il pipelining riduce sempre la latenza di una singola istruzione.
2. `jr` permette salti a indirizzi presi da un registro.
3. Write-through riduce il traffico verso la memoria rispetto al write-back.
4. Il polling è sempre migliore degli interrupt per periferiche ad alta banda.
5. Una politica random in cache è spesso scelta per semplicità hardware.
6. La page table non fa parte del contesto di un processo.
7. Le pseudoistruzioni sono eseguite direttamente dall’hardware.
8. Un data hazard RAW può essere mitigato con forwarding.

---

## Quiz 2 — Scelta multipla

**Q1. Qual è l’uscita principale del linker?**  
A) File oggetto  
B) Assembly  
C) Eseguibile  
D) Stato del programma

**Q2. In MIPS, perché il campo address di `j` non è un indirizzo completo?**  
A) Perché è relativo al PC  
B) Perché manca l’allineamento  
C) Perché combina 26 bit con i 4 bit alti del PC e usa shift di 2  
D) Perché usa il registro $ra

**Q3. Quale tecnica elimina WAR e WAW?**  
A) Stall  
B) Forwarding  
C) Rinomina registri  
D) Branch prediction

**Q4. Cosa garantisce principalmente lo stack kernel separato?**  
A) Più registri utente  
B) Sicurezza/robustezza e contesto affidabile per ISR  
C) Minore consumo di memoria  
D) Nessun overhead

---

## Soluzioni (non leggere subito)

### Vero/Falso

1. F
2. V
3. F
4. F
5. V
6. F
7. F
8. V
### Scelta multipla

Q1: C  
Q2: C  
Q3: C  
Q4: B

---

## Mini-game (ripasso rapido in 7 minuti)

> [!Success] Regola  
> Metti un timer 7:00. Scorri le domande Q/A e prova a rispondere **prima** di leggere la risposta.

- Parti da Q15 (MIPS) → Q27 (pipeline) → Q35 (memoria) → Q42 (numeri).

---

## (Extra) Formato Anki (CSV pronto)

> [!Note]  
> Se vuoi, posso convertirti tutto in un file `.csv` importabile in Anki (Front;Back) con tag per argomento.