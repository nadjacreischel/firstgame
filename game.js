class Game {
    constructor() {
        this.obstacles = [];
        this.starscore = [];
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

    // countScore ()
    //     {
                
    //         if (obstacles.collision = "false")
    //         this.obstacles.starscore ++ ;
    //         console.log(this.obstacles.starscore);
    //         } 
        // let score = document.getElementById("score")
        // if (obstacle.collision(this.player) = "true")
        // score += 1 
    }
}
