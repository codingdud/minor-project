const mongoose=require('mongoose')
const client=require('../model/connection')
const getPlace=async(req,res)=>{
    //const collections = await mongoose.connection.collection('placedatas').find().toArray();
    let collections = await client.db('placeData').collection('placedatas').find().toArray()
    //console.log(collections)
    return res.json(collections)
}
const getNearByPlace=async(req,res)=>{
  let {latitude,longitude,distance}=req.body;
  //console.log(latitude,longitude,distance)
  if(!latitude || !longitude){
      return res.status(401).send({
          message: "Missing fields"
        });
  }else{
      const nearbylocation = await client.db('placeData').collection('placedatas').find({
          loc:
            { $near:
                {
                  $geometry: { type: "Point",  coordinates: [latitude,longitude] },
                  $maxDistance:distance||1000
                }
            }
        }).toArray();
      return res.json(nearbylocation)
  } 
}

const getNearByFoods=async(req,res)=>{
  let {latitude,longitude,distance}=req.body;
  //console.log(latitude,longitude,distance)
  if(!latitude || !longitude){
      return res.status(401).send({
          message: "Missing fields"
        });
  }else{
      const nearbylocation = await client.db('placeData').collection('foods').find({
          loc:
            { $near:
               {
                 $geometry: { type: "Point",  coordinates: [latitude,longitude] },
                 $maxDistance:distance||1000
               }
            }
        }).toArray();
      return res.json(nearbylocation)
  } 
}

const getNearByColleges=async(req,res)=>{
  let {latitude,longitude,distance}=req.body;
  //console.log(latitude,longitude,distance)
  if(!latitude || !longitude){
      return res.status(401).send({
          message: "Missing fields"
        });
  }else{
      const nearbylocation = await client.db('placeData').collection('colleges').find({
          loc:
            { $near:
               {
                 $geometry: { type: "Point",  coordinates: [latitude,longitude] },
                 $maxDistance:distance||1000
               }
            }
        }).toArray();
      return res.json(nearbylocation)
  } 
}

const getAllColleges=async(req,res)=>{
  let collections = await client.db('placeData').collection('colleges').find().toArray()
  return res.json(collections)
}


const getNearByUnivercities=async(req,res)=>{
  let {latitude,longitude,distance}=req.body;
  //console.log(latitude,longitude,distance)
  if(!latitude || !longitude){
      return res.status(401).send({
          message: "Missing fields"
        });
  }else{
      const nearbylocation = await client.db('placeData').collection('universities').find({
          loc:
            { $near:
               {
                 $geometry: { type: "Point",  coordinates: [latitude,longitude] },
                 $maxDistance:distance||1000
               }
            }
        }).toArray();
      return res.json(nearbylocation)
  } 
}
const getAllUnivercities=async(req,res)=>{
  let collections = await client.db('placeData').collection('universities').find().toArray()
  return res.json(collections)
}

module.exports = {
   getPlace,
   getNearByPlace,
   getNearByFoods,
   getNearByColleges,
   getAllColleges,
   getNearByUnivercities,
   getAllUnivercities,
}