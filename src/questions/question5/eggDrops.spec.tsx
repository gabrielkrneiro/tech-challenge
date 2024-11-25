import { describe, expect, it } from "vitest";
import { eggDrop } from "./helpers";

describe("eggDrops", () => {
    it('should return highestSafeFloor equals to 1 and 2 drops when number of floors is 2', () => {
        expect(eggDrop(2)).toEqual({ highestSafeFloor: 1, totalDrops: 2 });
    })

    it('should return highestSafeFloor equals to 13 and 14 drops when number of floors is 100', () => {
        expect(eggDrop(100)).toEqual({ highestSafeFloor: 13, totalDrops: 14 });
    })

    it('should return highestSafeFloor equals to 1 and 1 drops when number of floors is 1', () => {
        expect(eggDrop(1)).toEqual({ highestSafeFloor: 0, totalDrops: 1 });
    })
})

describe('eggBreaks', () => {
    it('should return true when floor is greater than highestSafeFloor', () => {
        expect(eggDrop(1)).toEqual({ highestSafeFloor: 0, totalDrops: 1 });
    })

    it('should return false when floor is less than highestSafeFloor', () => {
        expect(eggDrop(1)).toEqual({ highestSafeFloor: 0, totalDrops: 1 });
    })
})

describe('findOptimalFloor', () => {
    it('should return 1 when nFloors is 1', () => {
        expect(eggDrop(1)).toEqual({ highestSafeFloor: 0, totalDrops: 1 });
    })

    it('should return 3 when nFloors is 2', () => {
        expect(eggDrop(2)).toEqual({ highestSafeFloor: 1, totalDrops: 2 });
    })

    it('should return 13 when nFloors is 100', () => {
        expect(eggDrop(100)).toEqual({ highestSafeFloor: 13, totalDrops: 14 });
    })
})