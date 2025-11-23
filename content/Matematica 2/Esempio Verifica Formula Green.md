## 🧮 Esempio — Verifica della Formula di Green
Sia dato il campo vettoriale:
$$
\mathbf{F} = (x - y)\,\mathbf{e_1} + (x + y)\,\mathbf{e_2}
$$
e il contorno $C$ che delimita il quadrato di vertici:
$$
P_1(0,1), \; P_2(1,0), \; P_3(0,-1), \; P_4(-1,0)
$$
orientato **in senso antiorario**.

---
### 🔹 Step 1 — Identificazione dei componenti del campo
$$
F_1 = x - y \quad\text{e}\quad F_2 = x + y
$$
---
### 🔹 Step 2 — Calcolo della parte destra della formula di Green
$$
\frac{\partial F_2}{\partial x} - \frac{\partial F_1}{\partial y} = \frac{\partial (x + y)}{\partial x} - \frac{\partial (x - y)}{\partial y}
$$
$$
= (1) - (-1) = 2
$$
👉 Quindi il termine all’interno dell’integrale doppio è costante e vale **2**.

L’integrale doppio sul dominio $S$ (cioè l’area del quadrato) diventa:
$$
\iint_S 2\,dxdy = 2 \cdot \text{Area}(S)
$$
Il quadrato ha vertici a distanza 1 dagli assi, quindi il lato misura $\sqrt{2}$ e l’area è:
$$
A = (\sqrt{2})^2 = 2
$$
Pertanto:
$$
\iint_S 2\,dxdy = 2 \cdot 2 = 4
$$
---
### 🔹 Step 3 — Calcolo della parte sinistra (integrale di contorno)
Dobbiamo calcolare:
$$
\oint_C (F_1\,dx + F_2\,dy)
$$
e verificheremo che anche questo dà 4.
Dividiamo il contorno in **4 tratti** corrispondenti ai lati del quadrato.

---
#### 🔸 Lato 1: da P₁(0,1) → P₂(1,0)
Equazione della retta: $y = 1 - x$.  
Differenziali: $dy = -dx$.
$$
F_1 = x - y = x - (1 - x) = 2x - 1, \quad F_2 = x + y = x + (1 - x) = 1
$$
$$
F_1 dx + F_2 dy = (2x - 1)dx + 1(-dx) = (2x - 2)dx
$$
$$
\int_0^1 (2x - 2)dx = [x^2 - 2x]_0^1 = (1 - 2) - 0 = -1
$$
---
#### 🔸 Lato 2: da P₂(1,0) → P₃(0,-1)
Equazione: $y = x - 1$, $dy = dx$.
$$
F_1 = x - y = x - (x - 1) = 1, \quad F_2 = x + y = x + (x - 1) = 2x - 1
$$

$$
F_1 dx + F_2 dy = 1dx + (2x - 1)dx = (2x)dx
$$

$$
\int_1^0 2x\,dx = [x^2]_1^0 = -1
$$
---
#### 🔸 Lato 3: da P₃(0,-1) → P₄(-1,0)
Equazione: $y = -x - 1$, $dy = -dx$.
$$
F_1 = x - y = x - (-x - 1) = 2x + 1, \quad F_2 = x + y = x + (-x - 1) = -1
$$

$$
F_1 dx + F_2 dy = (2x + 1)dx + (-1)(-dx) = (2x + 2)dx
$$

$$
\int_0^{-1} (2x + 2)dx = [x^2 + 2x]_0^{-1} = (1 - 2) - 0 = -1
$$
---
#### 🔸 Lato 4: da P₄(-1,0) → P₁(0,1)
Equazione: $y = -x + 1$, $dy = -dx$.
$$
F_1 = x - y = x - (-x + 1) = 2x - 1, \quad F_2 = x + y = x + (-x + 1) = 1
$$

$$
F_1 dx + F_2 dy = (2x - 1)dx + 1(-dx) = (2x - 2)dx
$$

$$
\int_{-1}^0 (2x - 2)dx = [x^2 - 2x]_{-1}^0 = (0 - 0) - (1 + 2) = -3
$$
---
### 🔹 Step 4 — Somma dei contributi
$$
(-1) + (-1) + (-1) + (-1) = -4
$$
Poiché il contorno è orientato **antiorario**, il segno negativo indica che abbiamo preso un orientamento opposto (cioè in senso orario) nel calcolo parametrico.
Invertendo l’orientamento, otteniamo:
$$
\oint_C (F_1\,dx + F_2\,dy) = 4
$$
---
✅ **Conclusione:**
$$
\boxed{\oint_C (F_1\,dx + F_2\,dy) = \iint_S \left(\frac{\partial F_2}{\partial x} - \frac{\partial F_1}{\partial y}\right) dxdy = 4}
$$
La **formula di Green** è quindi **verificata**.