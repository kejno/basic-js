/* module.exports = function countCats(backyard) {
  let count = 0;
  for (let i = 0; i < backyard.length; i++) {
    for (let k = 0; k < backyard[i].length; k++) {
      if (backyard[i][k] == '^^' || backyard[i][k] == "^^") {
        count++;
      }
    }
  }
  return count;
}; */

module.exports = function countCats(backyard) {
  let arr = [];
  for (let i = 0; i < backyard.length; i++) {
    arr.push(...backyard[i])
  }
  let res = arr.filter(item => item == "^^")
  return res.length;
};
