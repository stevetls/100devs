//Create an espresso machine class that makes machines with 4 properties and 3 methods

class EspressoMachine{
    constructor(brand, model, color, waterTankSize){
        this.brand = brand
        this.model = model
        this.color = color
        this.waterTankSize = waterTankSize
    }
        brew(){
            console.log("brewing")
        }
        cleanme(){
            console.log("it's time to clean me")
        }
        emptyTray(){
            console.log("Please empty tray")
        }
    }

let gaggia = new EspressoMachine('red', 'Gaggia', 'Classic Pro', 400) 