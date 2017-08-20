import {IPosition, ISize} from "./../common/GameInterfaces";
import Game from "./../common/Game";

export default abstract class Sprite {

    position: IPosition;
    size: ISize;
    private game: Game; 

    constructor(x:number, y:number, height: number, width: number) {
        this.position = {x: x, y: y};
        this.size = {height: height, width: width};
    }


    /**
     * Set the height of the sprite
     * @param height 
     */
    setHeigh(height: number) {
        this.size.height = height;
    }

    /**
     * Set the width of the sprite
     * @param width 
     */
    setWidth(width: number) {
        this.size.width = width;
    }

    /**
     * Method that is ran periodically througt the life
     * cycle of the gamme
     */
    abstract update(): void;

    /**
     * Method that is ran when the sprite is first registered.
     */
    abstract init(): void;

    /**
     * Method used to draw a the sprite
     */
    abstract draw(ctx: CanvasRenderingContext2D): void;

    /**
     * A method to convert the grid value to the actual
     * pixel value on the canvas.
     * @param x 
     */
    x(x: number): number {
        return this.game.canvas.width / 100 * x;
    }

    /**
     * A method to convert the grid value to the actual
     * pixel value on the canvas.
     * @param y 
     */
    y(y: number): number {
        return this.game.canvas.height / 100 * y;
    }

    /**
     * After registerying a sprite to the game we pass a
     * reference of the game to the sprite.
     * @param game 
     */
    addGameReference(game: Game) {
        this.game = game;
    }

    /**
     * Returns the real pixel value of the sprites X position
     */
    realX(): number {
        return this.x(this.position.x);
    }

    /**
     * Returns the real pixel value of the sprites y position
     */
    realY(): number {
        return this.y(this.position.y);
    }

    automaticUpdate() {

    }

}
