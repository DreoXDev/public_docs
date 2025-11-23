### 📘 Enunciato

Sia $S \subset \mathbb{R}^2$ una regione **piana, connessa, chiusa e orientata positivamente** (cioè in senso antiorario), e sia $C = \partial S$ il suo bordo.  
Sia $\mathbf{F} = (F_1(x, y), F_2(x, y))$ un campo vettoriale con derivate continue su un intorno di $S$.
Allora vale:
$$
\oint_{C} (F_1 \, dx + F_2 \, dy)
= \iint_{S} \left(
\frac{\partial F_2}{\partial x}
-
\frac{\partial F_1}{\partial y}
\right) dx\,dy
$$
---
### 🧩 Interpretazione geometrica
- Il **lato sinistro** rappresenta il **lavoro** del campo lungo il contorno $C$ (integrale di linea).  
- Il **lato destro** rappresenta la **circolazione** del campo su tutta la regione $S$.
---
### 🔁 Versione vettoriale compatta
Indicando con:
$$
\mathbf{F} = F_1 \mathbf{e_1} + F_2 \mathbf{e_2}
\quad \text{e} \quad
\mathbf{t} \text{ = versore tangente positivo a } C
$$
si può scrivere:
$$
\oint_C (\mathbf{F} \cdot \mathbf{t})\, d\ell =
\iint_S \left(
\frac{\partial F_2}{\partial x} -
\frac{\partial F_1}{\partial y}
\right) dx\,dy
$$
---
### ⚙️ Condizioni di applicabilità
1. $S$ è **semplicemente connessa** (senza buchi).  
2. $C$ è **orientato positivamente** (antiorario).  
3. $F_1, F_2$ e le loro derivate parziali sono **continue** su $S$.
---
### 🧠 Casi utili e corollari
- **Flusso attraverso il bordo**:  
  Se si vuole il flusso uscente (cioè lungo la normale), allora:
$$
\oint_C (F_1\,dy - F_2\,dx)
=
\iint_S \left(
\frac{\partial F_1}{\partial x} + \frac{\partial F_2}{\partial y}
\right) dx\,dy
$$
- **Campo conservativo**:  
  Se $\frac{\partial F_2}{\partial x} - \frac{\partial F_1}{\partial y} = 0$,  
  allora $\mathbf{F}$ è **irrotazionale** e l’integrale lungo ogni curva chiusa $C$ è **zero**.
---
### 🧾 Schema operativo per gli esercizi
1. Identifica il campo  
   $\mathbf{F} = (F_1, F_2)$
2. Calcola  
   $\displaystyle \frac{\partial F_2}{\partial x} - \frac{\partial F_1}{\partial y}$
3. Calcola l’integrale doppio su $S$.
4. Parametrizza il bordo $C$ (in senso antiorario) e calcola  
   $\displaystyle \oint_C (F_1\,dx + F_2\,dy)$
5. Confronta i due risultati → devono coincidere.