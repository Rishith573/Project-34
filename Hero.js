class Hero{
    constructor(x, y, width, height){
        var options = {
            restitution = 0,
            friction = 1,
            isStatic = false
        };
        this.body = Bodies.circle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage(images/hero.gif);
        World.add(world, this.body)
    }

    display(){
        imageMode(CENTER);
        var pos = this.body.position;
        image(this.image, pos.x, pos.y, this.radius);
    }
}