class Game {
    constructor() {
        this.obstacles = [];
        this.starscore = [];
        this.meanchocolates = [];
      }
    preloadGame() {
        
            this.backgroundImage = [
            {
              src: loadImage("./assets/BG4.png"),
              y: 0,
              speed: 2,
            }];
            this.playerImg = loadImage("./assets/character.gif");
            this.obstacleImg = loadImage("./assets/Star.png");
            this.obstacleDonut = loadImage("./assets/DonutNoBackground.png")
            this.meanChoco = loadImage("./assets/choco_walk.png")

    }

    setupGame() {
        this.background = new Background();
        this.background.images = this.backgroundImage;
        this.player = new Player();
        this.player.image = this.playerImg;
    }
    
    drawGame() {
        clear();
        this.background.drawBackground();
        this.player.drawPlayer();

        if (frameCount % 60 === 0) {
            this.obstacles.push(new Obstacle(this.obstacleImg));
          }

        if (frameCount % 90 === 0) {
            this.obstacles.push(new Obstacle(this.obstacleImg));
          }

        if (frameCount % 60 === 0) {
            this.obstacles.push(new Obstacle(this.obstacleDonut));
          }

          if (frameCount % 120 === 0) {
            this.obstacles.push(new Obstacle(this.obstacleDonut));
          }

          if (frameCount % 280 === 0) {
            this.meanchocolates.push(new Meanchocolate(this.meanChoco));
          }

          this.obstacles.forEach(obstacle => {
            obstacle.drawObstacle();
          })
          
         
         
          this.obstacles = this.obstacles.filter((obstacle) => {
            if (obstacle.collision(this.player)) {
                this.starscore.push(1)
                document.querySelector('h3 span').innerHTML = this.starscore.length;
              return false;
            } else {
                
                return true;
            }        
        });

    this.meanchocolates.forEach(meanchocolate => {
        meanchocolate.drawObstacle();
     })

    this.meanchocolates = this.meanchocolates.filter((chocolate) => {
        if (chocolate.collision(this.player)) {
            frameRate(0);
            alert(`Looser, your score was ${this.starscore.length}`)
            location.reload();
 
          return false;
        } else { 
            return true;
        }
    });
   

}
}
