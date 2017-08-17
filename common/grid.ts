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

    x(x: number):number {
        return canvasWidth / 100 * num;
    }

    y(y: number):number {
        return canvasHeight / 100 * num;
    }
}
