class Monster{
    constructor(x, y, r){
        var options = {
         density: 1,
         frictionAir: 50
        };
        this.x = x;
        this.y = y;
        this.r = r;
        this.image = loadImage("images/villian.png");
        this.body = Bodies.circle(this.x, this.y, (this.r)/2, options);
        World.add(world, this.body)
    }

    display(){
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, this.r*3, this.r*3);
    }
}