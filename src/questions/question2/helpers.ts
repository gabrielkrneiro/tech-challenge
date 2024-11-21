function interval(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export async function writeItems(arr: unknown[], output: unknown[], setOutput: (output: unknown[]) => void) {
    let delay = 1000; // Start with 1 second

    for (const item of arr) {
        console.log(item);
        await interval(delay);
        const newOutput = [...output, item]

        
        setOutput(newOutput);
        delay *= 2; // Double the delay for the next item
    }
}

// const items = ['a', 'b', 'c', 'd'];
// writeItems(items);