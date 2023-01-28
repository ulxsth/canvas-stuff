import { Color } from "./color.js";
import { Renderer } from "./renderer.js";

window.onload = () => {
    const canvas = <HTMLCanvasElement>document.getElementById('canvas');
    const context = <CanvasRenderingContext2D> canvas.getContext('2d');
    const renderer = new Renderer(context);

    // renderer.drawCircle(100, 100, 100, new Color("#000000"));
}
