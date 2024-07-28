import{grid} from "./grid.js";
import{cell} from "./cell.js";
import{row} from "./row.js";
import{column} from "./column.js";

export class sudoku{
    cells:cell[]=[];
    rows:row[]=[];
    columns:column[]=[];
    grids:grid[]=[];
    continueSolving:boolean=true;

    constructor(){
        this.createColumns();
        this.createRows();
        this.createGrids();

        this.createCells();
    }
    createCells= () =>{
        for(let index=0;index<81;index++){
            let c=new cell(index);
            c.associatedSudoku=this;
            this.cells[index]=c;
            this.cells[index].linkRowColumnGridToCell();
        }
    };
    createColumns = () =>{
        for(let index=0;index<9;index++){
            this.columns[index]=new column(index);
        }
    };
    createRows = () =>{
        for(let index=0;index<9;index++){
            this.rows[index]=new row(index);
        }
    };
    createGrids = () =>{
        for(let index=0;index<9;index++){
            this.grids[index]=new grid(index);
        }
    };
    solve=async()=>{
        while(this.continueSolving){
            this.internalSolve();
        }
    };

    internalSolve=async()=>{
        this.continueSolving=false;
        for(const element of this.cells){
            let c=element;
            if(c.possibleValues.length==1){
                c.setCellValue(c.possibleValues[0]);
            }
            if(c.cellValue==0){
                this.continueSolving=true;
            }
        }
    };

    decodeSudokuInputString = async(input:string)=>{
        let cIndex=0;
        for (let index = 0; index < input.length; index++) {
            let inCharacter=input.substring(index,index+1);
                if(!isNaN(parseInt(inCharacter))){
                    let cellobj=this.cells[cIndex++];
                    if(parseInt(inCharacter)!=0){
                        cellobj.setCellValue(parseInt(inCharacter));
                    }
                }
        }
    };
    printSudoku=async()=>{
        let counter=0;
        let input=`
        ---------------------------
        || ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} | ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} | ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ||
        || ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} | ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} | ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ||
        || ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} | ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} | ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ||
        ---------------------------
        || ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} | ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} | ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ||
        || ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} | ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} | ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ||
        || ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} | ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} | ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ||
        ---------------------------
        || ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} | ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} | ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ||
        || ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} | ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} | ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ||
        || ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} | ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} | ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ||
        ---------------------------
        `;
        return input;
        
    };

}
export default sudoku;