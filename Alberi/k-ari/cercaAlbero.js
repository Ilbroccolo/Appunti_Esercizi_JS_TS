// Dire se un albero contiene un valore cercato o no
    let t1 = {val : 1, figli : [{val: 3}, {val : 1}, {val: 6}]}
let tree = {val : 5, figli : 
                        [{val : 2} , {val : 3 , figli : 
                                                    [{val : 4}, {val : 2}]},
                                                                             {val : 6}]
            }

function cercaAlbero(t,v){
    if (!t) {
        return false
    }
    if (t.val == v) {
        return true
    }
    if (t.figli) {
        for (f of t.figli) {
        // IMPORTANTE: restituisci l'esito della ricorsione
            if(cercaAlbero(f, v)){
                return true
            }
        }
    }
    return false
}

console.log(cercaAlbero(t1,6))