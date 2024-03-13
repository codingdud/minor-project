const { MongoClient } = require("mongodb");
//conneting to database and listing to port
const mongoid=process.env.MID
let db=process.env.DB||"database"
// Replace the uri string with your connection string.
const uri = `${mongoid}?retryWrites=true&w=majority`;
const client = new MongoClient(uri);
module.exports = client;
