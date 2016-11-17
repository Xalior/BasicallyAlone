/**
 * Created by darran on 17/11/2016.
 */

// A "Square" is the most basic space on the board - it's Walkable, or it's not... Super it to do more...
export class Square {
    mesh: BABYLON.Mesh;
    x: number;
    y: number;
    isWalkable: boolean = true;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    createModel(scene) {
        return null;
    }
}