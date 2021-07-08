
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result = [];
  if(matrix == [] || matrix == undefined){
    console.log('bye');
    return result;
  }
  else {
    for(let i = 0; i < matrix.length; i++){
      for(let k = 0; k < matrix[i].length; k++){
        result.push(i % 2 === 0 ? matrix[i][k] : matrix[i][matrix[i].length - k - 1]);
      }
    }
    console.log(result);
    return result;
  }
}
