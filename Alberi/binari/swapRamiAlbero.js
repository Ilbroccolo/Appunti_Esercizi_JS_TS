//Scambiare fra di loro i rami destro e sinistro della radice di un albero binario

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

let t1 = {val: 3, sx : {val : 1}, dx : {val : 2}}

console.log(t1.val)
console.log(t1.sx.val)
console.log(t1.dx.val)

/*function swap(a,b){
    let t = a;
    a = b
    b = t
    
}
swap(t1.sx, t1.dx)
*/




function swapRamiAlbero(t){
    if(!t){
        return null
    }
    let temp = t.dx
    t.dx = t.sx
    t.sx = temp
    return t

}
swapRamiAlbero(t1)
console.log(t1.val)
console.log(t1.sx.val)
console.log(t1.dx.val)