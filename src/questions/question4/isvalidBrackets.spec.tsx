
import { describe, it, expect } from 'vitest'
import { isValidBrackets } from "./helpers";

describe('isValidBrackets', () => {
    it('should return true if the brackets are valid', () => {
        expect(isValidBrackets("{[]}")).toBe(true);
    });

    it('should return false if the brackets are invalid', () => {
        expect(isValidBrackets("{(])}")).toBe(false);
        expect(isValidBrackets("{([)]}")).toBe(false);
    });
})