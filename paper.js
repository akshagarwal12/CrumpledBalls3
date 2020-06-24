class Paper {
    constructor(x,y,radius) {
      var options = {
          isStatic: false,
          restitution: 0.3,
          friction:0.5,
          density: 1.2
      }
      this.body = Bodies.circle(x,y,25,options);
      this.radius = radius;
      this.image = loadImage("paper.png");
      World.add(world, this.body);
    }
    fly(){
      Matter.Body.applyForce(this.body,this.body.position,{x:85,y:-100})
    }
    display(){
      imageMode(CENTER);
      image(this.image, this.body.position.x, this.body.position.y, this.radius, this.radius);
    

    }
  };