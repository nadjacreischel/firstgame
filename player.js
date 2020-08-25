class Player {
    constructor() {
      // set the height, the initial location + the jump controls for the player
      this.height = 160;
      this.width = 160;
      this.x = 150;
      this.y = 600;
      this.image;
    }
  
    drawPlayer() {


  
      if (this.y >= height - this.height) {
        this.y = height - this.height;
      }

      if (this.x >= width - this.width) {
        this.x = width - this.width;
      }

      
  
      image(this.image, this.x, this.y, this.height, this.width);
    }
    
    leftClick () {
        console.log("This will be a left click");
        this.x -= 50;
    }
    rightClick () {
        console.log("This will be a right click");
        this.x += 50;
    }

  }