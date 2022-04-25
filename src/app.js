const yargs = require("yargs");
const {Movie, movieArr} =  require("./utils");

// console.log(yargs.argv);

const app = (yargsObj) => {
    if (yargsObj.add) {
        for(let i = 0; i < yargsObj.numOfMovies; i ++){
            const movie = new Movie(yargsObj.title[i], yargsObj.actor[i], yargsObj.genre[i], yargsObj.rating[i]);
            movie.add();
        }
        console.log(movieArr)
    } else {
        console.log("Incorrect Command");
    }
};


app(yargs.argv);

// const app = (param) => {
//     if (param.add) {
//         for(let i = 0; i < param.numberOfMovies; i++) {
//             const movie = new Movie(
//                 param.movie[i],
//                 param.actor[i],
//                 param.year[i],
//                 param.rating[i]
//             )
//             movie.add()
//         }
        
//         console.log(movieArr)
//     }else {
//         console.log("Incorrect Command")
//     }
// }