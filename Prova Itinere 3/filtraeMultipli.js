

function filtraMultipli(head,k){
    if(k<=1){
        return {lista : null, rimossi : 0}
    }
    if(!head){
        return {lista : null, rimossi : 0}
    }

    let lista_raccoglitrice = filtraMultipli(head.next,k)

    if(head.val%k==0){
        return {lista : lista_raccoglitrice.lista,
                rimossi : lista_raccoglitrice.rimo+1
        }
    }
    head.next = lista_raccoglitrice.lista
    return {lista : head,
            rimossi : lista_raccoglitrice.rimossi
            }

}