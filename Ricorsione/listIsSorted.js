function listIsSorted(head) { // restituisce true se la lista è ordinata in modo non decrescente
if (!head || !head.next)
return true
if (head.val > head.next.val)
return false
else
return listIsSorted(head.next)
}
