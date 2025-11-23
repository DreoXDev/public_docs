## 1. Cerchio
- Equazione: $(x^2+y^2=R^2)$.
- Parametrizzazione: $(x=R\cos\theta,\ y=R\sin\theta,\ \theta\in[0,2\pi))$.
## 2. Ellisse
- Equazione: $(\tfrac{x^2}{a^2}+\tfrac{y^2}{b^2}=1)$.
- Parametrizzazione: $(x=a\cos\theta,\ y=b\sin\theta)$.
## 3. Retta
- Forma cartesiana: $(ax+by+c=0)$.
- Parametrizzazione (se b≠0): $(x=t,\ y=-(at+c)/b)$.
- Vettore direzione: $((b,-a))$.
## 4. Piano (in 3D)
- Equazione: $(ax+by+cz+d=0)$.
- Intersezione di 2 piani = retta parametrica trovata risolvendo il sistema.
## 5. Lagrange (formula generale)
Per vincolo $(g(x,y)=0) e funzione (f(x,y))$:
- Costruisci: $(\mathcal L(x,y,\lambda)=f(x,y)-\lambda g(x,y))$.
- Condizioni: $(\nabla f = \lambda\nabla g,\ g(x,y)=0)$.
## 6. Coordinate polari
- Collegamento: $(x=r\cos\theta,\ y=r\sin\theta)$.
- Utile per vincoli radiali (cerchi, settori, dischi).
## 7. Ellissi 3D (cenno)
- Sfera: $(x^2+y^2+z^2=R^2)$.
- Parametrizzazione: $(x=R\cos\phi\cos\theta,\ y=R\cos\phi\sin\theta,\ z=R\sin\phi)$.
---
### Schema decisionale pratico

- *Cerchi / sfere / ellissi* → parametrizza con seno e coseno (coordinate polari/sferiche).
- *Rette / segmenti / triangoli / rettangoli* → più semplice con Lagrange (vincoli lineari).
- *Vincoli lineari multipli* (piani, poligoni) → Lagrange comodo.
- *Vincoli curvilinei semplici* (cerchi, ellissi) → parametrizzazione comoda.

---
### Ricorda
- Le curve di livello di una funzione f(x,y) sono utili per intuire dove cadono i min/max.
- Estremi assoluti su insiemi compatti: sempre esistono (Teorema di Weierstrass).