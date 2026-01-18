#Architettura #University
## Primo Parziale
### Filtro 1 - Codice Binario > Ascii
#### Conversione Ascii
> [!Note] Binario -> Ascii (spesso: mare, cane)
> Convertire guardando la [[Tabella Ascii.png |Tabella Ascii]] per ogni word.
> ![[ApplicationFrameHost_Wyp5RsNjwG.png]]
#### Calcoli in virgola fissa
**Esempio (da domande aperte anche se non è aperta)**
![[zen_gyFJIBLLES.png]]
> [!Note] Dati
> Virgola fissa: 8bit
> Intervallo: 14.4, 40.0
> Numero da rappresentare: 37.913
> Trovare: Errore di approssimazione (errore = numero reale - numero rappresentato)

>[!QUESTION] Esecuzione
> 1) Passo di quantizzazione ($\Delta$)
> $$
> \Delta = \frac{40.0 - 14.4}{2^8 - 1} = \frac{25.6}{255} \approx 0.10039
> $$
> 2)  Livello di quantizzazione più vicino
> $$
> \text{livello} = \frac{37.913 - 14.4}{0.10039} \approx 234.04 \Rightarrow 234
> $$
> 3) Valore rappresentato
> $$
> \text{valore rappresentato} = 14.4 + 234 \times 0.10039 = 14.4 + 23.49126 = 37.89126
> $$
> 4) Errore di approssimazione
> $$
> \text{errore} = 37.913 - 37.89126 = 0.02174 \approx 0.022
> $$

**Altri esempi noti:**
![[zen_t87J5naFWl.png]]
#### Operazione binaria (calcolatrice)
> [!Question] Complemento a 2
> ![[ApplicationFrameHost_PkVwETRamW.png]]
> Sommare con calcolatrice.

> [!Question] Eccesso
> ![[zen_QxJ3YgfWfr.png]]
> Convertire il binario in decimale e poi fare -128.
#### Domande teoriche
> [!Example] Domanda sugli intervalli di rappresentazione
> La risposta è sempre {- numero (32/16)}{+ numero -1 (31/15)}
> ![[Obsidian_NixbY1JuoL.png]]

---
### Filtro 2 - Circuiti Logici
#### Tabella di verità
> [!QUESTION] Esecuzione
> Guardare solo gli 1 in D $\rightarrow$ Lettera con trattino = 0.
![[zen_gep6aH8AcQ.png]]
#### Domande Note

![[zen_gIjAGeCowE.png]]

> [!Info]
> ![[Pasted image 20251017155034.png]]
> ![[zen_DcWPaq4Ooe.png]]
> ![[zen_ttueUSGgIg.png]]
> ![[zen_EusTc32plC.png]]
> ![[zen_zKDg4ZWTDX.png]]
### Filtro 3 - Instruction Set Architecture (QtSpim)
#### Conversioni
>[!QUESTION] Esecuzione
> Creare file .asm
> Inserire nel file:
> ```
> .text
> main:
> CASO 1 .word {0xEsadecimale (nel caso convertire binario -> esadecimale)}
> CASO 2 oppure istruzione assembly tipo {}
> ```

> [!NOTE] Caso 1: Binario/Esadecimale -> Assembly
> Dopo aver caricato il file (senza runnare), a sinistra dell'istruzione compariranno i numeri (tipo $5...) che corrispondono alla lista dei registri (tipo R5...).
> (Esempio)
> `00110000110100110000000000001010 -> .word 0x30D3000A -> andi $19, $6, 10`
> ![[QtSpim_YGv52GmJ4M.png]]

>[!NOTE] Caso 2: Assembly -> Esadecimale/Binario
> Stesso procedimento ma guardare l'esadecimale prima dell'istruzione.
> (Esempio)
> ![[Pasted image 20251020163531.png]]
> `lw $s0, 96($sp) -> 8fb00060`
#### Esempi domande
Binario $\rightarrow$ Assembly
![[zen_O9DijRfCNz.png]]
Assembly $\rightarrow$ Esadecimale
![[zen_b3vL7iSuIV.png]]
Assembly $\rightarrow$ Binario
![[zen_l6BqRpS4ur.png]]
### Filtro 4 - Linguaggio Assembly (QtSpim)
#### Valore di un determinato registro
> [!QUESTION] Esecuzione:
> Copiare nel blocco note il programma e salvarlo .asm, caricare su qtspim e runnare.
> Controllare il registro richiesto.

