
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix == undefined){ return [] }
  arr = matrix.map((item, i) => i%2==1 ? item.reverse() : item);
  let flat = arr.reduce((acc, it) => [...acc, ...it], []);
  return flat;
}
