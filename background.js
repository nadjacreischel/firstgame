
class Background {
    constructor() {
      this.y = 0;
      this.images;

    }
  
    drawBackground() {
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
      };
    }


