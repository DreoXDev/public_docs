#Matematica2 #EsercizioGuida
## Integrale doppio su un rettangolo

> [!Question] **Consegna**  
> Calcolare l’integrale doppio della funzione:  
> $$f(x,y) = \frac{1}{(x+y)^2}$$  
> esteso al quadrato $R = [3,4] \times [1,2]$.
## Struttura generale di un integrale doppio su rettangolo
L’integrale doppio su una regione rettangolare può essere riscritto come integrale **iterato**:  
$$  
I = \iint_R f(x,y), dA = \int_{x=a}^{b} \left[\int_{y=c}^{d} f(x,y), dy \right] dx.  
$$
La variabile dell’integrale **interno** varia per prima; l’altra viene considerata costante.

> [!Info] **Schema generale**
> 
> 1. Scegli l’ordine di integrazione (qui: prima in $y$, poi in $x$).
>     
> 2. Risolvi l’integrale interno tenendo $x$ costante.
>     
> 3. Sostituisci il risultato nell’integrale esterno.
>     
> 4. Risolvi l’integrale rispetto a $x$.
>     

> [!Note] **Forma iterata del nostro integrale**  
> $$  
> I = \int_{x=3}^{4} \left[ \int_{y=1}^{2} \frac{1}{(x+y)^2} , dy \right] dx  
> $$
## 1) Integrale interno (in $y$)
Consideriamo $x$ come costante e calcoliamo:  
$$  
\int_{y=1}^{2} \frac{1}{(x+y)^2} , dy.  
$$
Scriviamo la funzione come potenza:  
$$  
(x+y)^{-2}.  
$$
Una primitiva di $(x+y)^{-2}$ rispetto a $y$ è:  
$$  
\int (x+y)^{-2} dy = - (x+y)^{-1} = -\frac{1}{x+y}.  
$$
Quindi, applicando gli estremi $y=1$ e $y=2$:  
$$  
\int_1^2 (x+y)^{-2} dy = \left[-\frac{1}{x+y}\right]_{1}^{2} = -\frac{1}{x+2} + \frac{1}{x+1}.  
$$
> [!Note] **Risultato integrale interno**  
> $$  
> \int_{1}^{2} \frac{1}{(x+y)^2} dy = \frac{1}{x+1} - \frac{1}{x+2}  
> $$
## 2) Integrale esterno (in $x$)
Ora sostituiamo il risultato nel calcolo dell’integrale esterno:  
$$  
I = \int_{x=3}^{4} \left( \frac{1}{x+1} - \frac{1}{x+2} \right) dx.  
$$La primitiva di $\frac{1}{x+a}$ è:  
$$  
\int \frac{1}{x+a} dx = \ln|x+a|.  
$$
Quindi:  
$$  
\int \left( \frac{1}{x+1} - \frac{1}{x+2} \right) dx = \ln(x+1) - \ln(x+2) + C.  
$$
Applichiamo gli estremi $x=3$ e $x=4$:  
$$  
I = \left[\ln(x+1) - \ln(x+2)\right]_{3}^{4}.  
$$
Sostituendo:  
$$  
I = (\ln 5 - \ln 6) - (\ln 4 - \ln 5).  
$$
Raggruppiamo i termini:  
$$  
I = \ln 5 - \ln 6 - \ln 4 + \ln 5 = 2\ln 5 - (\ln 6 + \ln 4).  
$$
Usiamo le proprietà dei logaritmi:  
$$  
2\ln 5 = \ln 5^2 = \ln 25, \quad \ln 6 + \ln 4 = \ln(6\cdot 4) = \ln 24.  
$$
Quindi:  
$$  
I = \ln 25 - \ln 24 = \ln\left(\frac{25}{24}\right).  
$$
> [!Success] **Risultato finale**  
> $$  
> I = \ln\left(\frac{25}{24}\right)  
> $$