class VeicoloError extends Error { }

class Veicolo {
  #targa = ""
  #n_ruote = 0
  #colore = ""

  constructor(targa, n_ruote, colore) {

    if (typeof targa === "string" && targa.length == 7)
      this.#targa = targa
    else
      throw new VeicoloError("La targa deve essere una sequenza alfanumerica di 7 caratteri!")

    if (typeof n_ruote === "number" && n_ruote > 0)
      this.#n_ruote = n_ruote
    else
      throw new VeicoloError("Il numero di ruote deve essere maggiore di 0")

    if (typeof colore === "string" && colore.length > 0)
      this.#colore = colore
    else
      throw new VeicoloError("Il colore deve essere una sequenza alfabetica!")
  }

  get targa() { return this.#targa }
  get colore() { return this.#colore }
  get n_ruote() { return this.#n_ruote }

  set targa(targa) {
    if (typeof targa === "string" && targa.length == 7)
      this.#targa = targa
    else
      throw new VeicoloError("La targa deve essere una sequenza alfanumerica di 7 caratteri!")
  }

  set colore(colore) {
    if (typeof colore === "string" && colore.length > 0)
      this.#colore = colore
    else
      throw new VeicoloError("Il colore deve essere una sequenza alfabetica!")
  }

  set n_ruote(n_ruote) {
    if (typeof n_ruote === "number" && n_ruote > 0)
      this.#n_ruote = n_ruote
    else
      throw new VeicoloError("Il numero di ruote deve essere maggiore di 0")
  }

  toString() {
    return this.#targa + this.#n_ruote + this.#colore
  }
}

class Automobile extends Veicolo {
  #n_porte = 0
  constructor(targa, colore, n_porte) {
    if (typeof n_porte === "number" && n_porte > 0) {
      super(targa, 4, colore)
      this.#n_porte = n_porte
    }
    else
      throw new VeicoloError('Il numero delle porte deve essere maggiore di 0!')
  }

  get n_porte() { return this.#n_porte }

  set n_porte(n_porte) {
    if (typeof n_porte === "number" && n_porte > 0)
      this.#n_porte = n_porte
    else
      throw new VeicoloError("Il numero di porte deve essere maggiore di 0")
  }

  toString() {
    return super.toString() + this.#n_porte
  }
}