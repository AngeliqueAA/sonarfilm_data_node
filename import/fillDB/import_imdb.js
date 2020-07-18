const axios = require('axios');
//const config = require('../../config');
const dotenv = require('dotenv');
dotenv.config();



module.exports = async function import_imdb(movies) {
   var ImdbRefMovies = [];

   for (var i = 0; i < movies.length; i++) {
      console.log("imdb "+i )
      const response = await axios.get(`https://api.themoviedb.org/3/movie/${movies[i].movieId}/external_ids?api_key=${process.env.TMDB_KEY}`)
      if (response.status == 200) {
         movies[i].imdbId = response.data.imdb_id;
         ImdbRefMovies.push(movies[i]);
      }
   }
   return ImdbRefMovies;
}