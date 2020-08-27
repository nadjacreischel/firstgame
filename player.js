class Player {
    constructor() {
      // set the height, the initial location + the jump controls for the player
      this.height = 60;
      this.width = 120;
      this.x = 150;
      this.y = 600;
      this.image;
      this.powerUpImage;
      this.level = 0;
    }
  
    drawPlayer() {
      if (this.y >= height - this.height) {
        this.y = height - this.height;
      }

      if (this.x >= width - this.width) {
        this.x = width - this.width;
      }

      if (this.x <= 100) {
        this.x = 100;
        
      }


      // if (this.x >= 100) {
      //   this.x = 100;
        
      // }

      if (this.level === 0) {
        // fill("red")
        // rect(this.x, this.y, this.height, this.width);

        image(this.image, this.x, this.y, this.height, this.width);
    } else {
      image(this.powerUpImage, this.x, this.y, this.height, this.width)
    }

      if (this.y <= 150) {
        this.level = 1
        this.y=600
        console.log(this.level)
        }

        if (this.y <= 0 && this.level == 1) {
          this.level = 2
          this.y=600
          console.log(this.level)
          }

      
    }
    
    leftClick () {
        console.log("This will be a left click");
        this.x -= 50;
    }
    rightClick () {
        console.log("This will be a right click");
        this.x += 50;
    }
    forward () {
      console.log("This will be a powerup");
      this.y -= 50;
    }
  }