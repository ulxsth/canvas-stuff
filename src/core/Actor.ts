import { Scene } from "./Scene.js";
import { Vector2D } from "./Vector2D.js";

export abstract class Actor {
    public scene: Scene;
    public location = new Vector2D(0, 0);
    public rotate = 0;
    public angle = 0;

    constructor(scene: Scene, location?: Vector2D, rotate?: number, angle?: number) {
        this.scene = scene;
        this.location = location ?? this.location;
        this.rotate = rotate ?? this.rotate;
        this.angle = angle ?? this.angle;
    }

    public update(deltaTime: number) {

    }
}