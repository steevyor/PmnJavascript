class Hippopotamus {
    constructor (name, weight, tusksSize)
    {
        this.name = name
        this.weight = weight
        this.tusksSize = tusksSize
    }

    swim()
    {
        this.weight -= 0.300;
        this.weight = this.weight <= 0 ? 100 : this.weight
    }

    eat()
    {
        this.weight += 1
    }

    fight(b)
    {
        return this.tusksSize > b.tusksSize ? this : b
    }

    toString()
    {
        return `Hippopotamus ${this.name} pèse ${this.weight} kg ses défenses mesurent ${this.tusksSize}`
    }

}

function simul(hippo){
    for (let week = 0; week < 3; week++) {
        console.log(`semaine ${week+1}`)
        for (let days = 0; days < 7; days++) {
            console.log(`jour ${days+1}`)
            for (let hours = 0; hours < 24; hours++) {
                if (hours < 15)
                {
                    hippo.eat()
                    hippo.eat()
                    hippo.swim()
                    hippo.swim()
                    hippo.swim()
                }
                
            }
            console.log(hippo.toString())
        }
    }
}

let hippo1 = new Hippopotamus(`Jogi`, 520, 25)

let hippo2 = new Hippopotamus(`Dabla`, 600, 20)

console.log(hippo1.fight(hippo2))
console.log(hippo2.toString())

simul(hippo1)