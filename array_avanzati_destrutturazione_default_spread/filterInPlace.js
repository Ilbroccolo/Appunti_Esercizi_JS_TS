/*
Scrivere una funzione fip(a,p) che, dato un array qualunque a, e un predicato p, 
modifichi a in modo che tutti gli elementi che non soddisfano il predicato p siano 
rimossi da a. Si curi di non lasciare “posti vuoti” in a.
Esempi:
Se a=[3,5,10,1,4], dopo la chiamata fip(a,x=>x%2) a dovrà essere [3,5,1]
                                                                            */ 

function fip(a,p){
    
    return a.filter(p)
}

console.log(fip([3,5,10,1,4], x=>x%2))