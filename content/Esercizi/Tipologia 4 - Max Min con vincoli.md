#Matematica2 #EsercizioGuida
> [!Question] **Consegna**  
> Determinare i punti di massimo e minimo assoluti della funzione:  
> $f(x,y,z) = x + z$  
> sulla curva ottenuta intersecando:  
> $x^2 + 3y^2 = 3$ con il piano $y + z = 0$.

---
## 1) Riduzione del problema
La curva è data dall'intersezione tra una **superficie cilindrica ellittica** e un **piano**.  
Per semplificare, usiamo il piano per eliminare una variabile.
Dal piano:  
$y + z = 0 \Rightarrow z = -y$.
Sostituendo in $f$:
$$
 f(x,z) = x + z \Rightarrow f(x,y) = x - y
$$
Con vincolo (ellisse nel piano $(x,y)$):
$$
 h(x,y) = x^2 + 3y^2 = 3.
$$

> [!Info] **Schema generale**  
> 1. Usa le equazioni per ridurre il numero di variabili (sostituzione).  
> 2. Riscrivi $f$ in funzione delle variabili rimaste.  
> 3. Applica Lagrange con il vincolo non lineare (ellisse, circonferenza, ecc.).
## 2) Lagrangiana
La Lagrangiana è:

$$
\mathcal{L}(x,y,\lambda) = f(x,y) - \lambda (h(x,y) - 3) = x - y - \lambda(x^2 + 3y^2 - 3).
$$

> [!Note] **Lagrangiana del problema**  
> $$
> \mathcal{L}(x,y,\lambda) = x - y - \lambda(x^2 + 3y^2 - 3)
> $$
## 3) Condizioni di stazionarietà
Calcoliamo le derivate parziali e imponiamo il sistema di Lagrange:
$$
\begin{cases}
\mathcal{L}_x = 1 - 2\lambda x = 0 \\[4pt]
\mathcal{L}_y = -1 - 6\lambda y = 0 \\[4pt]
h(x,y) = x^2 + 3y^2 = 3
\end{cases}
$$
Da cui:
$$
1 - 2\lambda x = 0 \Rightarrow x = \frac{1}{2\lambda}
$$
$$
-1 - 6\lambda y = 0 \Rightarrow 6\lambda y = -1 \Rightarrow y = -\frac{1}{6\lambda}.
$$
> [!Note] **Relazione tra x e y**  
> $$
> x = \frac{1}{2\lambda}, \quad y = -\frac{1}{6\lambda}
> $$
## 4) Applicazione del vincolo
Imponiamo il vincolo ellittico:
$$
x^2 + 3y^2 = 3.
$$
Sostituiamo $x$ e $y$:
$$
x^2 + 3y^2 = \left(\frac{1}{2\lambda}\right)^2 + 3\left(-\frac{1}{6\lambda}\right)^2 = \frac{1}{4\lambda^2} + 3\cdot\frac{1}{36\lambda^2}.
$$
$$
\frac{1}{4\lambda^2} + \frac{1}{12\lambda^2} = \frac{1}{3\lambda^2}.
$$
Imponiamo il vincolo:
$$
\frac{1}{3\lambda^2} = 3.
$$
Quindi:
$$
\frac{1}{\lambda^2} = 9 \Rightarrow \lambda^2 = \frac{1}{9} \Rightarrow \lambda = \pm \frac{1}{3}.
$$
> [!Note] **Valori di $\lambda$**  
> $\lambda = \frac{1}{3}$ oppure $\lambda = -\frac{1}{3}$.
## 5) Calcolo dei punti
Ricaviamo ora i punti corrispondenti nei due casi.
### Caso 1: $\lambda = \frac{1}{3}$
$$
x = \frac{1}{2\cdot\frac{1}{3}} = \frac{3}{2}, \quad y = -\frac{1}{6\cdot\frac{1}{3}} = -\frac{1}{2}.
$$
Dal piano $y + z = 0$:
$$
z = -y = \frac{1}{2}.
$$
Valore della funzione:
$$
f = x + z = \frac{3}{2} + \frac{1}{2} = 2.
$$
> [!Note] **Punto corrispondente (massimo)**  
> $$
> (x,y,z) = \left(\frac{3}{2}, -\frac{1}{2}, \frac{1}{2}\right), \quad f = 2.
> $$

### Caso 2: $\lambda = -\frac{1}{3}$
$$
x = \frac{1}{2\cdot(-\frac{1}{3})} = -\frac{3}{2}, \quad y = -\frac{1}{6\cdot(-\frac{1}{3})} = \frac{1}{2}.
$$
Dal piano $y + z = 0$:
$$
z = -y = -\frac{1}{2}.
$$
Valore della funzione:
$$
f = x + z = -\frac{3}{2} - \frac{1}{2} = -2.
$$
> [!Note] **Punto corrispondente (minimo)**  
> $$
> (x,y,z) = \left(-\frac{3}{2}, \frac{1}{2}, -\frac{1}{2}\right), \quad f = -2.
> $$
## 6) Conclusione
> [!Success] **Punti di massimo e minimo assoluto sulla curva**  
> **Massimo assoluto:** $f = 2$ nel punto  
> $\left(\frac{3}{2}, -\frac{1}{2}, \frac{1}{2}\right)$.  
> **Minimo assoluto:** $f = -2$ nel punto  
> $\left(-\frac{3}{2}, \frac{1}{2}, -\frac{1}{2}\right)$.

---