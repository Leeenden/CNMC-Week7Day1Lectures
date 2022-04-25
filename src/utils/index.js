const movieArr = [];

class Movie {
    constructor(title, actor, genre, rating = "Not specified"){
        this.title = title;
        this.actor = actor;
        this.genre = genre;
        this.rating = rating;
    }
    add(){
        movieArr.push(this)
    }
};

module.exports = {Movie, movieArr};