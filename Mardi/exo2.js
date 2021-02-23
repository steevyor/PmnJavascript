class Point
{
    constructor(x,y)
    {
        this.x = x
        this.y = y
    }

    getX(){
        return this.x
    }
    getY(){
        return this.y
    }

    setX(x){
        this.x = x
    } 
    setY(y){
        this.y = y
    }

    toString()
    {
        return `Point x:${this.x} y:${this.y}`
    }
}

let p1 = new Point(5,4)

console.log(p1.getX())

p1.setY(15)

console.log(p1)

module.exports=Point