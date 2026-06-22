function listEqual(l1,l2){ //l1 e l2 sono le teste delle due liste
    if(!l1 && l2){
        return false;
    }
    if(!l2 && l1){
        return false;
    }
    if(!l1 && !l2){
        return true;
    }
    if(l1.val === l2.val){
        return listEqual(l1.next, l2.next);
    }
    return false;    

}


let head = { val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: null } } } }
let head2 = { val: 1, next: null}
console.log(listEqual(head, head2)); 