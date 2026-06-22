type Category = 'positive' | 'negative' | 'neutral';

type ClassificationResult<T> = {
    positive: T[];
    negative: T[];
    neutral: T[];
};

function classifyElements<T>(a: T[], classifier: (value: T) => Category): ClassificationResult<T> {
    let result: ClassificationResult<T> = {
        positive: [],
        negative: [],
        neutral: []
    };

    for (let i = 0; i < a.length; i++) {
        let elemento = a[i];
        let categoria = classifier(elemento);

        // smistiamo l'elemento in base alla categoria ricevuta
        if (categoria === 'positive') {
            result.positive.push(elemento);
        } else if (categoria === 'negative') {
            result.negative.push(elemento);
        } else if (categoria === 'neutral') {
            result.neutral.push(elemento);
        }
    }

    return result;
}
