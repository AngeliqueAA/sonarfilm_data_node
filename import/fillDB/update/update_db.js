const axios = require('axios');
const date = require('../../../date')
const dotenv = require('dotenv');
dotenv.config();



module.exports = async function fillDb () {  
  var movies= [];
      const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_KEY}&language=fr-FR&primary_release_date.gte=${date.dateToday}&primary_release_date.lte=${date.dateToday}`)
      if(response.status==200){
        var results = response.data.results
        .map(
                movie=>
                ({
                  title:movie.title, 
                  movieId : movie.id,
                  originalTitle:movie.original_title,
                  overview:movie.overview,
                  notation: movie.vote_average,
                  realeaseDate : movie.release_date,
                  insertionDate : date.dateToday,
                  imdbId:null,
                  realisationYear: null,
                  duration:null,
                  ageLimit:null,
                  poster:null, 
                  director:null,
                  writer:null,
                  firstGenre:null,
                  secondGenre:null,
                  thirdGenre:null,
                  fourthGenre:null,
                  actors:null
                })
            );
  
            movies.push(...results.filter(x=>x.overview!==""));
      }
  

  
    
     return movies;
};
    // use the results
  
  