// You should implement your task here.

module.exports = function towelSort(matrix) {
    let arr = [];
    if (matrix === undefined) {
        return [];
    } else {
        for (let a = 0; a < matrix.length; a++) {
            if (a % 2 !== 0) matrix[a] = matrix[a].reverse();
        }
    
        matrix.map((ar) => arr = [...arr, ...ar]);
        return arr;
    }
};
