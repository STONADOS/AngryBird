class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.Visiblity = 255;
  }
display(){
  if (this.body.speed < 3){
    super.display();
  }
  else{
    push(); 
    this.Visiblity -= 5;
    tint(255, this.Visiblity);
    image(this.image, this.body.position.x, this.body.position.y, 50 ,50);
    pop();
    if (this.Visiblity >= 250){
    }
    World.remove(world, this.body);
  }

}
score(){
  if(this.Visiblity == 0){
    score += 50;
  }
}


}