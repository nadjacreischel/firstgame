
class Background {
    constructor() {
      this.y = 0;
      this.images;
      this.powerUpImageBackground;
    }
  
    drawBackground(player) {
      if (player.level === 0) {
        this.y -= 1;
        this.images.forEach((picture) => {
          picture.y += picture.speed;
          image(picture.src, 0, picture.y, width, height);
          image(picture.src, 0, picture.y - height, width, height);
    
          if (picture.y >height) {
            picture.y = 0;
          }
          if (frameCount % 120 === 0 && picture.speed < 50) {
            picture.speed += 1.2
          }
        });
      }

      if (player.level === 1) {
        this.y -= 1;
        this.powerUpImageBackground.forEach((picture) => {
          picture.y += picture.speed;
          image(picture.src, 0, picture.y, width, height);
          image(picture.src, 0, picture.y - height, width, height);
    
          if (picture.y >height) {
            picture.y = 0;
          }
          if (frameCount % 120 === 0 && picture.speed < 50) {
            picture.speed += 1.2
          }
        });
       }
      };
    }


