import{cell} from "./cell.js";

export class row{
    rowIndex:number;
    associatedCells:cell[]=[];
    
    constructor(index:number){
        this.rowIndex=index;
    }
}