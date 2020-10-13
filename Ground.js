class Ground{
    constructor(){
    var options={
        isStatic:true
    }

    this.bodies=Bodies.rectangle(600,390,1200,10,options);
    this.Width=1200;
    this.Height=10;
    
    World.add(world,this.bodies);

    }
    display(){
        var pos=this.bodies.position;
        
        
        fill("blue");
        rectMode(CENTER);
        rect(pos.x,pos.y,this.Width,this.Height);
        
    }
}