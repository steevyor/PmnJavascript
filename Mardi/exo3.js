const Point = require('./exo2')
const req = require('./exo2')
class Circle
{
    constructor(point, rad)
    {
        this.point = point
        this.rad = rad
    }

    area()
    {
        return this.rad * this.rad * 3.14
    }

    constainsPoint(p)
    {
        let d = Math.sqrt(Math.pow((p.getX()-this.point.getX()),2) + Math.pow((p.getY()-this.point.getY()),2))
        return d <= this.rad
    }
}
let p1 = new Point(10, 15)
let c1 = new Circle(p1,15)
let p2 = new Point(6, 7)

console.log(c1.area())
console.log(c1.constainsPoint(p2))