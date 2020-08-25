const game = new Game();

function preload() {
  game.preloadGame();
}
function setup() {
  createCanvas(400, 800);
  game.setupGame();
}

function draw() {
  game.drawGame();
}

function keyPressed() {
    if (keyCode === 37) {
    game.player.leftClick();
    }

    if (keyCode === 39) {
    game.player.rightClick();
    }

  
}

