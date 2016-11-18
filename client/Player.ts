/**
 * Created by darran on 17/11/2016.
 */

export class Player {
    mesh: BABYLON.AbstractMesh;
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    importMesh(mesh) {
        this.mesh = mesh;
    }

    createModel(scene, world) {
        return BABYLON.SceneLoader.ImportMesh("Human", "/models/", "Player.babylon", scene,
            (newMeshes, particleSystems, skeletons) => {
                // but don't render that badboy...
                scene.meshes.pop();
                this.mesh = new BABYLON.Mesh('parent', scene);
                var newMesh = newMeshes[0].clone(Math.random().toString(), this.mesh);
                newMesh.position.x = this.x - (world.width / 2);
                newMesh.position.z = this.y - (world.length / 2);
            }
        );


    }
}