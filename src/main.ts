import {sudoku} from "./sudoku.js";
let input:string=`
---------------------------
|| 0 8 0 | 0 0 0 | 6 3 0 ||
|| 0 0 9 | 0 0 8 | 0 0 0 ||
|| 0 0 0 | 0 9 7 | 0 0 0 ||
---------------------------
|| 0 4 0 | 0 0 0 | 0 0 0 ||
|| 1 0 0 | 0 0 0 | 2 5 3 ||
|| 5 0 6 | 2 0 0 | 0 4 0 ||
---------------------------
|| 0 0 0 | 0 4 0 | 0 6 5 ||
|| 0 0 0 | 8 2 0 | 0 0 0 ||
|| 0 0 8 | 9 5 1 | 4 0 0 ||
---------------------------
`;
console.log('Input Sudoku');
console.log('------------');
console.log(input);
let sudo=new sudoku();
await sudo.decodeSudokuInputString(input);
await sudo.solve();
console.log(`Solved Sudoku`);
console.log(`-------------`);
console.log(await sudo.printSudoku());