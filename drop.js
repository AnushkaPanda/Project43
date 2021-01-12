class Drop {
    constructor(x, y) {
      var options = {
          
          restitution:1,
          friction:1,
          density:1.2
      }
      this.x=x;
		this.y=y;
		//this.r=r;
		
		this.body = Bodies.circle(x, y,5,options);       
        this.color=color("blue")
        World.add(world, this.body);


	}
	display()
	{

			var droppos=this.body.position;		
			var angle = this.body.angle;

			push()
			translate(droppos.x, droppos.y);
			rotate(angle)
			fill(this.color)
            noStroke();
			ellipse(0,0,5)
			ellipseMode(RADIUS);
			pop()

	}
}
