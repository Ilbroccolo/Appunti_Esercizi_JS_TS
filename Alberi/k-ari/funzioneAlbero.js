/* Applicare una funzione data a tutti i valori contenuti in un albero, sostituendo 
in ogni nodo il valore attuale con il risultato della funzione applicata al valore 
attuale
                                                                                    */
function f(n) {
    return 2*n
} 

let t1 = {val : 1, figli : [{val: 3}, {val : 1}, {val: 6}]}
function funzioneAlbero(t,f){
    if(!t){
        return null
    }
    t.val = f(t.val)
    if(t.figli){
        for(figlio of t.figli){
            funzioneAlbero(figlio, f)
        }
    }

    return t
}

let t = f(2)
console.log(t)
console.log(funzioneAlbero(t1,f))