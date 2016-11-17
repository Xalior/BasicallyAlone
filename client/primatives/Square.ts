/**
 * Created by darran on 17/11/2016.
 */

export class Square {
    x: number;
    y: number;
    isWalkable: boolean = true;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;

        var whit = Math.random();
        if(whit>0.9){
            console.log(whit);
            this.isWalkable = false;
        }
    }
}