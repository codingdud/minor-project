const mongoose=require('mongoose')

const getPlace=async(req,res)=>{
    const collections = await mongoose.connection.collection('placedatas').find().toArray();
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
      const nearbylocation = await mongoose.connection.collection('placedatas').find({
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
      const nearbylocation = await mongoose.connection.collection('foods').find({
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
      const nearbylocation = await mongoose.connection.collection('colleges').find({
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

const getNearByUnivercities=async(req,res)=>{
  let {latitude,longitude,distance}=req.body;
  //console.log(latitude,longitude,distance)
  if(!latitude || !longitude){
      return res.status(401).send({
          message: "Missing fields"
        });
  }else{
      const nearbylocation = await mongoose.connection.collection('universities').find({
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
module.exports = {
   getPlace,
   getNearByPlace,
   getNearByFoods,
   getNearByColleges,
   getNearByUnivercities
}