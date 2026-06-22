// Definiamo il tipo Category come richiesto
type Category = 'positive' | 'negative' | 'neutral';

// Definiamo l'interfaccia per l'oggetto di ritorno
interface ClassificationResult<T> {
  positive: T[];
  negative: T[];
  neutral: T[];
}



// Funzione principale generica <T>
function classifyElements<T>(
  a: T[], 
  classifier: (element: T) => Category
): ClassificationResult<T> {
  
  // Inizializziamo l'oggetto con array vuoti
  const result: ClassificationResult<T> = {
    positive: [],
    negative: [],
    neutral: []
  };

  // Iteriamo sugli elementi e li distribuiamo in base al classifier
  for (const element of a) {
    const category = classifier(element);
    result[category].push(element);
  }

  return result;
}
function classifyStrings(stri : string) : Category {
    if(stri.endsWith("positivo")){
        return "positive"
    }
    else if(stri.endsWith("negativo")){
        return "negative"
    }
    return "neutral"
}
const classifyNumbers = (num: number): Category => {
  if (num > 0) return 'positive';
  if (num < 0) return 'negative';
  return 'neutral';
};

// Utilizzo:
const numbers = [10, -5, 0, 3, -1];
const strings  = ["Tutto positivo", "Tutto negativo", "Jo è gay", "Samu è positivo", "Tommy è negativo", "Jo è frocio"]
const outputNumbers = classifyElements(numbers, classifyNumbers);
console.log(outputNumbers)
// Risultato: { positive: [10, 3], negative: [-5, -1], neutral: [0] }

console.log(classifyElements(strings, classifyStrings))