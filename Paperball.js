class Paperball{
    constructor(x,y,radius){

    var option={
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2
    }

    this.bodies=Bodies.circle(x,y,radius,option);
    this.Radius=radius;
    
    World.add(world,this.bodies);
   
    }
    
    display(){
        var pos=this.bodies.position;
        
        
        fill("purple");
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,this.Radius*2);

        
        
    }
    
}
