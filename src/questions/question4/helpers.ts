type Brackets = '(' | '{' | '[';

export const isValidBrackets = (sentence: string): boolean => {
    const stack = [];
    const map = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (const char of sentence) {
        if (map[char as Brackets]) {
            stack.push(char);
        } else {
            const top = stack.pop();
            if (map[top as Brackets] !== char) {
                return false;
            }
        }
    }

    return stack.length === 0;
}
