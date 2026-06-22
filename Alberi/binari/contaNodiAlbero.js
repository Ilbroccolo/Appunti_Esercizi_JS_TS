// Contare quanti sono i nodi di un albero binario che hanno un valore dato

let t = {val: 2, 
    sx: {
        val: 2, 
            dx: {val : 2}},
    dx: {val : 2, 
sx : {val: 2}}}

let t1 = {val: 3, sx : {val : 1}, dx : {val : 2}}
let tree = {
  val: 12,
  sx: {
    val: 7,
    sx: { val: 7 },
    dx: {
      val: 9,
      dx: {
        val: 9,
        sx: {
          val: 2,
          dx: {
            val: 9,
            sx: {
              val: 2,
              sx: {
                val: 9,
                dx: {
                  val: 3,
                  dx: { val: 3 }
                }
              }
            }
          }
        }
      }
    }
  }
}


function contaNodiAlbero(t){
    if(!t){
        return 0
    }
    return 1 + contaNodiAlbero(t.dx) + contaNodiAlbero(t.sx)
}



console.log(contaNodiAlbero(t1))

console.log(contaNodiAlbero(tree))

function contaNodiAlberoIf(t,v){ // conta i nodi dell'albero che hanno quel determinato valore
    if(!t){
        return 0
    }
    if(t.val == v){
        return 1 + contaNodiAlberoIf(t.dx,v) + contaNodiAlberoIf(t.sx,v)
    }

    return contaNodiAlberoIf(t.dx,v) + contaNodiAlberoIf(t.sx,v)
    
}

console.log(contaNodiAlberoIf(tree,3))