
use('placeData');

db.placedatas.createIndex( { loc : "2dsphere" } )