import Sprite from "./Sprite";

export default class GenericObject extends Sprite {

    update(): void {
        console.log('Update');
    }

    init(): void {
        alert(this.position.x);
    }

}