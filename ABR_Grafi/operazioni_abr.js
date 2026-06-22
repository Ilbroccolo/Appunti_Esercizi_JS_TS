let abr = { // albero binario di ricerca
    val: 6,
    sx: {
        val: 5,
        sx: { val: 2 },
        dx: { val: 5 }
    },
    dx: {
        val: 7,
        dx: { val: 8 }
    }
}

function abrStampaCrescente(t){
    if(t){
        
        abrStampaCrescente(t.sx)
        console.log(t.val)
        abrStampaCrescente(t.dx)
    }
}

//abrStampaCrescente(abr);

function abrStampaDecrescente(t){
    if(t){
        abrStampaDecrescente(t.dx)
        console.log(t.val)
        abrStampaDecrescente(t.sx)
    }
}

//abrStampaDecrescente(abr);


function abrArray(t){
    if(!t){
        return []
    }
    return [...abrArray(t.sx), t.val, ...abrArray(t.dx)] // spread

}

//console.log(abrArray(abr))

function abrMassimo(t){
    
    if(!t){
        return "albero non presente"
        
    }
    if(!t.dx){
        return t.val
    }

    return abrMassimo(t.dx);
}
//console.log(abrMassimo(abr));


function abrCerca(t,v){
    if(!t){
        return null
    }
    if(t.val == v){ // caso base
        return t.val
    }
    if(v>t.val){
        return abrCerca(t.dx,v)
    }
        return abrCerca(t.sx,v)
}

//console.log(abrCerca(abr,9))


function abrInserisci(t, v) {
    if (t.val > v) {
        //console.log("t.val > v")
        if (!t.sx) {
            //console.log("assegnamento valore")
            t.sx = { val: v }
            
        }
        else {
            abrInserisci(t.sx, v)
        }
    }
    else {
        if (!t.dx) {
            t.dx = { val: v }
        }
        else {
            abrInserisci(t.dx, v)
        }
    }
    //return t;
}
/*
let ex_t_vuoto = abrInserisci(null,2)
console.log(ex_t_vuoto.val)
*/
console.log(abrArray(abr))

abrInserisci(abr,1) // fa il passaggio per riferimento quindi abr viene modificato

console.log(abrArray(abr))

function abrVerifica(t) {
    if (!t) return true; // se non c'è nulla allora true

    // controlla figlio sinistro
    if (t.sx) {
        if (t.sx.val > t.val) return false;
        if (!abrVerifica(t.sx)) return false;
    }

    // controlla figlio destro
    if (t.dx) {
        if (t.dx.val < t.val) return false;
        if (!abrVerifica(t.dx)) return false;
    }

    return true;
}

let tree  = {val : 2, sx: null, dx : null} 
console.log(abrVerifica(abr))


