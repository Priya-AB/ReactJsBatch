class building{
    constructor(color, city){
        this.colour = color;
        this.city1 = city;
    }
    pk(){
        return `Hello color of buiding is ${this.colour}`
    }
}

let build = new building('red','Solapur')
console.log(build.city1)
console.log(build.pk())

class builder extends building{
    constructor(name,year,color,city){
        super(color,city)
            this.name= name;
            this.year= year;
    }
    mk(){
        return `Hi name of building is ${this.name} and constructed in ${this.year}`
    }
}
let p = new builder("Akash",1997,'blue','Pune');
console.log(p.mk());
console.log(p.pk());

