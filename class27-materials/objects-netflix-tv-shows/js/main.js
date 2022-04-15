//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods

function Netflix(name, length, genre, views){
    this.name = name
    this.length = length
    this.genre = genre
    this.views = views
    this.like = function(){
        console.log("i like this")
    }
    this.dislike = function(){
        console.log("this is bad")
    }
    this.removeAd = function(){
        console.log("no more ads")
    }
}

let toyStory = new Netflix(a, b, c ,d)

class MakeNetflixShow {
    constructor(title, length, genre, views){
        this.title = title
        this.length = length
        this.genre = genre
        this.views = views
    }
    like(){
        console.log("i like it")
    }
    play(){
        console.log("gogogo")
    }
    noAd(){
        console.log("this is great")
    }
}

let office = new MakeNetflixShow("Office", "120 minutes", "Drama", 10000)