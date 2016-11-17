import { World } from './primatives/World';

export class BasicallyAlone {
    canvas: HTMLCanvasElement;
    engine: BABYLON.Engine;
    scene;

    world: World;

    createScene() {
        // create a basic BJS Scene object
        var scene = new BABYLON.Scene(this.engine);

        // create a FreeCamera, and set its position to (x, y, z)
        var camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(20, 10,-20), scene);

        // target the camera to scene origin
        camera.setTarget(BABYLON.Vector3.Zero());

        // attach the camera to the canvas
        camera.attachControl(this.canvas, false);

        // create a basic light, aiming 0,1,0 - meaning, to the sky
        var light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0,1,0), scene);

        for(let x = 0; x < this.world.width; x++) {
            for(let y = 0; y < this.world.length; y++) {
                var thisSquare = this.world.grid[x][y];
                var tile = BABYLON.Mesh.CreateGround('ground1', 1, 1, 1, scene);
                tile.position.x = x-(this.world.width/2);
                tile.position.y = -0.1;
                tile.position.z = y-(this.world.length/2);
                // quick hack for plotting...
                thisSquare.createModel(scene);
                console.log(thisSquare.mesh);
                if(thisSquare.mesh) {
                    thisSquare.mesh.position.x = x - (this.world.width / 2);
                    thisSquare.mesh.position.y = 0.5;
                    thisSquare.mesh.position.z = y - (this.world.length / 2);
                }
            }
        }
        // return the created scene
        return scene;
    }

    constructor() {
        this.canvas = <HTMLCanvasElement>document.getElementById('renderCanvas');
        this.engine = new BABYLON.Engine(this.canvas, true);


        this.world = new World('dev1');
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
