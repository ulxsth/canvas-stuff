import { Renderer } from "./renderer.js";

window.onload = () => {
    const canvas = <HTMLCanvasElement>document.getElementById('canvas');
    const context = <CanvasRenderingContext2D> canvas.getContext('2d');
    const renderer = new Renderer(context);
}
