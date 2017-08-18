import GenericObject from "./objects/GenericObject";
import Game from "./common/Game";

let game = new Game("#canvas");

game.register(new GenericObject(50, 50, 10, 10));

game.start();