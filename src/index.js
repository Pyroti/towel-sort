
// You should implement your task here.

module.exports = function towelSort (matrix) {
  return matrix == undefined ? [] : matrix.map((item, i) => i%2==1 ? item.reverse() : item).flat();
}
