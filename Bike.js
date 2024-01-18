class bike {
    constructor() {
        this.Frame = this.getFrame();
        this.Tires = this.getTires();
        this.Suspension = this.getSuspension();
    }

    getFrame() {
        throw new Error("override this")
    }

    getTires() {
        throw new Error("override this")
    }

    getSuspension() {
        throw new Error("override this")
    }
}


class TrailBike extends bike{
    constructor(){
        super();
    }

    getFrame(){
        return "Avanti medium frame"
    }

    getTires(){
        return "Maxxis 27.5 x 2.5 inch"
    }

    getSuspension(){
        return "fox 160mm"
    }
}

class GravelBike extends TrailBike{
    constructor(){
        super();
    }


    getTires(){
        return "Teravail"
    }

}


console.log("Trail Bike Parts")
console.log("Frame: " + new TrailBike().getFrame())
console.log("Tires: " + new TrailBike().getTires())
console.log("Suspension: " + new TrailBike().getSuspension())
console.log("gravel Bike Parts")
console.log("Frame: " + new GravelBike().getFrame())
console.log("Tires: " + new GravelBike().getTires())
console.log("Suspension: " + new GravelBike().getSuspension())