import{sudoku} from "./sudoku.js";
import{grid} from "./grid.js";
import{row} from "./row.js";
import{column} from "./column.js";

export class cell{
    cellIndex:number;
    cellValue:number=0;
    possibleValues=[1,2,3,4,5,6,7,8,9];
    associatedColumn: column;
    associatedRow: row ;
    associatedGrid: grid;
    associatedSudoku: sudoku;
    
    constructor(index:number){
        this.cellIndex=index;
    }

    findRow=(cIndex:number) => {
        let rowIndex=Math.floor(cIndex/9);
        let row=this.associatedSudoku.rows[rowIndex];
        return row;
    };

    findColumn=(cIndex:number)=>{
        let columnIndex=(cIndex%9);
        let column=this.associatedSudoku.columns[columnIndex];
        return column;
    };

    findGrid=(cIndex:number)=>{
        let gridIndex=Math.floor(cIndex/27)*3+Math.floor((cIndex%9)/3);
        let grid=this.associatedSudoku.grids[gridIndex];
        return grid;
    };
    
    linkRowColumnGridToCell=() =>{
        let row=this.findRow(this.cellIndex);
        row.associatedCells.push(this);
        this.associatedRow=row;

        let column=this.findColumn(this.cellIndex);
        column.associatedCells.push(this);
        this.associatedColumn=column;

        let grid=this.findGrid(this.cellIndex);
        grid.associatedCells.push(this);
        this.associatedGrid=grid;
    };

    setCellValue=(cValue:number) =>{
        this.cellValue=cValue;
        this.possibleValues=[];
        this.removePossibleValueFromRow(cValue);
        this.removePossibleValueFromColumn(cValue);
        this.removePossibleValueFromGrid(cValue);
    };

    removePossibleValue=(cValue:number) =>{
        let indx=this.possibleValues.indexOf(cValue);

        if (indx !=-1){
            this.possibleValues.splice(indx,1);
        }
    };

    removePossibleValueFromRow=(cValue:number)=>{
        let row=this.associatedRow;
        let cellArray=row.associatedCells;
        for(const element of cellArray){
            element.removePossibleValue(cValue);
        }
    };

    removePossibleValueFromColumn=(cValue:number)=>{
        let column=this.associatedColumn;
        let cellArray=column.associatedCells;
        for(const element of cellArray){
            element.removePossibleValue(cValue);
        }
    };

    removePossibleValueFromGrid=(cValue:number)=>{
        let grid=this.associatedGrid;
        let cellArray=grid.associatedCells;
        for(const element of cellArray){
            element.removePossibleValue(cValue);
        }
    };

}