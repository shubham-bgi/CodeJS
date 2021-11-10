//The eight queens puzzle is the problem of 
// placing eight chess queens on an 8×8 chessboard 
// so that no two queens threaten each other; 
// thus, a solution requires that no two queens 
//share the same row, column, or diagonal.

function EightQueens(strArr) {//Takes str of all the current queen position

    let x = [], y = [];
    strArr.forEach((pos) => {
      x.push(Number(pos.replace('(', '').replace(')', '').split(',')[0]));
      //console.log('x -',x);
      y.push(Number(pos.replace('(', '').replace(')', '').split(',')[1]));
      //console.log('y -',y);
    });
    let flag = true;
    let resp = '';
    for (let i = 0; i < strArr.length; i++) {
      for (let j = 1; j < strArr.length; j++) {
        if (j != i) {
          if (flag && (Math.abs(x[j] - x[i]) === Math.abs(y[j] - y[i]) || x[i] === x[j] || y[i] === y[j])) {
            resp = `(${x[i]},${y[i]})`;
            flag = false;
          }
        }
      }
    }
  
    if (!resp.length) {
      return "true";
    } else {
      return resp;
    }
  }
  
  // keep this function call here 
  console.log(EightQueens(["(5,1)", "(1,2)", "(2,4)", "(4,4)", "(2,5)", "(7,6)", "(3,7)", "(6,8)"]));