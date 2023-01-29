import { Actor } from "./Actor";
import { Color } from "./Color";
import { Renderer } from "./Renderer";
import { schedule } from "./Scheduler";

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

    public draw() {
        this.renderer.clear(0, 0, this.width, this.height);
        this.renderer.drawCircle(100, 100, 100, new Color("#000000"));
    }

    public start() {
        this.end();
        this._subscription = schedule(this.draw.bind(this));
    }

    public end() {
        this._subscription.end();
    }
}