#Matematica2 #EsercizioGuida
Scheda teorica [[Green|Green]].

Per verificare la formula di Green prima eseguiamo il calcolo della formula a destra normalmente con un semplice integrale doppio, successivamente risolvere l'integrale di contorno (parte sinistra) e confrontare i risultati.
## Verifica della Formula di Green – Triangolo
> [!Question] **Consegna**  
> Verificare la formula di Green per il campo vettoriale:  
> $\mathbf F = (x+y)^2 \mathbf e_1 - (x^2+y^2) \mathbf e_2$  
> sul triangolo con vertici ($(0,0), (1,0), (0,1)$), orientato in **senso antiorario**.

Dominio:  
$$
S = {(x,y) : x \in [0,1],; y \in [0,1-x]}.  
$$
Componenti:  
$$
F_1 = (x+y)^2, \qquad F_2 = - (x^2 + y^2).  
$$
## 1) Parte destra – Integrale doppio
Calcoliamo:  
$$
\iint_S \left( \frac{\partial F_2}{\partial x} - \frac{\partial F_1}{\partial y} \right) , dA.  
$$

Derivate:  
$$
\frac{\partial F_2}{\partial x} = -2x,  
\qquad  
\frac{\partial F_1}{\partial y} = 2(x+y).  
$$
Quindi:  
$$
\frac{\partial F_2}{\partial x} - \frac{\partial F_1}{\partial y} = -4x - 2y.  
$$
> [!Note] **Integrale doppio**  
> $$
> \int_0^1 \int_0^{1-x} (-4x - 2y) , dy , dx.  
> $$

Calcolo:  
$$
\int_0^1 \left[ -4xy - y^2 \right]_0^{1-x} dx  
= \int_0^1 \left( -4x(1-x) - (1-x)^2 \right) dx.  
$$
Espansione:  
$$
-4x + 4x^2 -1 + 2x - x^2 = -1 - 2x + 3x^2.  
$$
Integrale finale:  
$$
\int_0^1 (-1 - 2x + 3x^2) dx  
= [-x - x^2 + x^3]_0^1 = -1.  
$$

> [!Success] **Risultato parte destra:**  
> ( -1 )
## 2) Parte sinistra – Integrale di contorno
Calcoliamo:  
$$
\oint_C (F_1 , dx + F_2 , dy).  
$$
Il bordo è composto da tre lati.
### **Lato 1: (0,0) → (1,0)**
> [!Note]
> 1. Parametrizzazione: ($\gamma_1(t)=(t,0),; t\in[0,1]$)
> 2. Derivata: ($\gamma_1'(t)=(1,0)$)
> 3. Campo: ($F(\gamma_1(t))=(t^2,-t^2)$)
> 4. Prodotto scalare: ($t^2$)
> 5. Integrale: ($\int_0^1 t^2 dt = \tfrac13$)

Contributo: **($\tfrac13$).**
### **Lato 2: (1,0) → (0,1)**
> [!Note]
> 1. Parametrizzazione: (\gamma_2(s)=(1-s,s))
> 2. Derivata: (\gamma_2'(s)=(-1,1))
> 3. Campo: (F(\gamma_2)=(1, -1+2s-2s^2))
> 4. Prodotto scalare: (-2 + 2s - 2s^2)
> 5. Integrale: (\int_0^1 (-2 + 2s - 2s^2) ds = -\tfrac{5}{3})

Contributo: **(-\tfrac53).**
### **Lato 3: (0,1) → (0,0)**
> [!Note]
> 1. Parametrizzazione: (\gamma_3(u)=(0,1-u))
> 2. Derivata: (\gamma_3'(u)=(0,-1))
> 3. Campo: (F(\gamma_3(u))=((1-u)^2, -(1-u)^2))
> 4. Prodotto scalare: ((1-u)^2)
> 5. Integrale: (\int_0^1 (1-u)^2 du = \tfrac13)

Contributo: **(\tfrac13).**
### Somma dei contributi
$$
\tfrac13 - \tfrac53 + \tfrac13 = -1.  
$$
> [!Success] **Risultato parte sinistra:**  
> ( -1 )
## Conclusione
La parte sinistra e la parte destra coincidono:  
$$
-1 = -1,  
$$
quindi **la formula di Green è verificata** per questo campo vettoriale sul triangolo assegnato.
## Template per il calcolo lungo un lato
> [!Info]
> 1. **Parametrizzazione:** definisci ($\gamma(t)=(x(t),y(t))$).
> 2. **Derivata:** calcola ($\gamma'(t)$).
> 3. **Valutazione del campo:** ($\mathbf F(\gamma(t))$).
> 4. **Prodotto scalare:** ($\mathbf F(\gamma(t))\cdot\gamma'(t)$).
> 5. **Integrale:** integra rispetto al parametro.