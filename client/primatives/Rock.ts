/**
 * Created by darran on 17/11/2016.
 */

import { Square } from './Square';

// A "Square" is the most basic space on the board - it's Walkable, or it's not... Super it to do more...
export class Rock extends Square  {
    isWalkable: boolean = false;

    constructor(x: number, y: number) {
        super(x, y);

    }

    createModel(scene) {
        var faceColors = new Array(6);

        for(var i = 0; i<6; i++) {
            var tint = (Math.random()*0.5)+0.25;
            faceColors[i] = new BABYLON.Color3(tint,tint,tint);
        }

        var options = {
            width: 0.8,
            height: 1.5,
            depth: 0.8,
            faceColors : faceColors
        };

        var baseMesh = BABYLON.MeshBuilder.CreateBox('rock', options, scene);
        var parts = parseInt((Math.random()*5))+1;
        var meshes = [];
        for(var i=0;i<parts;i++){
            var partMesh = baseMesh.clone("rock_"+i);
            var offset = Math.random()*0.2;
            partMesh.rotation.x = Math.random();
//            partMesh.rotation.y = Math.random();
            partMesh.rotation.z = Math.random();
            partMesh.position.x = offset;
            partMesh.position.z = offset;
            meshes.push(partMesh);
        }
        this.mesh = BABYLON.Mesh.MergeMeshes(meshes);
    }
}