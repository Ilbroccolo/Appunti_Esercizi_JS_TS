//Tagliare da un albero binario tutti i rami che iniziano da un nodo con valore dato

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

let t1 = {val: 2, sx : {val : 3 , sx  : {val : 5}}, dx : {val : 2}}

function tagliaAlbero(t,v){
    if(!t){
        return null
    }
    if(t.val == v){
        delete  t.dx
        delete t.sx
        return t 
    }
    return (tagliaAlbero(t.dx, v)  || tagliaAlbero(t.sx,v))
}

tagliaAlbero(tree, 2)
tagliaAlbero(t1, 3)
console.log(t1)

console.log(JSON.stringify(tree, null, 1))
