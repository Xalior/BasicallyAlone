/**
 * Created by darran on 17/11/2016.
 */

import { LevelManager } from '../utils/LevelManager';
import { Square } from './Square';
import { Rock } from './Rock';

export class World {
    engine: BABYLON.Engine;
    width: number;  // X
    length: number; // Y
    
    grid: Array<Array<Square>>;

    level: any;

    constructor(name: string) {
        this.level = LevelManager.get(name);
        this.length = this.level.grid.length; // y
        this.width = this.level.grid[0].length; //x

        this.grid = new Array();
        for(let x = 0; x < this.width; x++) {
            var thisRow = new Array();
            for(let y = 0; y < this.length; y++) {
                thisRow.push(this.newPiece(x, y, this.level.grid[x][y]))
            }
            this.grid.push(thisRow);
        }
    }

    newPiece(x: number, y: number, type: string) {
        switch(type) {
            case '0':
                return new Square(x,y);
            case 'ROCK':
                return new Rock(x,y);
            default:
                var fake = new Square(x,y);
                fake.isWalkable = false;
                return fake;
        }
    }
}