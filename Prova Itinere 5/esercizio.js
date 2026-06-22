let tree = {val: 3 , figli : [val]}

function altezza_albero(t){
    if(!t){
        return 0
    }
    return 1 + altezza_albero(t.figli)
}

console.log(altezza_albero(tree))