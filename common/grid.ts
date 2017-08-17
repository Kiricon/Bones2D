export interface IPosition {
    x: number;
    y: number;
}

export interface ISize {
    height: number;
    width: number;
}

export class Grid {
    canvasHeight: number;
    canvasWidth: number;

    constructor(canvas: HTMLCanvasElement) {
        this.canvasHeight = canvas.height;
        this.canvasWidth = canvas.width;
    }

    /**
     * Calculate the pixel position of an x coordinate on a 100x100 grid
     * @param x 
     */
    x(x: number):number {
        return canvasWidth / 100 * num;
    }


    /**
     * Calculate the pixel position of a y coordiante on a 100x100 grid
     * @param y 
     */
    y(y: number):number {
        return canvasHeight / 100 * num;
    }
}
