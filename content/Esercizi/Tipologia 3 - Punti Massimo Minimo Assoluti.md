#Matematica2 #EsercizioGuida
Nel [[University Backup/Courses/Matematica 2/Vangelo Olcio|Vangelo secondo Olcio]] verso 1;1 ci dice di utilizzare Lagrange per le forme geometriche semplici (quadrati, rettangoli, triangoli) e di utilizzare la parametrizzazione per il resto.
Olcio è un coglione è l'esatto opposto.
**Lagrange va usato per curve non lineari come circonferenze e parabole, mentre per dei bordi lineari è una perdita di tempo.**
[[obsidian-vault/University/Courses/Matematica 2/Formulario Parametrizzazione e Vincoli|Formulario Parametrizzazione e Vincoli]]
## Lagrange ($\lambda$) – Sfera

> [!Question] **Consegna**  
> Trovare i punti di massimo e minimo assoluti della funzione:  
> $f(x,y,z) = x + 2y + 3z$  
> soggetta al vincolo (sfera):  
> $g(x,y,z) = x^2 + y^2 + z^2 - 14 = 0$.
### Idea generale (Metodo di Lagrange)
- Vogliamo estremizzare $f$ **sulla superficie** $g(x,y,z)=0$ (non in tutto $\mathbb{R}^3$).
- Nei punti di massimo/minimo vincolati vale che il gradiente di $f$ è **parallelo** al gradiente del vincolo:
    $$\nabla f = \lambda , \nabla g$$
- Operativamente:
    1. si costruisce la **Lagrangiana** $\mathcal{L}$,
    2. si impone $\nabla \mathcal{L} = 0$ (sistema in $x,y,z,\lambda$),
    3. si applica il vincolo per trovare i punti,
    4. si valuta $f$ nei punti trovati.
### Lagrangiana

> [!Info] **Gradiente**  
> Il gradiente $\nabla f$ è il vettore delle derivate parziali della funzione.  
> Per Lagrange sfruttiamo il fatto che, sui punti di estremo vincolato, $\nabla f$ e $\nabla g$ sono paralleli.

Formula generale:  
$$  
\mathcal{L}(x,y,z,\lambda) = f(x,y,z) - \lambda, g(x,y,z)  
$$
> [!Note] **Lagrangiana del problema**  
> $$  
> \mathcal{L}(x,y,z,\lambda) = x + 2y + 3z - \lambda (x^2 + y^2 + z^2 - 14)  
> $$
### Condizione di stazionarietà
Calcoliamo le derivate parziali di $\mathcal{L}$ ed imponiamo $\nabla \mathcal{L} = 0$ (equivalente a $\nabla f = \lambda , \nabla g$ assieme al vincolo):

> [!Note] **Sistema dalle derivate parziali**  
> $$  
> \begin{cases}  
> \mathcal{L}_x = 1 - 2\lambda x = 0 \\
> \mathcal{L}_y = 2 - 2\lambda y = 0 \\
> \mathcal{L}_z = 3 - 2\lambda z = 0 \\
> x^2 + y^2 + z^2 = 14
> \end{cases}  
> $$  
> Dalle prime tre equazioni otteniamo:  
> $$  
> x = \frac{1}{2\lambda}, \qquad  
> y = \frac{2}{2\lambda} = \frac{1}{\lambda}, \qquad  
> z = \frac{3}{2\lambda}.  
> $$  
> Quindi il punto $(x,y,z)$ è proporzionale al vettore $(1,2,3)$:  
> $$  
> (x,y,z) = \frac{1}{2\lambda} (1,2,3).  
> $$
### Applicazione del vincolo
Ora imponiamo il vincolo $x^2 + y^2 + z^2 = 14$ usando la forma trovata di $(x,y,z)$.
> [!Note] **Uso del vincolo**  
> $$  
> x^2 + y^2 + z^2 = \left(\frac{1}{2\lambda}\right)^2 (1^2 + 2^2 + 3^2) = \left(\frac{1}{2\lambda}\right)^2 (1 + 4 + 9).  
> $$  
> Poiché $1 + 4 + 9 = 14$, otteniamo:  
> $$  
> x^2 + y^2 + z^2 = \frac{14}{4\lambda^2} = 14.  
> $$  
> Da cui:  
> $$  
> \frac{14}{4\lambda^2} = 14 ;\Rightarrow; \frac{1}{4\lambda^2} = 1 ;\Rightarrow; 4\lambda^2 = 1 ;\Rightarrow; \lambda = \pm \frac{1}{2}.  
> $$
### Sostituzione: punti critici vincolati

