class binSide{
    constructor(x,y,width,height){
    var options={
        isStatic:true
    }

    this.bodies=Bodies.rectangle(x,y,width,height,options);
    this.Width=width;
    this.Height=height;
    
    World.add(world,this.bodies);

    }
    display(){
        var pos=this.bodies.position;
        
        
        fill("white");
        rectMode(CENTER);
        rect(pos.x,pos.y,this.Width,this.Height);
        
    }
}