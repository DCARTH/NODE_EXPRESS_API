import nameToImdb from "name-to-imdb";


let movies = [];


export const createMovie = (req, response) => {

    //const movie = req.body;
    console.log(req.body);
    let movie = nameToImdb(req.body.id, function (err, res, inf)  {

        // inf contains info on where we matched that name - e.g. metadata, or on imdb
        // and the meta object with all the available data
        response.send(inf);
    });

    movies.push({ ...movie});


}
export const getMovies = (req, res) => {

    res.send(movies);
}


