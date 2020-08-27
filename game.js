class Game {
    constructor() {
        this.obstacles = [];
        this.starscore = [];
        this.meanchocolates = [];
        this.powerups = [];
        this.screen = [];
      }
    preloadGame() {
        
            this.backgroundImage = [
            {
              src: loadImage("./assets/galaxy.jpeg"),
              y: 0,
              speed: 2,
            },
            {
              src: loadImage("./assets/BG4.png"),
              y: 0,
              speed: 2,
            }
          ];
            this.backgroundImagePowerup = [
              {
                src: loadImage("./assets/milky-way.jpg"),
                y: 0,
                speed: 2,
              }, 
              {
                src: loadImage("./assets/BG4.png"),
                y: 0,
                speed: 2,
              }
            ]
            this.playerImg = loadImage("./assets/ezgif.com-crop (1).gif");
            this.obstacleImg = loadImage("./assets/tumblingmaleastronaut.gif");
            this.obstacleDonut = loadImage("./assets/tumblingastronaut.gif")
            this.powerupImg = loadImage("./assets/Fireball-powerup.png")
            this.meanCandy = loadImage("./assets/alien-robot-dancing.gif")
            this.playerPowerup = loadImage("./assets/BMO.gif")
            this.finalScreen = loadImage("./assets/final screen.png")
    }

    setupGame() {
        this.background = new Background();
        this.background.images = this.backgroundImage;
        this.background.powerUpImageBackground = this.backgroundImagePowerup;
        this.player = new Player();
        this.player.image = this.playerImg;
        this.player.powerUpImage = this.playerPowerup;
        this.screen = new FinalScreen ();
        this.screen.image = this.finalScreen;
    }
    
    drawGame() {
        clear();
        this.background.drawBackground(this.player);
        this.player.drawPlayer();

        // if (frameCount % 100 === 0) {
        //     this.obstacles.push(new Obstacle(this.obstacleImg));
        //   }

        if (frameCount % 210 === 0) {
            this.obstacles.push(new Obstacle(this.obstacleImg));
          }

        if (frameCount % 517 === 0) {
            this.obstacles.push(new Obstacle(this.obstacleDonut));
          }

          // if (frameCount % 260 === 0) {
          //   this.obstacles.push(new Obstacle(this.obstacleDonut));
          // }

        

          if (frameCount % 337 === 0) {
              console.log("something1");
            this.meanchocolates.push(new Meanchocolate(this.meanCandy));
          }

          if (frameCount > 400 && frameCount % 253 === 0) {
              console.log("something2");
            this.meanchocolates.push(new Meanchocolate(this.meanCandy));
          }


          if (frameCount > 800 && frameCount % 67 === 0) {
            console.log("something4");
            this.meanchocolates.push(new Meanchocolate(this.meanCandy));
          }

          if (frameCount > 2000 && frameCount % 100 === 0) {
            console.log("something3");
            this.meanchocolates.push(new Meanchocolate(this.meanCandy));
          }

          if (frameCount % 360 === 0) {
            this.powerups.push(new powerUp(this.powerupImg));
          }
          
          if (frameCount > 1000 && frameCount % 167 === 0) {
            console.log("something5");
            this.powerups.push(new powerUp(this.powerupImg));
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


          this.powerups.forEach(powerup => {
            powerup.drawObstacle();
        })

          this.powerups = this.powerups.filter((powerup) => {
            if(powerup.collision(this.player)) {
              this.player.forward()
              return false;
            } else {
              return true;
            }
          })
        
        
          this.meanchocolates.forEach(meanchocolate => {
            meanchocolate.drawObstacle();
        })

        this.meanchocolates = this.meanchocolates.filter((chocolate) => {
            if (chocolate.collision(this.player)) {
                frameRate(0);
                this.screen.drawScreen();
                // if (keyCode === 32) {
                //   location.reload();
                // } if (keyCode=== 13) {
                // location.reload();
                // }
               setTimeout(() => {
                // alert(`Looser, your score was ${this.starscore.length}`)
                location.reload();
               }, 3000);
                
    
              return false;
            } else { 
                return true;
            }
        });

}
}
