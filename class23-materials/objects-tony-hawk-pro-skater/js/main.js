//Create a Tony Hawk Pro Skater constructor that makes fighting game characters with 4 properties and 3 methods
function ProSkater(name, height, rank, specialMove){
    this.name = name
    this.height = height
    this.rank = rank
    this.specialMove = specialMove
    this.showRank = function(){
        console.log(`${this.name}'s rank is ${this.rank}`)
    }
    this.showMove = function(){
        console.log(`see my killing ${this.specialMove}.`)
    }
}

let steve = new ProSkater('steve', '180cm', '10', 'spinning 1080 degree')

steve.showRank()
steve.showMove()