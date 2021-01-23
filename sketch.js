var fairy,star
function preload()
{
  fairyImage.loadAnimation(fairy.png,fairy1.png,fairy2.png)
  starImage.loadImage(star.png,starnight.png)
   //preload the images here
}

function setup() {
  createCanvas(800, 750);
  fairy=CreateSprite(200,400,40,40);
  fairy.addImage(fairyImage)
}


function draw() {
  

  drawSprites();
}
