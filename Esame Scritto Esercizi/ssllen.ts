type SLLNode<T> = {
  val: T | null;
  next: SLLNode<T> | null;
};


function sllLen<T>(n : SLLNode<T> | null) : number{
    
    let length : number = 0
    while(n != null){
        length+=1
        n = n.next
    }

    return length

}

let lista: SLLNode<string> = {val : "null", next: null}

console.log(sllLen(lista))