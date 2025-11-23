#Matematica2 #EsercizioGuida
## Verifica della Formula di Stokes – Piano nel primo ottante
> [!Question] **Consegna**  
> Verificare la formula di Stokes per il campo:  
> $$  
> \mathbf F(x,y,z) = (xz,; xy,; 3xz)  
> $$  
> sulla superficie $S$ del piano $$2x + y + z = 2$$ nel **primo ottante**, orientata verso l’**alto** ($n\cdot\mathbf k>0$), con bordo $$C = \triangle ABC$$ dove:  
> $A(1,0,0)$, $B(0,2,0)$, $C(0,0,2)$ e verso **antiorario** visto dall’alto.
## 1) Lato superficie: ( $\displaystyle \iint_S (\nabla\times\mathbf F)\cdot\mathbf n, dS$ )
### Rotore
$$  
\nabla\times\mathbf F = (0,; x - 3z,; y).  
$$
Scriviamo il piano come grafico:  
$$  
z = f(x,y) = 2 - 2x - y.  
$$
Orientazione verso l’alto:  
$$  
\mathbf n, dS = (-f_x,, -f_y,, 1),dxdy = (2,1,1),dxdy.  
$$
Prodotto scalare:  
$$  
(\nabla\times\mathbf F)\cdot(2,1,1) = x + y - 3(2 - 2x - y) = 7x + 4y - 6.  
$$
### Dominio proiettato
Triangolo $D$ in $xy$ determinato dagli intercetti:
- $x \in [0,1]$
- $y \in [0, 2 - 2x]$
> [!Note] **Integrale sulla superficie**  
> $$  
> \iint_S (\nabla\times\mathbf F)\cdot\mathbf n, dS  
> = \int_0^1 \int_0^{2-2x} (7x + 4y - 6),dy,dx  
> = \boxed{-1}.  
> $$
## 2) Lato bordo: ( $\displaystyle \oint_C \mathbf F\cdot d\mathbf r$ )
Percorriamo $C$ in senso **antiorario**: $A\to B\to C\to A$.
### **Lato AB** (su $z=0$)
> [!Note]  
> Parametrizzazione:  
> $$\mathbf r(t) = (1 - t,, 2t,, 0),\quad t\in[0,1]$$  
> $$\mathbf r'(t) = (-1,2,0)$$  
> Campo: $\mathbf F = (0, xy, 0)$  
> $$\Rightarrow \mathbf F(\mathbf r(t)) = (0, (1-t)(2t), 0)$$  
> Prodotto scalare: $2(1-t)(2t)$  
> $$\int_0^1 2(1-t)(2t),dt = \frac{2}{3}$$

Contributo: **$\frac{2}{3}$**.
### **Lato BC** (su $x=0$)
> [!Note]  
> Parametrizzazione:  
> $$\mathbf r(t) = (0,, 2 - 2t,, 2t),\quad t\in[0,1]$$  
> Qui $x=0 \Rightarrow \mathbf F = \mathbf 0$.  
> $$\Rightarrow \int_{BC} \mathbf F\cdot d\mathbf r = 0$$

Contributo: **$0$**.
### **Lato CA** (su $y=0$)
> [!Note]  
> Parametrizzazione:  
> $$\mathbf r(t) = (t,, 0,, 2 - 2t),\quad t\in[0,1]$$  
> $$\mathbf r'(t) = (1,0,-2)$$  
> Campo: $\mathbf F = (xz,0,3xz)$  
> $$\Rightarrow x=t,\ z=2-2t$$  
> $$\mathbf F(\mathbf r(t)) = (t(2-2t),\ 0,\ 3t(2-2t))$$  
> Prodotto scalare:  
> $$(2t - 2t^2) - 2(6t - 6t^2) = -10t + 10t^2$$  
> $$\int_0^1 (-10t + 10t^2),dt = -\frac{5}{3}$$

Contributo: **$-\frac{5}{3}$**.
### Somma dei contributi
$$  
\frac{2}{3} + 0 - \frac{5}{3} = -1.  
$$
> [!Success] **Integrale di contorno**  
> $$  
> \oint_C \mathbf F\cdot d\mathbf r = -1  
> $$
## Conclusione
I due risultati coincidono:  
$$  
\boxed{\displaystyle \oint_C \mathbf F\cdot d\mathbf r =  
\iint_S (\nabla\times\mathbf F)\cdot\mathbf n, dS = -1}  
$$
Dunque la **formula di Stokes** è verificata.
## Mini-checklist per esercizi simili
> [!Info]  
> • Trova gli **intercetti** del piano e controlla la coerenza del **verso** (mano destra).  
> • Calcola il **rotore** $\nabla\times\mathbf F$.  
> • Se possibile scrivi $z=f(x,y)$ e usa $\mathbf n,dS=(-f_x,-f_y,1),dxdy$ per orientazione verso l’alto.  
> • Oppure parametrizza i lati e calcola $\mathbf F\cdot d\mathbf r$.  
> • Alla fine, verifica che i risultati coincidano (segn