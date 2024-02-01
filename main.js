const gameEngine = new GameEngine();
const ASSET_MANAGER = new AssetManager();

let canvas;
let ctx;

// sprites
ASSET_MANAGER.queueDownload("./sprites/linksprites.png");
ASSET_MANAGER.queueDownload("./sprites/title.png");
ASSET_MANAGER.queueDownload("./tiles/stone.png");


// music
// ASSET_MANAGER.queueDownload("");		add music in future

// sfx

ASSET_MANAGER.downloadAll(function () {

	// ASSET_MANAGER.autoRepeat("");		add music in future

	PARAMS.BLOCKWIDTH = PARAMS.BITWIDTH * PARAMS.SCALE;

	// We access the HTML canvas using the global document variable and the getElementByID function.
	canvas = document.getElementById("gameWorld");
	ctx = canvas.getContext("2d");	// Paint to canvas element through a 2D context
	ctx.imageSmoothingEnabled = false;

	PARAMS.CANVAS_WIDTH = canvas.width;
	PARAMS.CANVAS_HEIGHT = canvas.height;


	
	gameEngine.init(ctx);
	// let link = new Link();
	// gameEngine.addEntity(link);
	gameEngine.addEntity(new SceneManager(gameEngine));
	// scene manager manages which scene we're in (level 1 sky, bricks, goombas, etc.)
	// new SceneManager(gameEngine);

	gameEngine.start();
});