**Esempi**
![[zen_Vc5ZKEbkDc.png]]
![[zen_Ge0LoTNV0R.png]]
![[zen_7HlYf8ydwX.png]]
#### Valore contenuto nell'indirizzo
> [!QUESTION] Esecuzione:
> Convertire in decimale gli ultimi caratteri dell'indirizzo (Es. 1C $\rightarrow$ 28) e poi dividere per 4 (es. 7) prendere l'ennesimo word in ordine (settimo .word {numero = risposta}).

![[zen_1OTGAYwH2Z.png]]
### Domande miste Primo Parziale (Filtro Unknown)
#### MIPS34 Register file
![[zen_GrNRPDzS0L.png]]
> [!Question] Esecuzione
> Confrontare i due dati iniziali (ReadRegister1/2 Binario{01000} = numero registro in decimale {$8}) con WriteRegister, quello che corrisponde viene sovrascritto con il valore di WriteData.

> [!abstract] Eccezione
> ![[zen_o91ZHhEg5o.png]]
> **Risposta:** In questo caso non scrive nulla perché write = 0
#### Procedure (A e B)
> [!Info] Consegna
> Due procedure (A e B) sono state assemblate separatamente e i file oggetto risultanti sono linkati mettendo quello di A prima di quello di B **X** .

| X                                                     | Risposta                                                             |
| ----------------------------------------------------- | -------------------------------------------------------------------- |
| "File oggetto"                                        | Indefinito.                                                          |
| "File eseguibile, chiamata A, la procedura B (jal B)" | Sommare 0x00400000 la dimensione del testo di A.                     |
| "Indirizzo base"                                      | l'indirizzo di partenza.                                             |
| "File eseguibile, chiamata B, procedura A (jal A)"    | o si somma la dimensione del teto di A o si prende l'indirizzo base. |
#### Calcolo indirizzo SW
> [!Info] Consegna
> Supponendo che i registri contengano i seguenti valori:
> - `$a2 = 0x10008004`
> - `$t1 = 0x10008008`
> - `$t4 = 0x1000800C`
> - `$t7 = 0x10008010`
> - `$s2 = 0x10008000`
> - `$s7 = 0x10008018`
> Dire a quale indirizzo di memoria la seguente istruzione salva il valore contenuto nel registro indicato:
> `sw $s4, 0x1C($t1)`

> [!Question] Esecuzione
> Valore di ($t1 = 0x10008008) + (Offset = 0x1C)
> **Risposta:** 0x10008024
#### Calcolo frequenza
> [!Info] Consegna: 
> Un segnale periodico ha frequenza di 33MHz. Qual è il suo periodo?

> [!Question] Esecuzione: 
> f (frequenza){Hz} = 33MHz
> T (periodo){s} = ?
> $$
> f = \frac{1}{T} = \frac{1}{33 \cdot 10^6} = 33 \cdot 10^9 s = 33 ns
> $$

---
## Secondo parziale
### Filtro 6 - Datapath
#### Riassunto Domande (Con risposte della tipa dai colori incredibili)
> [!Info] Consegna: 
> Facendo riferimento alla CPU multiciclo vista a lezione, riportata per comodita' in figura, e alla relativa logica di controllo per la implementazione delle istruzioni add, and, beq, j, lw, or, slt, sub, sw, si chiede la lista di tutte le istruzioni in cui **(x)**.

> [!Question] Risposte
> **(x) =**
> 1) **Avviene una scrittura nel register file**: add, and, lw, or, slt, sub.
> 2) **La ALU usa il registro A come sorgente di una delle sue operazioni**: tutte meno j.
> 3) **La ALU usa il registro B come sorgente di una delle sue operazioni**: add, and, beq, or, slt, sub.
> 4) **Viene utilizzato il contenuto del registro B**: add, and, beq, or, slt, sub, sw.
> 5) **Durante la cui realizzazione (fetch + execute) la ALU effettua tre somme:** add, lw, sw.
> 6) **Durante la cui realizzazione (fetch + execute) la ALU effettua due o più somme:** tutte le istruzioni.
> 7) **Durante la cui realizzazione (fetch + execute) la ALU effettua due somme ed una sottrazione:** sub, beq.
> 8) **Durante la cui realizzazione (fetch + execute) la ALU effettua esattamente due somme (e non tre):** and, beq, j, or, slt, sub.
> 9) **Durante la cui realizzazione (fetch + execute) la ALU effettua una sottrazione:** sub, beq.

