const axios = require('axios');
//const config = require('../../config');
const dotenv = require('dotenv');
dotenv.config();

module.exports = async function omdb_import(movies) {
    var OmdbRefMovies = [];

    for (var i = 0; i < movies.length; i++) {
        console.log("omdb "+i )
        const response = await axios.get(`http://www.omdbapi.com/?apikey=${process.env.OMDB_KEY}&i=${movies[i].imdbId}`)
        if (response.status == 200) {
            const strGenre = response.data.Genre;
            //  console.log(strGenre);
            if (strGenre !== undefined) {
                const tabStrGenre = strGenre.split(',');
                 movies[i].firstGenre = tabStrGenre[0]?tabStrGenre[0].trim().toLowerCase():null;
                 movies[i].secondGenre = tabStrGenre[1]?tabStrGenre[1].trim().toLowerCase():null;
                 movies[i].thirdGenre = tabStrGenre[2]?tabStrGenre[2].trim().toLowerCase():null;
                 movies[i].fourthGenre = tabStrGenre[3]?tabStrGenre[3].trim().toLowerCase():null;                     
                 movies[i].realisationYear = response.data.Year,
                 movies[i].duration = response.data.Runtime,
                 movies[i].ageLimit = response.data.Rated,
                 movies[i].poster = response.data.Poster, 
                 movies[i].director = response.data.Director,
                 movies[i].writer = response.data.Writer,
                 movies[i].actors = response.data.Actors,
         OmdbRefMovies.push(movies[i]);
            }


           
        }
    }
    return OmdbRefMovies; 
}