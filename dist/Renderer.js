export class Renderer {
    constructor(context) {
        this.context = context;
    }
    clear(x, y, width, height) {
        const context = this.context;
        context.fillStyle = "rgba(0,0,0,0)";
        context.clearRect(x, y, width, height);
    }
    drawCircle(x, y, r, color) {
        const context = this.context;
        context.fillStyle = color.rgba;
        context.beginPath();
        context.arc(x, y, r, 0, 2 * Math.PI);
        context.closePath();
        context.fill();
    }
    drawLineCircle(x, y, r, lineWidth, color) {
        const context = this.context;
        context.strokeStyle = color.rgba;
        context.beginPath();
        context.arc(x, y, r, 0, 2 * Math.PI);
        context.closePath();
        context.stroke();
    }
    drawLine(x1, y1, x2, y2, width, color) {
        const context = this.context;
        context.strokeStyle = color.rgba;
        context.beginPath();
        context.lineTo(x1, y1);
        context.lineTo(x2, y2);
        context.closePath();
        context.lineWidth = width;
        context.stroke();
    }
    pushMatrix() {
        this.context.save();
    }
    popMatrix() {
        this.context.restore();
    }
    rotate(angle) {
        this.context.rotate(angle);
    }
    lineTo(x, y) {
        this.context.lineTo(x, y);
    }
    moveTo(x, y) {
        this.context.lineTo(x, y);
    }
}
//# sourceMappingURL=Renderer.js.map