> [!abstract] Eccezione
> **Consegna:** Facendo riferimento alla CPU multiciclo vista a lezione, riportata per comodita' in figura, e alla relativa logica di controllo, si supponga di affrontare in modo diverso da quanto visto a lezione il problema di salvare il PC in EPC per la gestione delle eccezioni. Si supponga di salvare all'inizio di ogni istruzione (fase di fetch) il valore del PC in EPC, utilizzando hardware apposito, in modo da evitare la sottrazione di 4 necessaria se il salvataggio avviene nelle fasi successive. Tale soluzione funziona? 
> **funziona, il PC viene salvato, ma non si risparmia nulla in termini di cicli di clock.**
#### Tabella Riassuntiva 

| Istruzione | Scrive nel Register File | ALU usa registro A | ALU usa registro B | Usa contenuto registro B | ALU fa 3 somme | ALU fa ≥2 somme | ALU fa 2 somme + 1 sottrazione | ALU fa esattamente 2 somme | ALU fa 1 sottrazione |
| ---------- | ------------------------ | ------------------ | ------------------ | ------------------------ | -------------- | --------------- | ------------------------------ | -------------------------- | -------------------- |
| **add**    | ✅                        | ✅                  | ✅                  | ✅                        | ❌              | ✅               | ❌                              | ✅                          | ❌                    |
| **sub**    | ✅                        | ✅                  | ✅                  | ✅                        | ❌              | ✅               | ✅                              | ❌                          | ✅                    |
| **and**    | ✅                        | ✅                  | ✅                  | ✅                        | ❌              | ✅               | ❌                              | ✅                          | ❌                    |
| **or**     | ✅                        | ✅                  | ✅                  | ✅                        | ❌              | ✅               | ❌                              | ✅                          | ❌                    |
| **slt**    | ✅                        | ✅                  | ✅                  | ✅                        | ❌              | ✅               | ✅                              | ❌                          | ❌                    |
| **lw**     | ✅                        | ✅                  | ✅                  | ✅                        | ❌              | ✅               | ❌                              | ✅                          | ❌                    |
| **sw**     | ❌                        | ✅                  | ✅                  | ✅                        | ❌              | ✅               | ❌                              | ✅                          | ❌                    |
| **beq**    | ❌                        | ✅                  | ✅                  | ✅                        | ❌              | ❌               | ✅                              | ❌                          | ✅                    |
| **j**      | ❌                        | ❌                  | ❌                  | ❌                        | ❌              | ❌               | ❌                              | ❌                          | ❌                    |

---
### Filtro 7 - Gestione Eccezioni
#### Esercizio Eccezioni
> [!Note] Consegna
> Se il registro Cause assume il valore **(x)**, quale eccezione si e' verificata?
>  **(x)** = 0x00000100, 0x00000018, 0x00000200, 0x00000020, 0x00000014, 0x00000030.

> [!Question] Esecuzione:
> Convertire in binario, prendere dal secondo al sesto bit (contando da destra) e convertire in decimale, cercare poi il numero dell'eccezione corrispondente sull'appendice A (Desktop) a pagina 34.

>[!Abstract] Eccezione:
>0x00000000 = Nessun errore.
#### Domande Teoriche
> [!Example] A memoria
> - **Quali registri generali deve preservare un gestore delle eccezioni MIPS?** tutti i registri generali utilizzati, compreso $at, ma esclusi $k1 e $k0.
> - **Nell'architettura di riferimento MIPS, secondo le convenzioni software utilizzate da PC SPIM, il gestore delle eccezioni puo' essere collocato:** solo a partire dalla locazione 0x80000180.

---
### Filtro 8 - I/O
#### Domanda sul codice
```
1>   li $t3,32
2>   la $t4,0x10001100
3>   la $t0,0x80000440

4>   L2:
5>   beq $t3,$0,L3

6>   L1:
7>   lw $t1, 0($t0)
8>   li $t2,1
9>   and $t1,$0,L1
10>  lw $t1,-4($t0)
11>  sw $t1,0($t4)

12>  addi $t3,$t3,-1
13>  addi $t4,$t4,4
14>  j L2

15>  L3:
```

