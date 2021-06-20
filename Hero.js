class Hero{
    constructor(x, y, r){
        var options = {
         density: 1,
         frictionAir: 1
        };
        this.x = x;
        this.y = y;
        this.r = r;
        this.image = loadImage("images/hero.gif");
        this.body = Bodies.circle(this.x, this.y, (this.r)/2, options);
        World.add(world, this.body)
    }

    display(){
        imageMode(CENTER);
        image(this.image, this.x, this.y, this.r*3, this.r*3);
    }
}