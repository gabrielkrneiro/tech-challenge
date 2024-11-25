export const findOptimalFloor = (nFloors: number): number  => {
    return Math.ceil((-1 + Math.sqrt(1 + 8 * nFloors)) / 2);
}

export const eggDrop = (nFloors: number): { highestSafeFloor: number, totalDrops: number } => {
    let optimalFloor = findOptimalFloor(nFloors);
    let currentFloor = optimalFloor;
    let previousFloor = 0;
    let drops = 0;

    while (currentFloor <= nFloors) {
        drops += 1;
        if (eggBreaks(currentFloor, currentFloor - 1)) {  // This function simulates the egg breaking
            break;
        }
        previousFloor = currentFloor;
        currentFloor += --optimalFloor;
    }

    for (let floor = previousFloor + 1; floor < currentFloor; floor++) {
        drops += 1;
        if (eggBreaks(floor, currentFloor - 1)) {  // This function simulates the egg breaking
            return { highestSafeFloor: floor - 1, totalDrops: drops };
        }
    }

    return { highestSafeFloor: currentFloor - 1, totalDrops: drops };
}

export const eggBreaks = (floor: number, highestSafeFloor: number): boolean => {
    return floor > highestSafeFloor;
}