Sostituiamo i valori di $\lambda$ nelle espressioni di $x,y,z$.

> [!Note] **Punti trovati**  
> Per $\lambda = \tfrac{1}{2}$:  
> $$  
> x = \frac{1}{2\cdot (1/2)} = 1, \quad  
> y = \frac{1}{1/2} = 2, \quad  
> z = \frac{3}{2\cdot (1/2)} = 3  
> $$  
> quindi il punto è $(1,2,3)$.
> 
> Per $\lambda = -\tfrac{1}{2}$:  
> $$  
> x = \frac{1}{2\cdot (-1/2)} = -1, \quad  
> y = \frac{1}{-1/2} = -2, \quad  
> z = \frac{3}{2\cdot (-1/2)} = -3  
> $$  
> quindi il punto è $(-1,-2,-3)$.
### Valutazione della funzione
Ora valutiamo $f$ nei punti trovati per determinare massimo e minimo assoluti sul vincolo.

> [!Success] **Risultato finale**  
> $$  
> f(1,2,3) = 1 + 2\cdot 2 + 3\cdot 3 = 1 + 4 + 9 = 14  
> $$  
> $$  
> f(-1,-2,-3) = -1 + 2\cdot(-2) + 3\cdot(-3) = -1 - 4 - 9 = -14  
> $$  
> Quindi:
> - **Massimo assoluto:** $f = 14$ nel punto $(1,2,3)$
> - **Minimo assoluto:** $f = -14$ nel punto $(-1,-2,-3)$

---
### Osservazione geometrica (facoltativa)

Su una sfera centrata nell'origine, una funzione lineare del tipo $f(x,y,z) = a x + b y + c z$ assume massimo e minimo in due punti **antipodali** (opposti), lungo la direzione del vettore $(a,b,c)$.  
Qui il vettore è $(1,2,3)$ e i punti estremali sono $(1,2,3)$ e $(-1,-2,-3)$, che stanno proprio sulla sfera $x^2 + y^2 + z^2 = 14$.
## Parametrizzazione – Triangolo
> [!Question] **Consegna Esempio**  
> Determinare i punti di massimo e minimo assoluti della funzione:  
> $f(x,y) = x^2 + y^2$  
> sulla regione definita dal triangolo di vertici:  
> $(4,3), (4,-3), (5,0)$.

---
### 0) Calcolo dei vertici
Calcolare il valore della funzione su ogni vertice per controllare se sono candidati per max/min assoluti (perché nei poligoni i vertici sono punti in cui il bordo non è liscio).
Per ogni vertice $(x_i,y_i)$:
$$
f(x_i,y_i)
$$
> [!Note] **Nell'esempio**  
> $f(4,3) = 4^2 + 3^2 = 16 + 9 = 25$  
> $f(4,-3) = 4^2 + (-3)^2 = 16 + 9 = 25$  
> $f(5,0) = 5^2 + 0^2 = 25$
>
> Tutti e tre i vertici hanno valore $f = 25$.

---
### 1) Punto interno
Per prima cosa si calcola la gradiente e si cercano i punti critici interni.
Gradiente:
$$
\nabla f = (f_x, f_y) = (2x, 2y)
$$
Punti critici quando:
$$
(2x,2y) = (0,0) \;\Rightarrow\; x=0,\; y=0
$$
> [!Note] **Punto critico**  
> Il punto critico è $(0,0)$ ma **non appartiene** al triangolo di vertici $(4,3),(4,-3),(5,0)$, quindi **si scarta**.  
> In questo esempio non ci sono punti critici interni → tutti gli estremi assoluti saranno sui lati.

---
### 2) Analisi dei bordi con parametrizzazione
Il triangolo ha tre lati. In generale, per ciascun lato:
- si ricava una parametrizzazione del segmento usando un parametro $t$,  
- si costruisce la funzione ristretta $f(t)$,  
- si studia $f(t)$ su $[0,1]$ per trovare eventuali estremi interni.
#### Struttura generale per ogni lato
Per ogni lato con vertici $P_1$ e $P_2$:
1. **Parametrizzazione del segmento**
   $$
   (x(t), y(t)) = P_1 + t(P_2 - P_1), \quad t \in [0,1]
   $$
2. **Funzione su quel lato**
   $$
   f(t) = f(x(t), y(t))
   $$
