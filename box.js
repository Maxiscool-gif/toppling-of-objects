class Box{
    constructor(x,y,width,height){
        var option2 = {
            restitution:1.0,
            density:1.0,
            friction:0.3
          
          }
          this.body = Bodies.rectangle(x,y,width,height,option2)
        this.width=width
        this.height=height  

          World.add(world,this.body)
    }
    display(){
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        
     rectMode(CENTER)
        fill(255)
        rect(0,0,this.width,this.height)
        pop()
    }
}