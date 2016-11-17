/**
 * Created by darran on 17/11/2016.
 */

import { Square } from './Square';

export class World {

    width: number;  // X
    length: number; // Y
    
    grid: Array<Array<Square>>;

    constructor(width: number, length: number) {
        this.width = width; //x
        this.length = length; //y

        this.grid = new Array();
        for(let x = 0; x < width; x++) {
            var thisRow = new Array();
            for(let y = 0; y < length; y++) {
                thisRow.push(this.newPiece(x,y))
            }
            this.grid.push(thisRow);
        }
    }

    newPiece(x: number, y: number) {
        return new Square(x,y);
    }
}