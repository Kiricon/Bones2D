/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var GenericObject_1 = __webpack_require__(1);
var Game_1 = __webpack_require__(3);
var game = new Game_1.default("#canvas");
game.register(new GenericObject_1.default(1, 2, 3, 5));
game.start();


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Sprite_1 = __webpack_require__(2);
var GenericObject = (function (_super) {
    __extends(GenericObject, _super);
    function GenericObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GenericObject.prototype.update = function () {
        console.log('Update');
        this.position.x++;
    };
    GenericObject.prototype.init = function () {
        //alert(this.position.x);
        console.log(this.position.x);
    };
    GenericObject.prototype.draw = function (ctx) {
        // Draw stuff here
        ctx.beginPath();
        ctx.rect(this.x(this.position.x), this.y(this.position.y), 200, 100);
        ctx.fillStyle = 'yellow';
        ctx.fill();
        ctx.stroke();
    };
    return GenericObject;
}(Sprite_1.default));
exports.default = GenericObject;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Sprite = (function () {
    function Sprite(x, y, height, width) {
        this.position = { x: x, y: y };
        this.size = { height: height, width: width };
    }
    /**
     * Set the height of the sprite
     * @param height
     */
    Sprite.prototype.setHeigh = function (height) {
        this.size.height = height;
    };
    /**
     * Set the width of the sprite
     * @param width
     */
    Sprite.prototype.setWidth = function (width) {
        this.size.width = width;
    };
    Sprite.prototype.x = function (x) {
        return 0;
    };
    Sprite.prototype.y = function (y) {
        return 0;
    };
    Sprite.prototype.setGrid = function (grid) {
        this.x = grid.x;
        this.y = grid.y;
    };
    return Sprite;
}());
exports.default = Sprite;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Grid_1 = __webpack_require__(4);
var Game = (function () {
    function Game(canvas) {
        this.canvas = document.querySelector(canvas);
        this.context = this.canvas.getContext("2d");
        this.gameObjects = [];
        this.grid = new Grid_1.Grid(this.canvas);
    }
    /**
     * Register a sprite to the game so it can be  rendered
     * and updated.
     * @param sprite Srite to register to the game
     */
    Game.prototype.register = function (sprite) {
        sprite.setGrid(this.grid);
        this.gameObjects.push(sprite);
        if (typeof sprite.init !== "undefined") {
            sprite.init();
        }
    };
    /**
     * Start the game instance and begin periodic updates every 20ms
     */
    Game.prototype.start = function () {
        var self = this;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        var timer = setInterval(function () {
            self.draw();
        }, 20);
        timer;
    };
    /**
     * Draw the blank canvas and the calls subsequent
     * method to run through all game objects.
     */
    Game.prototype.draw = function () {
        var ctx = this.context;
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        ctx.fillStyle = '#292D3E';
        this.drawRegisiteredObjects(ctx);
    };
    /**
     * Loop through all registered game objects and call their
     * update method and then their draw method.
     * This will draw all registered objects on the screen
     * @param ctx
     */
    Game.prototype.drawRegisiteredObjects = function (ctx) {
        for (var i = 0; i < this.gameObjects.length; i++) {
            if (this.gameObjects[i]) {
                this.gameObjects[i].update();
                ctx.save();
                this.gameObjects[i].draw(ctx);
                ctx.restore();
            }
        }
    };
    return Game;
}());
exports.default = Game;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Grid = (function () {
    function Grid(canvas) {
        this.canvasHeight = canvas.height;
        this.canvasWidth = canvas.width;
    }
    /**
     * Calculate the pixel position of an x coordinate on a 100x100 grid
     * @param x
     */
    Grid.prototype.x = function (x) {
        return this.canvasWidth / 100 * x;
    };
    /**
     * Calculate the pixel position of a y coordiante on a 100x100 grid
     * @param y
     */
    Grid.prototype.y = function (y) {
        return this.canvasHeight / 100 * y;
    };
    return Grid;
}());
exports.Grid = Grid;


/***/ })
/******/ ]);