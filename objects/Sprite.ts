import {IPosition, ISize} from "./../common/grid";

export default class Sprite {

    position: IPosition;
    size: ISize;

    constructor(x:number, y:number, height: number, width: number) {
        this.position = {x: x, y: y};
        this.size = {height: height, width: width};
    }

    setHeigh(height: number) {
        this.size.height = height;
    }

    setWidth(width: number) {
        this.size.width = width;
    }

    private update() {

    }
}
