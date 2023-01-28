import { Color } from "./color";

export class Renderer {
    private context: CanvasRenderingContext2D;

    constructor(context: CanvasRenderingContext2D) {
        this.context = context;
    }

    // TODO: 色適用
    public drawCircle(x: number, y: number, r: number, color: Color): void {
        const context = this.context;
        context.fillStyle = color.rgba;
        context.beginPath();
        context.arc(x, y, r, 0, 2 * Math.PI);
        context.closePath();
        context.fill();
    }
}