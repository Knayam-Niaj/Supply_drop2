class Box{
  constructor(x, y, width, height){
    var option = {isStatic: true, restitution: 0, friction: 100}
    this.body = Bodies.rectangle(x, y, width, height, option);
    this.width = width;
    this.height = height;

    
    World.add(world, this.body);
  }
  display(){
    var pos = this.body.position;
    rect(pos.x, pos.y, this.width, this.height);
  }
  }

