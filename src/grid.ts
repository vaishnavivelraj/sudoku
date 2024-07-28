import{cell} from "./cell.js";

export class grid{
    gridIndex:number;
    associatedCells:cell[]=[];
    
    constructor(index:number){
        this.gridIndex=index;
    }
}