3. **Studio di $f(t)$**
   - Calcolo $f(0), f(1)$ (coincidono con i valori della funzione nei vertici).  
   - Calcolo $f'(t)$ per cercare eventuali min/max interni → altri candidati.

---
#### Lato L1 – da $(4,3)$ a $(4,-3)$
> [!Note] **Equazione e parametrizzazione del lato**  
> Il lato è verticale: $x = 4$.  
> Possiamo parametrizzare:  
> $$
> (x(t), y(t)) = (4, 3 - 6t), \quad t \in [0,1]
> $$
> Quindi la funzione ristretta diventa:  
> $$
> f(t) = x(t)^2 + y(t)^2 = 4^2 + (3 - 6t)^2 = 16 + (3 - 6t)^2
> $$
> Studiamo $f(t)$:  
> il termine $16$ è costante, il minimo dipende da $(3 - 6t)^2$.  
> Non serve derivare perché si tratta di un quadrato che sappiamo ha il minimo quando si annulla.
> Si annulla quando $3 - 6t = 0 \Rightarrow t = \tfrac{1}{2}$.  
> Per $t = \tfrac{1}{2}$:  
> $$
> (x(1/2),y(1/2)) = (4, 3 - 6\cdot\tfrac{1}{2}) = (4,0)
> $$
> $$
> f(4,0) = 4^2 + 0^2 = 16
> $$
> Quindi sul lato L1:  
> - $f_{\min} = 16$ nel punto $(4,0)$ (interno al lato),  
> - ai vertici $(4,3)$ e $(4,-3)$ abbiamo $f = 25$.

---
#### Lato L2 – da $(4,3)$ a $(5,0)$
> [!Note] **Parametrizzazione e studio**  
> Parametrizziamo il segmento:  
> $$
> (x(t), y(t)) = (4,3) + t\big((5,0) - (4,3)\big) = (4 + t, 3 - 3t), \quad t \in [0,1]
> $$
> Funzione ristretta:  
> $$
> f(t) = (4+t)^2 + (3 - 3t)^2
> $$
> Sviluppiamo:  
> $$(4+t)^2 = 16 + 8t + t^2$$  
> $$(3 - 3t)^2 = 9 - 18t + 9t^2$$  
> $$f(t) = 25 - 10t + 10t^2$$
> Derivata (serve derivare perché è una parabola e dobbiamo trovare il punto critico):  
> $$
> f'(t) = -10 + 20t
> $$
> Punto critico: $f'(t) = 0 \Rightarrow t = \tfrac{1}{2}$.  
> Valore nel punto critico:  
> $$
> f\big(\tfrac{1}{2}\big) = 25 - 10\cdot\tfrac{1}{2} + 10\cdot\tfrac{1}{4} = 25 - 5 + 2.5 = 22.5
> $$
> Quindi sul lato L2 il valore minimo interno è $22.5$ e i vertici danno $25$.

---
#### Lato L3 – da $(4,-3)$ a $(5,0)$
> [!Note] **Parametrizzazione e studio**  
> Parametrizziamo:  
> $$
> (x(t), y(t)) = (4,-3) + t\big((5,0) - (4,-3)\big) = (4 + t, -3 + 3t), \quad t \in [0,1]
> $$
> Funzione ristretta:  
> $$
> f(t) = (4+t)^2 + (-3 + 3t)^2
> $$
> Sviluppando si ottiene la **stessa** espressione:  
> $$
> f(t) = 25 - 10t + 10t^2
> $$
> Quindi come per il lato L2:  
> - punto critico in $t = \tfrac{1}{2}$,  
> - valore minimo interno $f = 22.5$,  
> - ai vertici il valore è $25$.

---
### 3) Conclusione
A questo punto si confrontano **tutti i valori candidati**:
- vertici: $f = 25$  
- punto interno del lato L1: $f = 16$ in $(4,0)$  
- punti interni di L2 e L3: $f = 22.5$  
- nessun punto critico interno al triangolo.

> [!Success] **Punti di massimo e minimo assoluto (esempio)**  
> **Minimo assoluto:** $f = 16$ nel punto $(4,0)$  
> **Massimo assoluto:** $f = 25$ nei vertici $(4,3)$, $(4,-3)$, $(5,0)$.

In generale, per un triangolo (o poligono chiuso e limitato):
- si valutano sempre i **vertici**,  
- si cercano eventuali **punti critici interni**,  
- si studiano i **lati** con parametrizzazione e si trovano eventuali estremi su ciascun lato,  
- infine si confrontano tutti i valori ottenuti per individuare max e min assoluti.