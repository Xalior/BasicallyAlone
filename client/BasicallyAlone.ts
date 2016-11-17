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

        // create a built-in "sphere" shape; its constructor takes 5 params: name, width, depth, subdivisions, scene
        var sphere = BABYLON.Mesh.CreateSphere('sphere1', 16, 1, scene);

        // move the sphere upward 1/2 of its height
        sphere.position.y = 8;

        for(let x = 0; x < this.world.width; x++) {
            for(let y = 0; y < this.world.length; y++) {
                var thisSquare = this.world.grid[x][y];
                var tile = BABYLON.Mesh.CreateGround('ground1', 1, 1, 1, scene);
                tile.position.x = thisSquare.x-(this.world.width/2);
                tile.position.y = -0.1;
                tile.position.z = thisSquare.y-(this.world.length/2);
                // quick hack for plotting...
                if(!thisSquare.isWalkable) {
                    var faceColors = new Array(6);

                    faceColors[1] = new BABYLON.Color4(0,1,0,1);   // green front
                    faceColors[2] = new BABYLON.Color4(1,0,0,1);
                    faceColors[3] = new BABYLON.Color4(0,0,1,1);
                    faceColors[4] = new BABYLON.Color4(1,1,0,1);   // red top
                    faceColors[5] = new BABYLON.Color4(1,0,1,1);

                    var options = {
                        width: 0.8,
                        height: 1,
                        depth: 0.8,
                        faceColors : faceColors
                    };

                    var box = BABYLON.MeshBuilder.CreateBox('box', options, scene);
                    box.position.x = thisSquare.x-(this.world.width/2);
                    box.position.y = 0.5;
                    box.position.z = thisSquare.y-(this.world.length/2);
                }
            }
        }
        // return the created scene
        return scene;
    }

    constructor() {
        this.canvas = <HTMLCanvasElement>document.getElementById('renderCanvas');
        this.engine = new BABYLON.Engine(this.canvas, true);

        this.world = new World(21,21);
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
