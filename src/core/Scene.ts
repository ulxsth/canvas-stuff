import { Fish } from "../Model/Fish.js";
import { FishShape } from "../Model/shape/FishShape.js";
import { Actor } from "./Actor.js";
import { Color } from "./Color.js";
import { Renderer } from "./Renderer.js";
import { schedule } from "./Scheduler.js";
import { Vector2D } from "./Vector2D.js";

type Subscription = ReturnType<typeof schedule>;


export class Scene {
    private _actors: Actor[] = [];
    private _subscription: Subscription = { end: () => {} }

    public width = 0;
    public height = 0;
    public renderer: Renderer;

    constructor(width: number, height: number, renderer: Renderer) {
        this.width = width;
        this.height = height;
        this.renderer = renderer;
    }

    public update(deltaTime: number) {
        this.renderer.clear(0, 0, this.width, this.height);
        
        const fish = new Fish(this, new Vector2D(200, 200));
        fish.update(deltaTime);
    }

    public start() {
        this.end();
        this._subscription = schedule(this.update.bind(this));
    }

    public end() {
        this._subscription.end();
    }
}