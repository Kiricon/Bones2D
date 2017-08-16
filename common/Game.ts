export default class Game {

    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D | null;

    private gameObjects: any[];

    constructor(canvas: string) {
        this.canvas = <HTMLCanvasElement> document.querySelector(canvas);
        this.context = this.canvas.getContext("2d");
    }
}