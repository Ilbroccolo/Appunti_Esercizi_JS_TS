//Trovare il massimo fra i valori in un albero

let tree = {val : 5, figli : 
                        [{val : 2} , {val : 3 , figli : 
                                                    [{val : 4}, {val : 2}]},
                                                                             {val : 6}]
            }

let t1 = {val : 1, figli : [{val: 3}, {val : 1}, {val: 6}]}
            
function maxAlbero(t){
    if (!t) {
        return null
    }
    let max = t.val
    if (t.figli) {
        for (f of t.figli) {
            max = Math.max(max, maxAlbero(f))
        }
    }
    return max
    
}

console.log(maxAlbero(t1))