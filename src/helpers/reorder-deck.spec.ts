import {reorderDeck} from "./reorder-deck";

describe("reorderDeck", () => {
    test("should return the correct order for a given deck", () => {
        expect(reorderDeck([17, 13, 11, 2, 3, 5, 7])).toEqual([2, 13, 3, 11, 5, 17, 7]);
    });

    test("should handle an already sorted deck", () => {
        expect(reorderDeck([1, 2, 3, 4, 5, 6, 7, 8, 9])).toEqual([1, 9, 2, 6, 3, 8, 4, 7, 5]);
    });

    test("should return the same number for a single-card deck", () => {
        expect(reorderDeck([42])).toEqual([42]);
    });

    test("should handle two cards correctly", () => {
        expect(reorderDeck([5, 10])).toEqual([5, 10]);
    });

    test("should handle an empty deck", () => {
        expect(reorderDeck([])).toEqual([]);
    });
});
