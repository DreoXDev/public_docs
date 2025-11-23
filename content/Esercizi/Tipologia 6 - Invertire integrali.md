#Matematica2 #EsercizioGuida
Invertire l'ordine di integrazione vuol dire fare prima $dx$ e poi $dy$ al posto che il contrario, bisogna descrivere la regione D e rintracciare i limiti.
## Cambio d’ordine di integrazione – Regione delimitata da curve

> [!Question] **Consegna**  
> Calcolare l’integrale  
> $$
> \int_{x=0}^1 \left( \int_{y=x^2}^x x y^2 , dy \right) dx.  
> $$
> Determinare la regione di integrazione, invertirne l’ordine e calcolare il valore dell’integrale.
## 1) Regione di integrazione
La regione è descritta dall’integrale iterato:  
$$
0 \le x \le 1, \qquad x^2 \le y \le x.  
$$
Quindi:  
$$
\mathcal{D} = {(x,y) : 0 \le x \le 1, \ x^2 \le y \le x }.  
$$
> [!Info] **Osservazione generale**  
> Le curve (y=x^2) e (y=x) si incontrano nei punti in cui:  
> (x = x^2 \Rightarrow x = 0,1).  
> Quindi la regione è compresa tra le due curve e limitata da y in ([0,1]).

Per invertire l’ordine dell’integrazione, descriviamo la regione fissando _y_.
- Il valore di _y_ va da:  
    $$
    0 \le y \le 1.  
    $$
- Per un _y_ fissato, _x_ varia tra la parabola e la retta:  
    $$
    y = x^2 \Rightarrow x = \sqrt{y}, \qquad y = x \Rightarrow x = y.  
    $$
    Poiché (x^2 \le y \le x), invertendo otteniamo:  
    $$
    y \le x \le \sqrt{y}.  
    $$
> [!Note] **Regione con ordine invertito**  
> $$
> \int_{x=0}^1 \int_{y=x^2}^x x y^2 , dy , dx
> \int_{y=0}^1 \int_{x=y}^{\sqrt{y}} x y^2 , dx , dy.  
> $$
## 2) Calcolo dell’integrale
### Integrale interno (in x)
Consideriamo _y_ costante:  
$$
\int_{x=y}^{\sqrt{y}} x y^2 , dx = y^2 \int_{x=y}^{\sqrt{y}} x , dx.  
$$
La primitiva di (x) è (\tfrac{x^2}{2}), quindi:  
$$
\left[ \frac{y^2 x^2}{2} \right]_{x=y}^{\sqrt{y}}.  
$$
Sostituiamo i limiti:  
$$
\frac{y^2(\sqrt{y})^2}{2} - \frac{y^2(y)^2}{2} = \frac{y^3}{2} - \frac{y^4}{2} = \frac{1}{2}(y^3 - y^4).  
$$

> [!Note] **Risultato integrale interno**  
> $$
> \frac{1}{2}(y^3 - y^4)  
> $$
### Integrale esterno (in y)
Calcoliamo:  
$$
\int_{y=0}^1 \frac{1}{2}(y^3 - y^4) , dy = \frac{1}{2} \int_0^1 (y^3 - y^4) , dy.  
$$
Le primitive sono:  
$$
\int y^3 dy = \frac{y^4}{4}, \qquad \int y^4 dy = \frac{y^5}{5}.  
$$
Quindi:  
$$
\frac{1}{2} \left[ \frac{y^4}{4} - \frac{y^5}{5} \right]_0^1.  
$$
Sostituendo:  
$$
\frac{1}{2} \left( \frac{1}{4} - \frac{1}{5} \right)  
= \frac{1}{2} \cdot \frac{1}{20}  
= \frac{1}{40}.  
$$

> [!Success] **Risultato finale**  
> $$
> I = \frac{1}{40}  
> $$
