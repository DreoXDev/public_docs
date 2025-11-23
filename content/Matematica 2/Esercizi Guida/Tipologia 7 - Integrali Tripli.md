#Matematica2 #EsercizioGuida
## Integrale triplo – Tetraedro ($\Omega$)
> [!Question] **Consegna**  
> Calcolare l’integrale triplo:  
> $$
> I = \iiint_{\Omega} \frac{1}{(1+x+y+z)^3} , dV  
> $$
> dove ($\Omega$) è il tetraedro limitato dai piani:  
> ($x=0, y=0, z=0, x+y+z=1.$)
## 1) Regione di integrazione e ordine naturale
La regione ($\Omega$) è un tetraedro nel primo ottante.  
Per fissati ($x, y$) tali che ($x \ge 0, y \ge 0, x+y \le 1$), la variabile ($z$) varia da:  
$$
0 \le z \le 1 - x - y.  
$$
> [!Note] **Scrittura dell’integrale triplo**  
> $$
> I = \int_{x=0}^{1} \int_{y=0}^{,1-x} \int_{z=0}^{,1-x-y} \frac{1}{(1+x+y+z)^3} , dz , dy , dx.  
> $$
## 2) Integrazione interna (rispetto a (z))
Poniamo (t = 1 + x + y + z), quindi:
- quando (z = 0), (t = 1 + x + y);
- quando (z = 1 - x - y), (t = 2).
La sostituzione produce:  
$$
\int_{0}^{1-x-y} \frac{dz}{(1+x+y+z)^3} = \int_{1+x+y}^{2} t^{-3} , dt.  
$$
La primitiva di ($t^{-3}$) è ($-\tfrac12 t^{-2}$). Quindi:  
$$
\Big[-\tfrac12 t^{-2}\Big]_{1+x+y}^{2} = \tfrac12\Big((1+x+y)^{-2} - \tfrac14\Big).  
$$
> [!Note] **Risultato integrazione in (z)**  
> $$
> I = \int_0^1 \int_0^{1-x} \tfrac12 \Big((1+x+y)^{-2} - \tfrac14 \Big) , dy , dx.  
> $$
## 3) Separazione dei contributi
Scriviamo:  
$$
I = \tfrac12\underbrace{\int_0^1 \int_0^{1-x} (1+x+y)^{-2} , dy , dx}_{A}
- \tfrac18\underbrace{\int_0^1 \int_0^{1-x} 1 , dy , dx}_{\text{area del triangolo}}.  
$$
L’area del triangolo ($T$) è ($\tfrac12$), quindi:  
$$
    -\tfrac18 \cdot \tfrac12 = -\tfrac1{16}.  
$$
Per il termine (A), integriamo prima in (y).  
Poniamo ($u = 1 + x + y$), quindi:
- quando ($y = 0$), ($u = 1 + x$);
- quando ($y = 1 - x$), ($u = 2$).
$$
\int_{0}^{1-x} (1+x+y)^{-2} dy = \int_{1+x}^{2} u^{-2} , du = \Big[-u^{-1}\Big]_{1+x}^{2} = -\tfrac12 + \frac{1}{1+x}.  
$$
Quindi:  
$$
A = \int_{0}^{1} \Big(-\tfrac12 + \frac{1}{1+x}\Big) dx.  
$$
Calcoliamo i due integrali:  
$$
\int_0^1 \frac{dx}{1+x} = \ln 2,  
\qquad  
\int_0^1 -\tfrac12 dx = -\tfrac12.  
$$

> [!Note] **Valore di A**  
> $$
> A = \ln 2 - \tfrac12.  
> $$
## Risultato finale
Sommiamo i contributi:  
$$
I = \tfrac12(\ln 2 - \tfrac12) - \tfrac{1}{16}  
= \tfrac12\ln 2 - \tfrac{5}{16}.  
$$
> [!Success] **Risultato**  
> $$
> I = \boxed{\tfrac12\ln 2 - \tfrac{5}{16}}  
> $$

---