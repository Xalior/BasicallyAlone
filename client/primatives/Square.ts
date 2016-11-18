/**
 * Created by darran on 17/11/2016.
 */

var myMesh: BABYLON.Mesh;

// A "Square" is the most basic space on the board - it's Walkable, or it's not... Super it to do more...
export class Square {
    private parentMesh: BABYLON.AbstractMesh;
    mesh: BABYLON.AbstractMesh;
    x: number;
    y: number;
    isWalkable: boolean = true;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    importMesh(mesh) {
        this.mesh = mesh;
    }


    createModel(scene, world) {
        myMesh = new BABYLON.Mesh('', scene);
        // but don't render that badboy...
        scene.meshes.pop();

        this.mesh = new BABYLON.Mesh('', scene);
        return null;
    }
}