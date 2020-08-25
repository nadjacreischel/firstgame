class Obstacle {
    constructor(img) {
        this.height = 60;
        this.width = 60;
        this.x = (Math.random() * ((width-100)) + 100) / 1.5;
        this.y = 10;
        this.image = img;
        this.starscore = 0;
      }

    collision(playerInfo) {
        let obstacleX = this.x + this.width / 2;
        let obstacleY = this.y + this.height / 2;
        let playerX = playerInfo.x + playerInfo.width / 2;
        let playerY = playerInfo.y + playerInfo.height / 2;
        //console.log(obstacleX, obstacleY, playerX, playerY);
    
        if (dist(obstacleX, obstacleY, playerX, playerY) < 50) {
            //this.starscore += 1;
            // console.log(this.starscore);
          return true;
        }
      }




    drawObstacle() {
        if (this.x >= width - this.width) {
            this.x = width - this.width;
          }
        this.y += 4;
        image(this.image, this.x, this.y, this.width, this.height);
     }
    }