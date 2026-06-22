//Trovare la somma dei valori in un albero binario

let t = {val: 2, 
    sx: {
        val: 2, 
            dx: {val : 2}},
    dx: {val : 2, 
sx : {val: 2}}}

let t1 = {val: 3, sx : {val : 1}, dx : {val : 2}}

function sommaAlbero(t){
    if(!t){
        return 0
    }
    if(!t.sx && !t.dx){ // è comunque una foglia
        return 1
    }
    return t.val + sommaAlbero(t.dx) + sommaAlbero(t.sx)
}

console.log(sommaAlbero(t1));