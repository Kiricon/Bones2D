import Sprite from "./Sprite";

export default class GenericObject extends Sprite {

    update(): void {
        this.position.x+= 0.1;
        this.position.y+= 0.2;
    }

    init(): void {
        //alert(this.position.x);
        console.log(this.position.x);
    }

    draw(ctx: CanvasRenderingContext2D): void {
        ctx.beginPath();
        ctx.rect(this.realX(), this.realY(), 200, 100);
        ctx.fillStyle = 'yellow';
        ctx.fill();
        ctx.stroke();
    }

}