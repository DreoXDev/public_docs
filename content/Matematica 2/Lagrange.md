# Teorema dei moltiplicatori di Lagrange

*Enunciato (forma base in 2 variabili).*  
Sia $(f(x,y))$ una funzione da ottimizzare e sia $(g(x,y)=0)$ un vincolo regolare (cioè con gradiente non nullo).  
Se $((x_0,y_0))$ è un punto di massimo o minimo relativo di (f) soggetto al vincolo $(g(x,y)=0)$, allora esiste un numero reale (\lambda) (moltiplicatore di Lagrange) tale che:  
$$
\nabla f(x_0,y_0) = \lambda , \nabla g(x_0,y_0), \quad g(x_0,y_0)=0.  
$$

*Interpretazione.* Nei punti ottimali, il gradiente di (f) è parallelo al gradiente del vincolo: le direzioni di massima crescita di (f) e della superficie del vincolo coincidono.

---

## Procedura pratica

1. Scrivi la funzione da ottimizzare $(f(x,y))$.
2. Scrivi il vincolo come equazione $(g(x,y)=0)$.
3. Calcola i gradienti: $(\nabla f, \nabla g)$.
4. Risolvi il sistema: $(\nabla f = \lambda \nabla g,\ g(x,y)=0)$.
5. Tra le soluzioni, valuta i valori di (f) per decidere minimi/massimi.

---

## Formula del gradiente (ripasso veloce)

Per una funzione di due variabili $f(x,y)$:  
$∇f(x,y) = ( ∂f/∂x , ∂f/∂y )$.

Esempio: se f(x,y)=xy allora
- ∂f/∂x = y
- ∂f/∂y = x  
    quindi ∇f(x,y) = (y, x).