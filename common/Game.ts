import Sprite from "./../objects/Sprite";

export default class Game {

    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;

    private gameObjects: Sprite[];

    constructor(canvas: string) {
        this.canvas = <HTMLCanvasElement> document.querySelector(canvas);
        this.context = <CanvasRenderingContext2D> this.canvas.getContext("2d");
        this.gameObjects = [];
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

    start() {
        let self = this;
		this.canvas.width = window.innerWidth;
		this.canvas.height = window.innerHeight;
		let timer = setInterval(function() {
			self.draw();
		}, 20);
		timer;
    }

    private draw() {
        let ctx = this.context;
		ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
		ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        ctx.fillStyle = '#292D3E';
        this.drawRegisiteredObjects(ctx);
    }

    private drawRegisiteredObjects(ctx: CanvasRenderingContext2D) {
        for(let i = 0; i < this.gameObjects.length; i++) {
            if(this.gameObjects[i]) {
                this.gameObjects[i].update();
                ctx.save();
                this.gameObjects[i].draw(ctx);
                ctx.restore();
            }
        }
    }
}