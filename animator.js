class Animator {
	constructor(spritesheet, xStart, yStart, width, height, frameCount, frameDuration) {

	};

	drawFrame(tick, ctx, x, y, scale) {

	};

	currentFrame() {
		return Math.floor(this.elapsedTime/this.frameDuration);
	};
	isDone() {
		return (this.elapsedTime >= this.totalTime);
	};
}