> [!Info] Spiegazione per riga
> Le righe scritte normali sono le risposte esatte del prof mentre le righe in corsivo sono spiegazioni ma non l'esatta terminologia del prof.
> - **1>** Il valore rappresenta il numero di dati da inserire.
> - **2>** _Carica il valore 0x10001100 nel registro $t4, indirizzo trasferimento dati_.
> - **3>** Carica l'indirizzo 0x800004400 nel registro $t0, questo è l'indirizzo della periferica da cui leggere i dati.
> - **4>** _Etichetta inizio del ciclo principale di trasferimento dati._
> - **5>** Viene verificato se siano finiti i dati.
> - **6>** Etichetta: punto di ritorno per continuare a controllare se la periferica è pronta.
> - **7>** Il registro dati della periferica si trova a 0x80000440 e viene prelevato dalla periferica e copiato.
> - **8>** Carica il valore 1 nel registro $t2 questo sarà usato per verificare il bit di ready della periferica
> - **9>** Vengono azzerati tutti i bit del registro in cui è stato copiato il registro di stato della periferica tranne il bit **meno** significativo.
> - **10>** Verifica se la periferica si trova in stato di "ready".
> - **11>** Carica in $t1 il valore presente a 4 byte prima di quello in $t0 (0x8000043C) rappresenta il dato effettivo da trasferire.
> - **12>** Il dato proveniente dalla periferica viene scritto in memoria.
> - **13>** _Decremento in $t3 di 1, questo riduce il contatore dei dati da trasferire._
> - **14>** incremento $t4 di 4, sposto l'indirizzo di destra avanti di 4 byte (1 word) preparando il prossimo dato da trasferire.
> - **15>** _Si salta incondizionalmente al trasferimento del prossimo dato._

> [!Abstract] Eccezione: Spiegazione dell'intero codice
> Ciclo _x (32)_ volte da _x (32)_ bit ciascuno dove prendiamo il dato che si trova a 4 _bit/indirizzi_ _prima/dopo_ il registro di stato
#### Domande Teoriche
> [!Example] Risposte da imparare a memoria
> Se la risposta contiene "Corrispondentemente" è quella giusta
> Se non è presente allora la risposta corretta è "Nessuna delle precedenti".
> ![[ApplicationFrameHost_GNIeBuXYkF.png]]

Questi appunti sono risposte alle domande teoriche divise per i due argomenti principali:

> [!Example] DMA (Direct Memory Access)
> - Il DMA è più efficiente rispetto al controllo di programma ed interruzione perché la CPU è impegnata solo per predisporre l'inizio e gestire il termine.
> - Il DMA richiede un circuito dedicato, concettualmente pensabile interno alla periferica.
> - Il Processore dopo aver avviato il DMA è libero di proseguire l'esecuzione di programmi
> - Il DMA richiede l'utilizzo di più registri periferica rispetto al controllo di programma

> [!Example] I/O Memory Mapped
> - Nel caso I/O MM il bit ready di una periferica fisicamente è realizzato nei circuiti di una periferica di I/O, ma appare come uno dei bit di una specifica locazione dello spazio di indirizzamento di memoria. (La risposta più lunga)
> - Nel caso I/O MM la CPU può fare I/O accedendo ai registri dati e controllo della periferica come se fossero normali locazioni di memoria
> - Vantaggio principale di I/O MM: il set di istruzioni della CPU non deve essere esteso con istruzioni specifiche per accedere ai dispositivi di I/O

---
### Filtro 9 - Cache
#### Write Buffer (write-trough & write-back)
> [!Tip] Domanda con errore di scrittura del prof:
>Quando si impiega una cache, due modalità di gestione delle operazioni di scrittura in memoria sono "write-trough" e "write-back".
>Una di queste due modalità migliora le prestazioni se adotta anche il sistema chiamato "Write Buffer".
> Indicare una delle seguenti affermazioni riguardo a "Write Buffer" è corretta in ogni sua parte:
> 1) Il Write Buffer è esattamente 1kB di cache aggiuntiva ed è usato in caso di modalità di scrittura "write-back".
> 2) Il Write Buffer è un gruppo di registri interni della CPU ed è usato in caso di modalità di scrittura "write-back".
> 3) Il Write Buffer è un piccolo spazio di **memorizzzione** aggiuntivo ed è usato per migliorare le prestazioni della modalità di scrittura "write-trough".
> 4) Il Write Buffer è usato solo con la modalità di scrittura "write-back", e se mai dimensionato potrebbe bloccarsi.
> 5) Il Write Buffer è gestito sempre dall'algoritmo LRU ed è usato in caso di modalità di scrittura "write-trough".
> **Risposta corretta:** 3) Memorizzzione (errore di scrittura del prof)
#### Esercizio write-back
> [!Info] Consegna
> Si supponga di scrivere dati in maniera sequenziale in un vettore posizionato in memoria da X a Y (estremi inclusi, indirizzamento al byte). Vi sia una cache a mappaggio diretto con Z blocchi da N word; se la cache, inizialmente vuota, alloca sulla scrittura e adotta una politica di write-back, quanti write-back ci saranno dopo aver scritto tutto il vettore?

