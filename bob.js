class bob
{
	constructor(x,y,r,color)
	{
		var options={
			isStatic:false,
			restitution:1,
			friction:0,
			density:0.8
			
			}
		this.x=x;
		this.y=y;
		this.r=r
		
		this.body=Bodies.circle(this.x, this.y, (this.r)/2, options)
		this.color=random(0,255),random(0,255),random(0,255)
		World.add(world, this.body);
        
	}
	display()
	{
			
			var paperpos=this.body.position;
			push()
			translate(paperpos.x, paperpos.y);
			rectMode(CENTER)
		
			fill(this.color)
		
			ellipse(0,0,this.r, this.r);
			pop()
			
	}

}

