let arr = [47,29,45,63,62,92,10,36,58,82,83]

let arr_sort = arr.sort()

console.log(arr_sort)

let mediana = arr_sort[Math.floor(arr_sort.length/2)]

console.log(mediana)

class ABR {
  constructor(...nodi){
    this.nodi = nodi.sort()
  }
  view_abr(){
    //let nodi_ordinati = this.nodi.sort()
    let mediana = arr_sort[Math.floor(arr_sort.length/2)]
    return mediana
  }


}

let alberino = new ABR(47,29,45,63,62,92,10,36,58,82,83)
console.log(alberino.nodi)


