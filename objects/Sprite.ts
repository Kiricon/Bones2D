import {IPosition, ISize} from "./../common/grid";

export default abstract class Sprite {

    position: IPosition;
    size: ISize;

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
}
