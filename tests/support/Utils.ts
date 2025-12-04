class Utils {
    /** Generates a random integer between min (inclusive) and max (inclusive).
     * @param min The minimum value (inclusive).
     * @param max The maximum value (inclusive).
     * @returns A random integer.
     * */
    getRandomInteger(min: number, max: number): number {
        // Ensure min and max are integers and min is less than or equal to max
        const ceilMin = Math.ceil(min);
        const floorMax = Math.floor(max);

        if (ceilMin > floorMax) {
            throw new Error('Min value must be less than or equal to max value.');
        }

        // The expression is: Math.floor(Math.random() * (max - min + 1)) + min
        // This calculates a random number in [0, max - min] and then shifts it to [min, max].
        return Math.floor(Math.random() * (floorMax - ceilMin + 1)) + ceilMin;
    }
    /**
     * Generates a random string of a specified length.
     * @param length The desired length of the random string.
     * @param characters The pool of characters to choose from (default includes letters and numbers).
     * @returns The random string.
     */
    generateRandomString(length: number = 8): string {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    }
    /**
     * Helper function to check if an array of numbers is sorted ascending
     * @param arr array of numbers
     * @returns true or false
     */
    isSortedAscending(arr: number[]): boolean {
    for (let i = 0; i < arr.length - 1; i++) {
        // Use '> ' for ascending order check
        if (arr[i]! > arr[i + 1]!) {
            return false;
        }
    }
    return true;
}
}
const utils = new Utils();
export default utils;

