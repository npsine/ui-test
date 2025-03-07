export const reorderDeck = (deck: number[]): number[] => {
    const n: number = deck.length;
    // sorting deck first
    deck.sort((a, b) => a - b);

    const arrayOfOrderIndex: number[] = [];
    const arrayOfDeckSize: number[] = [];
    // generate array from deck size
    for (let i = 0; i < n; i++) {
        arrayOfDeckSize.push(i);
    }

    while (arrayOfDeckSize.length > 0) {
        // reveal the first number of array and check front should not to be null
        const front = arrayOfDeckSize.shift()!;
        arrayOfOrderIndex.push(front);
        if (arrayOfDeckSize.length > 0) {
            // and then move next number to the last index
            arrayOfDeckSize.push(arrayOfDeckSize.shift()!);
        }
    }

    // assign sorted values to correct positions
    const result = new Array(n);
    for (let i = 0; i < n; i++) {
        result[arrayOfOrderIndex[i]] = deck[i];
    }

    return result;
}