class Ground{
    constructor(x,y,w,h){
        this.ground = Bodies.rectangle(x,y,w,h,{isStatic:true});
        this.width = w;
        this.height = h;

        World.add(world, this.ground);

    }

    display(){
        var pos = this.ground.position;
        rectMode(CENTER);
        fill("red");
        rect(pos.x,pos.y,this.width,this.height);
    }
}