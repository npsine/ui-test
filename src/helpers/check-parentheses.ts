export const isParentheses = (str: string): boolean => {
    const stack: string[] = [];
    const pairs: Record<string, string> = { ')': '(', '}': '{', ']': '[' };

    for (const char of str) {
        if (char in pairs) {
            if (stack.pop() !== pairs[char]) return false;
        } else if (Object.values(pairs).includes(char)) {
            stack.push(char);
        }
    }

    return stack.length === 0;
}