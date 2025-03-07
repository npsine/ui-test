import { isParentheses } from "./check-parentheses";

describe('isParentheses', () => {
    test('valid cases', () => {
        expect(isParentheses("()")).toBe(true);
        expect(isParentheses("(){}[]")).toBe(true);
        expect(isParentheses("({[]})")).toBe(true);
        expect(isParentheses("[{()}]")).toBe(true);
        expect(isParentheses("a(b{c}d)e")).toBe(true);
        expect(isParentheses("1 + 2 + (3 - 4)")).toBe(true);
        expect(isParentheses("export const isParentheses = (str: string): boolean => { return false; }")).toBe(true);
    });

    test('invalid cases', () => {
        expect(isParentheses("((){}[]")).toBe(false);
        expect(isParentheses("({])")).toBe(false);
        expect(isParentheses("([)]")).toBe(false);
        expect(isParentheses("]{")).toBe(false);
        expect(isParentheses(")(")).toBe(false);
        expect(isParentheses("([)")).toBe(false);
    });

    test('edge cases', () => {
        expect(isParentheses("")).toBe(true);
        expect(isParentheses("hello world")).toBe(true);
        expect(isParentheses("(((((((((")).toBe(false);
        expect(isParentheses("}}}}}}")).toBe(false);
    });
});
