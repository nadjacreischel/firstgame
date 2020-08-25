class Meanchocolate {
    constructor(img) {
        this.height = 80;
        this.width = 180;
        this.x = (Math.random() * ((width-200)) + 100) / 1.5;
        this.y = 10;
        this.image = img;
      }

    collision(playerInfo) {
        let obstacleX = this.x + this.width / 2;
        let obstacleY = this.y + this.height / 2;
        let playerX = playerInfo.x + playerInfo.width / 2;
        let playerY = playerInfo.y + playerInfo.height / 2;
        //console.log(obstacleX, obstacleY, playerX, playerY);
    
        if (dist(obstacleX, obstacleY, playerX, playerY) < 50) {
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
