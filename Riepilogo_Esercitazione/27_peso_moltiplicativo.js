function pesoMol(n) {
    let passaggi = 0;
    let numeroCorrente = n;

    while (numeroCorrente >= 10) {
        let prodottoCifre = 1;
        let numeroStringa = String(numeroCorrente);

        for (let i = 0; i < numeroStringa.length; i++) {
            prodottoCifre = prodottoCifre * Number(numeroStringa[i]);
        }

        numeroCorrente = prodottoCifre;
        passaggi = passaggi + 1;
    }

    return passaggi;
}
