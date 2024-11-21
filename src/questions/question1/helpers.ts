/**
 * 1) Write a javascript function that finds the duplicate items in any given array
 */

export function findDuplicated(input: unknown[]) {
    const duplicates = [];
    const checked = new Set();
    const duplicated = new Set();

    for (const item of input) {
        const itemString = JSON.stringify(item);

        if (checked.has(itemString)) {
            if (!duplicated.has(itemString)) {
                duplicates.push(item);
                duplicated.add(itemString);
            }
        } else {
            checked.add(itemString);
        }
    }

    return duplicates;
}
