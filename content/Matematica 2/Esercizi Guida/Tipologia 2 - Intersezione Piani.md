#Matematica2 #EsercizioGuida
> [!Info] Obbiettivo esercizio
> Esercizio che richiede di intersecare due piani e trovare il punto sulla retta più vicino ad un punto dato.
## Parametrizzazione – Distanza minima da un punto

> [!Question] **Consegna (Esempio 1)**  
> Determinare il punto sulla retta ottenuta intersecando i piani:  
> $2x - z = 0$,  
> $x + y = 3$.  
> che si trova a **minima distanza** dal punto $P_0 = (1,0,1)$.
### 1) Parametrizzare la retta
Per trovare l'intersezione tra due piani, poniamo una variabile uguale a $t$ e ricaviamo le altre.
Da $x = t$:
- $z = 2x = 2t$
- $y = 3 - x = 3 - t$

> [!Note] **Parametrizzazione finale**  
> $$r(t) = (x(t),y(t),z(t)) = (t,, 3 - t,, 2t)$$
### 2) Minimizzare la distanza quadratica
La distanza minima da un punto si ottiene minimizzando **la distanza quadratica**:  
$$  
d^2(t) = | r(t) - P_0 |^2  
$$
Calcoliamo:  
$$  
d^2(t) = (t-1)^2 + (3 - t - 0)^2 + (2t - 1)^2  
$$
Sviluppiamo:
> [!Note] **Sviluppo**  
> $$(t-1)^2 + (3-t)^2 + (2t-1)^2 = 6t^2 - 12t + 11$$
### 3) Derivare e imporre la stazionarietà
Deriviamo:  
$$  
\frac{d}{dt}(6t^2 - 12t + 11) = 12t - 12  
$$
Pongo la derivata uguale a zero:
> [!Note] **Condizione di stazionarietà**  
> $$12t - 12 = 0 \Rightarrow t = 1$$
### 4) Sostituzione: ricaviamo il punto cercato
Sostituiamo $t = 1$ nella parametrizzazione:
> [!Note] **Coordinate del punto minimo**  
> $x = 1$  
> $y = 3 - 1 = 2$  
> $z = 2 \cdot 1 = 2$

> [!Success] **Risultato**  
> Il punto della retta più vicino a $(1,0,1)$ è:  
> $$P_1 = (1,2,2)$$

---
## Lagrange – Distanza minima da una retta nello spazio

> [!Question] **Consegna (Esempio 2)**  
> Sia $C$ la retta ottenuta intersecando i piani:  
> $x + y = 2$,  
> $x + y + 2z = 0$.  
> Determinare il punto su $C$ che si trova a **minima distanza dall'origine** $(0,0,0)$.

Minimizzare la distanza dall'origine equivale a minimizzare:  
$$  
f(x,y,z) = x^2 + y^2 + z^2  
$$
Soggetto ai due vincoli:  
$$  
g_1(x,y,z) = x + y - 2 = 0$$  
$$g_2(x,y,z) = x + y + 2z = 0$$
### Lagrangiana
Costruiamo:  
$$  
\mathcal{L}(x,y,z,\lambda,\mu) = x^2 + y^2 + z^2 - \lambda(x+y-2) - \mu(x+y+2z)  
$$
### Condizioni di stazionarietà
Calcoliamo:
> [!Note] **Sistema delle equazioni**  
> $$  
> \begin{cases}  
> \mathcal{L}_x = 2x - \lambda - \mu = 0 \\  
> \mathcal{L}_y = 2y - \lambda - \mu = 0 \\  
> \mathcal{L}_z = 2z - 2\mu = 0 \\  
> x + y = 2 \\  
> x + y + 2z = 0  
> \end{cases}  
> $$

Dalle prime due equazioni:  
$$x=y=\frac{\lambda+\mu}{2}$$
Dalla terza:  
$$z = \mu$$
Usiamo ora i vincoli:
- Dal primo vincolo:  
    $$x + y = 2 \Rightarrow x = y = 1$$
- Dal secondo:  
    $$1 + 1 + 2z = 0 \Rightarrow z = -1$$
### Risultato
> [!Success] **Punto di minima distanza dall'origine**  
> $$P = (1,1,-1)$$

Distanza minima:
$$  
\sqrt{1^2 + 1^2 + (-1)^2} = \sqrt{3}  
$$

---