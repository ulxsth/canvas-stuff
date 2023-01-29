import { Color } from "./Color.js";
import { schedule } from "./Scheduler.js";
export class Scene {
    constructor(width, height, renderer) {
        this._actors = [];
        this._subscription = { end: () => { } };
        this.width = 0;
        this.height = 0;
        this.width = width;
        this.height = height;
        this.renderer = renderer;
    }
    draw() {
        this.renderer.clear(0, 0, this.width, this.height);
        this.renderer.drawCircle(100, 100, 100, new Color("#000000"));
    }
    start() {
        this.end();
        this._subscription = schedule(this.draw.bind(this));
    }
    end() {
        this._subscription.end();
    }
}
//# sourceMappingURL=Scene.js.map