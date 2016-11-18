import { World } from './primatives/World';

export class BasicallyAlone {
    canvas: HTMLCanvasElement;
    engine: BABYLON.Engine;
    scene;
    camera: BABYLON.FreeCamera;

    world: World;

    createScene() {
        // create a basic BJS Scene object
        var scene = new BABYLON.Scene(this.engine);
        var stage = new BABYLON.Scene(this.engine);

        // create a FreeCamera, and set its position to (x, y, z)
        this.camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(6, 12, -3), scene);
        //Adding an Arc Rotate Camera
//        this.camera = new BABYLON.ArcRotateCamera("Camera", -0.5, 2.2, 100, BABYLON.Vector3.Zero(), scene);

        // target the camera to scene origin
        this.camera.setTarget(BABYLON.Vector3.Zero());

        // attach the camera to the canvas
        this.camera.attachControl(this.canvas, false);

        // create a basic light, aiming 0,1,0 - meaning, to the sky
        var light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0,1,0), scene);

        for(let x = 0; x < this.world.width; x++) {
            for(let y = 0; y < this.world.length; y++) {
                var thisSquare = this.world.grid[x][y];
                var tile = BABYLON.Mesh.CreateGround('ground1', 1, 1, 1, scene);
                tile.position.x = x-(this.world.width/2);
                tile.position.y = -0.00001;
                tile.position.z = y-(this.world.length/2);
                // quick hack for plotting...
                thisSquare.createModel(scene, this.world);
                // if(thisSquare.mesh) {
                //     thisSquare.mesh.position.x = x - (this.world.width / 2);
                //     thisSquare.mesh.position.y = 0.5;
                //     thisSquare.mesh.position.z = y - (this.world.length / 2);
                // }
            }
        }

        // return the created scene
        return scene;
    }

    constructor() {
        this.canvas = <HTMLCanvasElement>document.getElementById('renderCanvas');
        this.engine = new BABYLON.Engine(this.canvas, true);


        this.world = new World('dev1');
        this.world.engine = this.engine;
        // call the createScene function
        this.scene = this.createScene();


        // run the render loop
        this.engine.runRenderLoop(() => {
            this.scene.render();
        });

        // the canvas/window resize event handler
        window.addEventListener('resize', () => {
            this.engine.resize();
        });
    }
}
