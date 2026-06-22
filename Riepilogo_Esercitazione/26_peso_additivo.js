// funzione che calcola il peso additivo di un numero
function pesoAdd(n) {
    let passaggi = 0;
    let numeroCorrente = n;

    while (numeroCorrente >= 10) {
        let sommaCifre = 0;
        let numeroStringa = String(numeroCorrente);

        for (let i = 0; i < numeroStringa.length; i++) {
            sommaCifre = sommaCifre + Number(numeroStringa[i]);
        }

        numeroCorrente = sommaCifre;
        passaggi = passaggi + 1;
    }

    return passaggi;
}
