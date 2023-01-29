import { Scene } from "../../core/Scene.js";
import { Shape } from "../../core/Shape.js";
import { Color } from "../../core/Color.js";

export class FishShape extends Shape {
    public override draw(
        x: number,
        y: number,
        rotate: number,
        angle: number,
        deltaTime: number,
        scene: Scene
    ): void {
        const renderer = scene.renderer;

        // 描画
        renderer.drawCircle(100, 100, 100, new Color("#000000"));
    }
}
