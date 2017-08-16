import Sprite from "./../objects/Sprite";

export default class Game {

    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D | null;

    private gameObjects: Sprite[] = [];

    constructor(canvas: string) {
        this.canvas = <HTMLCanvasElement> document.querySelector(canvas);
        this.context = this.canvas.getContext("2d");
    }

    register(sprite: Sprite) {
        this.gameObjects.push(sprite);
        if(typeof sprite.init !== "undefined") {
            sprite.init();
        }
    }
}