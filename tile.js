
class Wall {
    
    constructor(game, x, y) {
        Object.assign(this, { game, x, y });
        this.x *= PARAMS.BLOCKWIDTH;
        this.y *= PARAMS.BLOCKWIDTH;
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/stone.png");
        this.BB = new BoundingBox(this.x, this.y, PARAMS.BLOCKWIDTH, PARAMS.BLOCKWIDTH, "wall");

    }

    update() {


    }


    draw() {
        
        ctx.drawImage(this.spritesheet, 0, 0, 16, 16, this.x  - this.game.camera.x, this.y  - this.game.camera.y, PARAMS.BLOCKWIDTH, PARAMS.BLOCKWIDTH);
        // hitbox
        if (PARAMS.DEBUG) {
            this.BB.draw(ctx, this.game.camera);
        }
    }

}

class Maze {
    constructor(game, x, y) {
        Object.assign(this, { game, x, y });
        this.x *= PARAMS.BLOCKWIDTH;
        this.y *= PARAMS.BLOCKWIDTH;
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/maze.png");
        this.BB = new BoundingBox(this.x, this.y, PARAMS.BLOCKWIDTH, PARAMS.BLOCKWIDTH, "wall");

    }

    update() {


    }


    draw() {
        
        ctx.drawImage(this.spritesheet, this.x  - this.game.camera.x, this.y  - this.game.camera.y, PARAMS.BLOCKWIDTH, PARAMS.BLOCKWIDTH);
        // hitbox
        if (PARAMS.DEBUG) {
            this.BB.draw(ctx, this.game.camera);
        }
    }

}
