import Sprite from "./Sprite";

export default class GenericObject extends Sprite {

    update(): void {
        console.log('Update');
        this.position.x++;
    }

    init(): void {
        //alert(this.position.x);
        console.log(this.position.x);
    }

    draw(ctx: CanvasRenderingContext2D): void {
        // Draw stuff here
        ctx.beginPath();
        ctx.rect(this.x(this.position.x), this.y(this.position.y), 200, 100);
        ctx.fillStyle = 'yellow';
        ctx.fill();
        ctx.stroke();
    }

}