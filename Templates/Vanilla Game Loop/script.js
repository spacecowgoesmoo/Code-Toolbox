let cow = {}

function initialize() {
	cow.data = 'moo'
	cow.fps = 60
	cow.fpsArray = []
	window.requestAnimationFrame(gameLoop)
}

// Browsers automatically cap this at 60FPS
function gameLoop() {
	processInput()
	updateGameState()
	render()
	window.requestAnimationFrame(gameLoop)
}

function processInput() { 

}

function updateGameState() {
	calculateFPS(1)
}

function render() {
	textDisplay.innerHTML = cow.data
	fpsDisplay.innerHTML = cow.fps + ' FPS'
}








function calculateFPS(secondsPerUpdate) {
	cow.fpsArray.push(performance.now());
	const millesecondsPassed = cow.fpsArray[cow.fpsArray.length - 1] - cow.fpsArray[0];

	if (millesecondsPassed >= secondsPerUpdate * 1000) {
		cow.fps = Math.round(cow.fpsArray.length / millesecondsPassed * 1000);
		cow.fpsArray = [];
	}
}