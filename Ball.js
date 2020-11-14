class Ball {
    constructor(x, y,radius) {
      var options = {
        isStatic: false
    }
      
      this.body = Bodies.circle(x, y, radius/2,options);
      this.radius = radius;
     // this.height = height;
     
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(CENTER);
     // strokeWeight(4);s
        //stroke("green");
     // image(this.image,0, 0, this.width,this.height);
       ellipse(0,0,this.radius,this.radius);
      pop();
    }
  };