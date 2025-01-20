class Luke {
	constructor(game) {
		this.game = game;
		this.animator = new Animator(ASSET_MANAGER.getAsset("./runner.png"), 0, 0, 568, 540, 4, 0.2);
	};

	update() {

	};

	draw(ctx) {
		this.animator.drawFrame(this.game.clockTick, ctx, 25, 25);
	};
}