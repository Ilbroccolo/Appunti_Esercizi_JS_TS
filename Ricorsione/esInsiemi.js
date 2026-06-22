/*assert.deepStrictEqual(
    Object.keys(unioneParziale([{a:1, b:1}, {b:1, c:1}, {a:1, c:1, d:1}], 2)).sort(),
    ['a', 'b', 'c']
);
*/


// --- Unione Multi ---
function unioneMulti(A, B) {

let C = { ... A}
    for (let el in B) {
        if (el in C) {
            C[el] += B[el] // SOMMA!
    } 
        else {
            C[el] = B[el]
        }
    }
    
    return C

    }
/*
let MA = {'x': 3, 'y': 2}
let MB = {'y': 1, 'z': 4}
console. log(unioneMulti(MA, MB)) // {'x': 3, 'y': 3, 'z': 4}
*/


function unioneInsiemi(a){
    let insiemefinale = {};
    for(let i = 0; i<a.length; i++){
        insiemefinale = unioneMulti(insiemefinale, a[i]);
    }
    console.log(insiemefinale);

}


let a = [{a:1, b:1}, {b:1, c:1}, {a:1, c:1, d:1}]
console.log(a[0][a]);

console.log(unioneInsiemi(a))

