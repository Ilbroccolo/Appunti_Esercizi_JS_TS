/*

*/

function classh(o:any):string[]{
    let array: string[] = []
    
    let p = Object.getPrototypeOf(o)
    
    while(p !== null){
      array.push(p.constructor.name)
        
        p = Object.getPrototypeOf(p)
    }
    return array.reverse()
}

let DNA{


	"A" = 
	"B"
}