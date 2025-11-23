#Matematica2 #EsercizioGuida
## Punti stazionari e Hessiana

> [!Question] **Consegna – Esercizio di esempio**  
> Studiare i punti stazionari della funzione  
> $$f(x,y) = x^3 - y^3 + xy$$  
> e classificarli tramite lo studio della Hessiana.
### 1) Derivate prime rispetto a x e y
Si calcolano le derivate parziali considerando, di volta in volta, l'altra variabile come costante.
> [!Note] **Derivate prime**  
> $$f_x = \frac{\partial f}{\partial x} = 3x^2 + y$$  
> $$f_y = \frac{\partial f}{\partial y} = -3y^2 + x$$
### 2) Porre le derivate uguali a zero (sistema)
I punti stazionari si trovano risolvendo il sistema:  
$$  
\begin{cases}  
3x^2 + y = 0 \\
-3y^2 + x = 0  
\end{cases}  
$$
Dalla prima equazione ricaviamo:  
$$y = -3x^2$$
> [!Note] **Sostituzione nel sistema**  
> Sostituiamo $y = -3x^2$ nella seconda equazione:  
> $$-3(-3x^2)^2 + x = -3(9x^4) + x = -27x^4 + x$$  
> $$x(-27x^3 + 1) = 0$$
### 3) Trovare i punti stazionari
Dal prodotto $x(-27x^3 + 1) = 0$ otteniamo due casi:
> [!Note] **Condizione di stazionarietà sul sistema**  
> **Caso 1:** $x = 0$  
> Allora:  
> $$y = -3(0)^2 = 0$$  
> Punto stazionario: $(0,0)$
> 
> **Caso 2:** $-27x^3 + 1 = 0 \Rightarrow x^3 = \frac{1}{27} \Rightarrow x = \frac{1}{3}$  
> Allora:  
> $$y = -3\left(\frac{1}{3}\right)^2 = -3\cdot\frac{1}{9} = -\frac{1}{3}$$  
> Punto stazionario: $\left(\frac{1}{3}, -\frac{1}{3}\right)$

Quindi i punti stazionari sono:
- $(0,0)$
- $\left(\frac{1}{3}, -\frac{1}{3}\right)$
### 4) Derivate seconde e matrice Hessiana
Ora calcoliamo le derivate seconde:
> [!Note] **Derivate seconde**  
> $$f_{xx} = \frac{\partial^2 f}{\partial x^2} = 6x$$  
> $$f_{xy} = \frac{\partial^2 f}{\partial x\partial y} = 1$$  
> $$f_{yy} = \frac{\partial^2 f}{\partial y^2} = -6y$$

Costruiamo la matrice Hessiana:  
$$  
H(x,y) = \begin{bmatrix}  
f_{xx} & f_{xy} \  
f_{xy} & f_{yy}  
\end{bmatrix}  
= \begin{bmatrix}  
6x & 1 \  
1 & -6y  
\end{bmatrix}  
$$
### 5) Hessiana in ciascun punto stazionario
> [!Note] **Hessiana per ogni punto**  
> Per $(0,0)$:  
> $$H(0,0) = \begin{bmatrix} 0 & 1 \ 1 & 0 \end{bmatrix}$$
> 
> Per $\left(\frac{1}{3}, -\frac{1}{3}\right)$:  
> $$H\left(\frac{1}{3}, -\frac{1}{3}\right) = \begin{bmatrix} 6\cdot\frac{1}{3} & 1 \ 1 & -6\cdot\left(-\frac{1}{3}\right) \end{bmatrix} = \begin{bmatrix} 2 & 1 \ 1 & 2 \end{bmatrix}$$
### 6) Classificazione dei punti (determinante di Hessiana)
Per classificare i punti stazionari usiamo il determinante di Hessiana:  
$$  
D(x_0,y_0) = f_{xx}(x_0,y_0), f_{yy}(x_0,y_0) - (f_{xy}(x_0,y_0))^2  
$$
Regole:
- Se $D>0$ e $f_{xx}>0$ → **minimo locale**.
- Se $D>0$ e $f_{xx}<0$ → **massimo locale**.
- Se $D<0$ → **punto di sella**.
- Se $D=0$ → test **inconcludente**.

> [!Success] **Classificazione dei punti**  
> **Punto $(0,0)$:**  
> $$D(0,0) = 0\cdot 0 - (1)^2 = -1 < 0\quad \Rightarrow\quad \text{punto di sella.}$$
> 
> **Punto $\left(\frac{1}{3}, -\frac{1}{3}\right)$:**  
> $$D\left(\tfrac{1}{3}, -\tfrac{1}{3}\right) = 2\cdot 2 - (1)^2 = 4 - 1 = 3 > 0$$  
> e $f_{xx}\left(\tfrac{1}{3}, -\tfrac{1}{3}\right) = 2 > 0$  
> $$\Rightarrow\quad \text{punto di minimo locale.}$$