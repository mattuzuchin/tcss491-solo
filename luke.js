class Luke {
	constructor(game) {
		this.game = game;
		this.animator = new Animator(ASSET_MANAGER.getAsset("./file.png"), 0, 0, 150, 130, 3, 0.2);
		this.x = 0;
		this.y = 0;
		this.speed = 25;
	};

	update() {
		this.x  += this.speed * this.game.clockTick;
		if(this.x > 1024) this.x = 0;


	};

	draw(ctx) {
		this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
	};
}