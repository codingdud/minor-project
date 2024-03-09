import fetch from "node-fetch"
import {model,mongoose} from "mongoose";
const YOUR_API_KEY='ebebfa17f26b4524a6b36ce05f38dc74'
const  BASE_URL = 'https://api.geoapify.com/v2/places?'


mongoose.connect(`mongodb+srv://animesh:2024@cluster0.rfijjbe.mongodb.net/placeData?retryWrites=true&w=majority`)
var conn=mongoose.connection
conn.on('connected',()=>{
    console.log("connected!")
})
conn.on('disconnected',()=>{
    console.log("disconnected!")
})

var categories=['accommodation','catering','education.university','education.college']
const dbname=['placedatas','foods','universities','colleges']
const id=0
const url=`${BASE_URL}categories=${categories[id]}&filter=geometry:88d4b969d0397b5bd43266557f499541&bias=proximity:85.83194827478675,20.2723327&limit=450&apiKey=${YOUR_API_KEY}`
async function getPlaceData(){
    const response = await fetch(url);
    const data = await response.json();      
    //console.log("data",data);
    //generat
    const schemaFields = {};
      for (const key in data.features[0].properties) {
        if(key==='lon'||key==='lat'){
            schemaFields['loc']='object'
        }else if(key==='datasource'||key==='distance'||key==='place_id'){

        }
        else{
         schemaFields[key] = typeof data.features[0].properties[key];
        }
      }
      const modelSchema =mongoose.Schema(schemaFields);
      console.log(schemaFields)
      // Create Model
    const Model = model(dbname[id], modelSchema);
    data.features.forEach((n)=>{
    const newData = {};
      for (const key in n.properties) {
        if(key==='lon'||key==='lat'){
            newData['loc']={ type: "Point", coordinates:[n.properties['lon'],n.properties['lat']] }
        }
        else{
            newData[key] = n.properties[key];
        }
      }
      //console.log("newData",newData)
        Model.create(newData)
            .then(doc => {
                console.log("created document with id ", doc._id);
            })
            .catch(error => {console.error(error)});

        //console.log(n.properties)
    })
    /* const result=await mongoose.Collection('placeData').insertMany()
    console.log(result) */
}
getPlaceData()


