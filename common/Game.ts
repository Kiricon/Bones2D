import Sprite from "./../objects/Sprite";

export default class Game {

    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D | null;

    private gameObjects: Sprite[] = [];

    constructor(canvas: string) {
        this.canvas = <HTMLCanvasElement> document.querySelector(canvas);
        this.context = this.canvas.getContext("2d");
    }

    /**
     * Register a sprite to the game so it can be  rendered
     * and updated. 
     * @param sprite Srite to register to the game
     */
    register(sprite: Sprite) {
        this.gameObjects.push(sprite);
        if(typeof sprite.init !== "undefined") {
            sprite.init();
        }
    }
}