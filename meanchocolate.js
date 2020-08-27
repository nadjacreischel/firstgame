class Meanchocolate {
    constructor(img) {
        this.height = 120;
        this.width = 120;
        this.x = (Math.random() * ((width-100)) + 100) / 1.5;
        this.y = 10;
        this.image = img;
      }

    collision(playerInfo) {
        let obstacleX = this.x + this.width / 2;
        let obstacleY = this.y + this.height / 2;
        let playerX = playerInfo.x + playerInfo.width / 2;
        let playerY = playerInfo.y + playerInfo.height / 2;
        //console.log(obstacleX, obstacleY, playerX, playerY);
    
        if (dist(obstacleX, obstacleY, playerX, playerY) < 40) {
          return true;
        }
        // if((playerInfo.y >= this.y && playerInfo.y <= this.y + this.height/2) && ((playerInfo.x + playerInfo.width/3) >= this.x  && (playerInfo.x - playerInfo.width/3) <= this.x + this.width) ) {
    
        //   console.log(" here ", playerInfo.x, this.x, this.width, this.x + this.width, this.x - this.width /2)
        //   return true
       // }
      }




    drawObstacle() {
        if (this.x >= width - this.width) {
            this.x = width - this.width;
          }
        this.y += 4;
        // fill("red")
        // rect(this.x, this.y, this.height, this.width);

        image(this.image, this.x, this.y, this.width, this.height);
     }
    }
