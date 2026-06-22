function mkIntr(T) {
    let modificato = false;

    
    for (let i = 0; i < T.length; i++) {
        let nodo = T[i];

        if (Array.isArray(nodo)) {
            let modSottoalbero = mkIntr(nodo);
            if (modSottoalbero === true) {
                modificato = true;
            }
        } 
        // 2. se è un numero (quindi una foglia valida), controlliamo se è intero
        else if (typeof nodo === "number") {
            if (!Number.isInteger(nodo)) {
                // modifichiamo direttamente l'array originale
                T[i] = Math.round(nodo);
                modificato = true;
            }
        } 
        else {
            throw new TypeError("Trovata foglia non numerica!");
        }
    }

    return modificato;
}
