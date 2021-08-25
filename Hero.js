class Hero{
    constructor(x, y, r){
        var options = {
         density: 1
        };
        this.x = x;
        this.y = y;
        this.r = r;
        this.image = loadImage("images/hero.png");
        this.body = Bodies.circle(this.x, this.y, (this.r)/2, options);
        World.add(world, this.body)
    }

    display(){
        push()
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, this.r*3, this.r*3);
        pop()
    }
}