> [!Question] Esecuzione
> Byte del vettore:  
> $$B = Y - X + 1$$
> Dimensione di un blocco (byte):  
> $$L = N \cdot W$$
> Blocchi di memoria attraversati:  
> $$M = \left\lceil \frac{B}{L} \right\rceil$$
> Cache diretta, write-allocate, write-back:
> - ogni blocco scritto diventa dirty;
> - il write-back avviene solo su rimpiazzo di una linea dirty.
> Numero di write-back:  
> $$WB = \max(0, M - Z)$$
#### Calcolo indirizzamento
**Esempio:**
![[Obsidian_qByqlMStgy.png]]
> [!Note] Dati:
> - 16 blocchi
> - 4 words (4 byte per word)
> - Indirizzo = 64

> [!Question] Esecuzione:
> 1) Calcolo blocco in byte: $\text{numero words} \ \times \ \text{byte per word (sempre 4)} \Rightarrow \  4 \ \times 4 = 16 \text{byte}$
> 2) Calcolo numero blocco memoria: $\frac{\text{indirizzo}}{\text{blocco in byte}} \Rightarrow \frac{64}{16} = 4$
> 3) Calcolo blocco cache: $\text{Numero blocco memoria} \ mod \ \text{Numero blocchi cache} \Rightarrow 4 \ mod \ 16 = 4$
#### Calcolo media di CPI (Cicli Per Istruzione)
**Tipo 1:**
![[Obsidian_nJ5eBwEO3B.png]]
> [!Note] Dati:
 > - Hit value: 10 CPI
 > - Miss value: 15 CPI
 > - Hit probability: 0.8 $\Rightarrow$ Miss probability: 0.2

> [!Question] Esecuzione:
> $$
> (10 \cdot 0.8) + (15 \cdot 0.2) = 8 + 3 = 11 \ \text{CPI}
> $$

**Tipo 2:**
![[Obsidian_y5zyg78hbC.png]]
> [!Note] Dati:
> - Frequenza: 2.2 GHz ($2.2 \cdot 10^9 \text{Hz}$)
> - Hit Value: 10 CPI
> - Miss Value: 15 CPI
> - Hit probability: 0.8 $\Rightarrow$ Miss probability: 0.2

> [!Question] Esecuzione:
> $$
> \frac{2.2 \cdot 10^9}{(10 \cdot 0.8) + (15 \cdot 0.2)} = 200 000 000
> $$
#### Miss durante Loop
**Tipo 1:**
![[Obsidian_SpfaoqwnuC.png]]
> [!Note] Dati:
> - Blocchi: 4
> - Word per blocco: 2
> - Accessi in memoria: 5, 2, 3, 4, 4
> - Numero cicli: 2

> [!Question] Esecuzione:
> 1) Calcolo blocco in byte: $\text{blocchi} \ \times \ \text{word} = 4 x 2 = 8 Byte$
> 2) Calcolo Indirizzi in byte per indirizzo: $\text{indirizzo-accesso} \ \times \ \text{word} = (5 \times 4) \ (2 \times 4) \ (3 \times 4) \ (4 \times 4) \ (4 \times 4)$
> 3) Calcolo numero miss per indirizzo (1 ciclo): $\frac{\text{indirizzo-accesso}}{\text{blocco}} = \frac{20}{8} = 2$
> 4) Modulo 3) mod blocchi: $2 \ \text{mod} \ 4 = 2$ 
> 5) Segni come miss se l'indirizzo di cache è vuoto o non è presente.

**Tipo 2:**
![[Obsidian_ttDk9TqpWR.png]]
> [!Note] Dati:
> - Blocchi: 4
> - Word per blocco: 2
> - Accessi in memoria: 7, 5, 6, 4, 7
> - Numero cicli: 6

> [!Question] Esecuzione:
> 1) Calcolo numero miss per indirizzo (1 ciclo): $\frac{\text{indirizzo-accesso}}{\text{blocco}} = \frac{7}{2} = 3$
> 2) Modulo 3) mod blocchi: $3 \ \text{mod} \ 4 = 3$ 
> 3) Segni come miss se l'indirizzo di cache è vuoto o non è presente.
### Domande miste secondo parziale
