import{cell} from "./cell.js";

export class column{
    columnIndex:number;
    associatedCells:cell[]=[];
    
    constructor(index:number){
        this.columnIndex=index;
    }
}