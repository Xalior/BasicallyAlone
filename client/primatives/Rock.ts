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

    createModel(scene, world) {
        var stoneStr = "Stone_0" + Math.floor((Math.random()*4) +1).toString()
        return BABYLON.SceneLoader.ImportMesh(stoneStr, "/models/", "Stones.babylon", scene,
            (newMeshes, particleSystems, skeletons) => {
                // but don't render that badboy...

                scene.meshes.pop();
//                this.mesh = new BABYLON.Mesh();
                this.mesh = new BABYLON.Mesh('parent', scene);
                scene.meshes.pop();
                var newMesh = newMeshes[0].clone(Math.random().toString(), this.mesh);
                newMesh.scaling.x = 0.018;
                newMesh.scaling.y = 0.018;
                newMesh.scaling.z = 0.018;
                newMesh.rotation.z = Math.random()*3;
                newMesh.position.x = this.x - (world.width / 2);
                newMesh.position.y = 0.5;
                newMesh.position.z = this.y - (world.length / 2);

            }
        );


    }
}