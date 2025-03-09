export const isParentheses = (input: string): boolean => {
    const stack: string[] = [];
    const pairs: Record<string, string> = {')': '(',  '}': '{', ']': '[' };
    const opening = new Set(Object.values(pairs));

    for (const char of input) {
        if (opening.has(char)) {
            stack.push(char);
        } else if (char in pairs) {
            if (stack.pop() !== pairs[char]) return false;
        }
    }

    return stack.length === 0;
}