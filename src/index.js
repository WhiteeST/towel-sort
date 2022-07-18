
// You should implement your task here.
module.exports = function towelSort(matrix) {
    if (matrix === undefined || matrix.length === 0)
        return [];
    let result = matrix.reduce((acc, value, index) => {
        if (index % 2 === 0) {
            acc = acc + value + ',';
        }
        else {
            acc = acc + value.sort((a, b) => b - a) + ',';
        }
        return acc;
    }, []).slice(0, -1);
    return result.split(',');
}
