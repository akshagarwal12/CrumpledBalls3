class Bin{
    constructor(leftX,leftY,bottomX,bottomY,rightX,rightY){
        var options = {
            isStatic:true
        }
        this.image=loadImage("dustbingreen.png")
        this.left= Bodies.rectangle(leftX,leftY,20,200,options)
        World.add(world,this.left)
        this.bottom = Bodies.rectangle(bottomX,bottomY,100,20,options)
        World.add(world,this.bottom)
        this.right= Bodies.rectangle(rightX,rightY,20,200,options)
        World.add(world,this.right)

    }
    display(){
        rectMode(CENTER)
        fill("white")
        rect(this.left.position.x,this.left.position.y,20,200)
        rect(this.right.position.x,this.right.position.y,20,200)
        image(this.image,this.bottom.position.x,this.bottom.position.y,200,200)


    }
}