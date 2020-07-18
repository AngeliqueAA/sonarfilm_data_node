var MongoClient = require('mongodb').MongoClient;
//var config = require('../config');
//const uri = config.url;
const dotenv = require('dotenv');
//var nameDb = "sonarmovies";
var _db;

const connectDB = async (callback) => {
  try {
      MongoClient.connect(process.env.MONGO_URL, { useUnifiedTopology: true }, (err, client) => {
           var db = client.db(process.env.MONGO_DB) 
          _db = db
          return callback(err)
      })
  } catch (e) {
      throw e
  }
}

const getDB = () => _db

const disconnectDB = () => _db.close()

module.exports = { connectDB, getDB, disconnectDB }
















/*
static async function connectDb() {
    //If MongoDB is already connected, return db object
    if (this.dbClient) {
      const currDbClient = Promise.resolve(this.dbClient);
      console.log(`MongoDB already connected!`);
      return currDbClient;
    }
    //Otherwise connect using 'await', the whole methos is async
    else {
      try {
        const newDbClient = await MongoClient.connect(url);
        console.log(`DB is connected? ${newDbClient.isConnected()}`);
        this.dbClient = newDbClient;
        return newDbClient;
      } catch (error) {
        console.error(`MongoDB connection failed with > ${error}`);
        throw error;
      }
    }
  }*/
