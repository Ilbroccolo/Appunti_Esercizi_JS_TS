//Dire se un albero binario contiene un valore cercato o no

let t = {val: 2, 
    sx: {
        val: 2, 
            dx: {val : 2}},
    dx: {val : 2, 
sx : {val: 2}}}

let t1 = {val: 2, sx : {val : 2}, dx : {val : 2}}

function cercaAlbero(t,v){
    if(!t){
        return false
    }
    if(!v){
        return false
    }
    if(t.val == v){
        return true
    }
    return (cercaAlbero(t.dx, v) || cercaAlbero(t.sx,v))


}

console.log(cercaAlbero(t1, 3))