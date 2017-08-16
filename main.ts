import GenericObject from "./objects/GenericObject";
import Game from "./common/Game";

let game = new Game("#canvas");

game.register(new GenericObject(1, 2, 3, 5));

game.start();