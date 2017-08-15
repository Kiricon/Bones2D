import IPosition from "../system/IPosition";

export default class Object {
    position: IPosition;

    constructor(x:number, y:number) {
        this.position = {x: x, y: y};
    }
}