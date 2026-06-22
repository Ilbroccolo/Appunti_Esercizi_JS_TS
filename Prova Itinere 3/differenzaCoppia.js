/*Si scriva una funzione differenzaCoppie(A, k) che, ricevuto un array di valori 
 e un intero positivo 
 restituisca il numero di coppie di indici distinti (non necessariamente adiacenti) 
 i cui corrispondenti elementi dell'array hanno differenza (in valore assoluto) divisibile per 
. Eventuali valori non numerici nell'array devono essere ignorati.

Le coppie sono considerate non ordinate: ad esempio, la coppia di indici (0,4) è considerata uguale alla coppia (4,0).



Esempi:

differenzaCoppie([1, 4, 7, 10], 3) → 6
Le coppie con differenza divisibile per 3 sono: (1,4) con differenza 3, (1,7) con differenza 6, (1,10) con differenza 9, (4,7) con differenza 3, (4,10) con differenza 6, e (7,10) con differenza 3.



differenzaCoppie([2, 5, 8, 11], 3) → 6
differenzaCoppie([1, 2, 3], 5) → 0


Come prassi, commentate opportunamente la funzione. */

function controllaDivisibilita(a, b, d){ // controlla se la differenze tra i due elementi (a e b) dell'array è divisibile per il numero dato (d) 
    let differenza_abs = Math.abs(a-b);
    
    if(differenza_abs%d == 0){
        return true
    }
    return false 
}


function differenzaCoppie(a,d){
    let contatore = 0;
    let len_iniziale = a.length
    while(len_iniziale > 0){
        let primo_valore = a.shift();// ogni volta taglia l'array rimuovendo un elemento da controllare
        for(let j = 0; j<a.length; j++){
            if(controllaDivisibilita(primo_valore,a[j],d)){
            //console.log("entra qua?")
            contatore++;
        }
        }
        len_iniziale--;
        
    }
    
    return contatore;
}


console.log(differenzaCoppie([1, 4, 7, 10], 3))

