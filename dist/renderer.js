export class Renderer {
    constructor(context) {
        this.context = context;
    }
    // TODO: 色適用
    drawCircle(x, y, r, color) {
        const context = this.context;
        context.fillStyle = color.rgba;
        context.beginPath();
        context.arc(x, y, r, 0, 2 * Math.PI);
        context.closePath();
        context.fill();
    }
}
//# sourceMappingURL=renderer.js.map