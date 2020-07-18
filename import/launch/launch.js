const fillDb = require('../fillDB/first_data');
const imdbImport = require('../fillDB/import_imdb');
const omdbImport = require ('../fillDB/omdb_import');
var config = require('../../config');
const dotenv = require('dotenv');
dotenv.config();

const mongoUtil = require('../configDb/mongoUtil');

 // Improve debugging
 process.on('unhandledRejection', (reason, p) => {
    console.log('Unhandled Rejection at:', p, 'reason:', reason)
})



mongoUtil.connectDB(async (err) => {
    if (err) throw err
    // Load db & collections
    var db = mongoUtil.getDB();
    let table = db.collection(process.env.MONGO_COLLECTION);

    try {
        console.log("-----insertion premières données");
        var movies = await fillDb();
        console.log("-----import de l'imdb");

        if(movies.length>0){
        console.log("-----nombre de films importés " + movies.length);
        movies = await imdbImport(movies);
        console.log("-----import des dernières datas")
        movies= await omdbImport(movies);
        console.log("----- Début d'insertion de ---------> "+ movies.length + "<-------------- films en BDD")
        
        await table.insertMany(movies);
        console.log("-----Fin d'insertion. Vous pouvez consulter la base de données.")
        
        
        process.exit(0)
        
    }
      


          } catch (e) {
            throw e
        }


        

    })