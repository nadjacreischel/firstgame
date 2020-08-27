const game = new Game();
let start = false;
let mode;
function preload() {
  game.preloadGame();
}
function setup() {
  mode = 0;
  createCanvas(800, 680);
  game.setupGame();
}

function draw() {
  if (mode === 1) {
    game.drawGame();
  }

  if (keyIsDown(37)) {
    game.player.leftClick();
  }

  if (keyIsDown(39)) {
    game.player.rightClick();
  }

  if (keyIsDown(13) && !start) {
    mode = 1;
    game.backgroundSound.loop();
    start = true;
  }

  if (keyIsDown(32) && !start) {
    mode = 1;
    game.backgroundSound.loop();
    start = true;
  }
}
