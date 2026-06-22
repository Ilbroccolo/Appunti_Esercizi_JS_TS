let t = {val: 1, 
    sx: {
        val: 2,
            sx : {val : 3}, 
            dx: {val : 5}},
    dx: {val : 4, 
sx : {val: 7}}}

function visita_simmetrica(t){
    if(t != null){
        visita_simmetrica(t.sx)
        console.log(t.val)
        visita_simmetrica(t.dx)
        
    }
}

function visita_anticipata(t){
    if(t != null){
        visita_anticipata(t.sx)
        
        visita_anticipata(t.dx)
        console.log(t.val)
    }
}

function visita_posticipata(t){
    if(t != null){
        console.log(t.val)
        visita_posticipata(t.sx)
        
        visita_posticipata(t.dx)
        
    }
}
console.log("VISITA SIMMETRICA")
visita_simmetrica(t)
console.log("----------------------")

console.log("VISITA ANTICIPATA")
visita_anticipata(t)
console.log("----------------------")


console.log("VISITA POSTICIPATA")
visita_posticipata(t)
console.log("----------------------")