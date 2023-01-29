import { Color } from "./Color.js";

export class Renderer {
    private context: CanvasRenderingContext2D;

    constructor(context: CanvasRenderingContext2D) {
        this.context = context;
    }

    public clear(x:number, y:number, width: number, height: number) {
        const context = this.context;
        context.fillStyle = "rgba(0,0,0,0)";
        context.clearRect(x, y, width, height);
    }

    public drawCircle(x: number, y: number, r: number, color: Color): void {
        const context = this.context;
        context.fillStyle = color.rgba;
        context.beginPath();
        context.arc(x, y, r, 0, 2 * Math.PI);
        context.closePath();
        context.fill();
    }

    public drawLineCircle(
        x: number,
        y: number,
        r: number,
        lineWidth: number,
        color: Color
    ): void {
        const context = this.context;
        context.strokeStyle = color.rgba;
        context.beginPath();
        context.arc(x, y, r, 0, 2 * Math.PI);
        context.closePath();
        context.stroke();
    }

    public drawLine(
        x1: number,
        y1: number,
        x2: number,
        y2: number,
        width: number,
        color: Color
    ) {
        const context = this.context;
        context.strokeStyle = color.rgba;
        context.beginPath();
        context.lineTo(x1, y1);
        context.lineTo(x2, y2);
        context.closePath();
        context.lineWidth = width;
        context.stroke();
    }

    public pushMatrix() {
        this.context.save();
    }

    public popMatrix() {
        this.context.restore();
    }

    public rotate(angle: number) {
        this.context.rotate(angle);
    }

    public lineTo(x: number, y: number) {
        this.context.lineTo(x, y);
    }

    public moveTo(x: number, y: number) {
        this.context.lineTo(x, y);
    }
}
