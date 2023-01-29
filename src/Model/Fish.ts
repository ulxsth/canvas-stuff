import { Actor } from "../core/Actor.js";
import { Scene } from "../core/Scene.js";
import { Vector2D } from "../core/Vector2D.js";
import { FishShape } from "./shape/FishShape.js";

export class Fish extends Actor {
    public shape = new FishShape();

    public override update(deltaTime: number): void {
        this.shape.draw(this.location.x, this.location.y, this.rotate, this.angle, deltaTime, this.scene);
    }
}