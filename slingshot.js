class SlingShot{
    constructor(body1, point2){
    var options = {
        bodyA:body1,
        pointB:point2,
        stiffness:0.04,
        length:10
    }
    this.point2 = point2;
    this.sling = Constraint.create(options);
    this.sling1 = loadImage("sprites/sling1.png");
    this.sling2 = loadImage("sprites/sling2.png");
    this.sling3 = loadImage("sprites/sling3.png");
    World.add(world, this.sling);
}
fly(){
    this.sling.bodyA = null
}

display(){
    image(this.sling1, 200, 20);
    image(this.sling2, 170, 20);
    if (this.sling.bodyA){
    var pointA = this.sling.bodyA.position;
    var point2 = this.point2;
    push();
    if (pointA.x < 220){
        strokeWeight(6);
        stroke(48, 22, 8);
        line(pointA.x - 25, pointA.y, point2.x - 10, point2.y);
        line(pointA.x - 25 , pointA.y, point2.x + 30, point2.y - 5);
        image(this.sling3, pointA.x - 40, pointA.y - 10, 20, 30)

    }
    else{
        strokeWeight(3);
        line(pointA.x + 25, pointA.y, point2.x - 10, point2.y);
        line(pointA.x + 25, pointA.y, point2.x + 30, point2.y - 5);
        image(this.sling3, pointA.x + 25, pointA.y - 10, 20, 30);
    }
    pop();
}
}
}