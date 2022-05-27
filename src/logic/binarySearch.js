export function searchInstance(array, check, p1, p2) {
    let min = p1;
    let max = p2;

    let mid = Math.trunc((min + max) / 2);

    if (array[mid] > check) {
        max = mid - 1;
        mid = Math.trunc((min + max) / 2);
        return [array[mid], min, max, 0];
    } else if (array[mid] < check) {
        min = mid + 1;
        mid = Math.trunc((min + max) / 2);
        return [array[mid], min, max, 0];
    } else {
        return [array[mid], min, max, 1];
    }
}