import { Color } from "./core/Color.js";
import { Renderer } from "./core/Renderer.js";
import { Scene } from "./core/Scene.js";

window.onload = () => {
    const canvas = <HTMLCanvasElement>document.getElementById('canvas');
    const width = canvas.width;
    const height = canvas.height;
    const context = <CanvasRenderingContext2D>canvas.getContext('2d');
    const renderer = new Renderer(context);
    const scene = new Scene(width, height, renderer);

    scene.start();
}