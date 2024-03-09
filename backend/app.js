const express=require('express')
const dotenv=require('dotenv')
const cors=require('cors')
const { default: mongoose } = require('mongoose')

dotenv.config({path:'./.env.local'})

const app=express()
app.use(express.json())
app.use(cors())

app.use('/health',(req,res)=>res.json({data:"i am ok.."}))
app.use('/api',require('./routes/placeRouter'))

//conneting to database and listing to port
const mongoid=process.env.MID
let db=process.env.DB||"database"
//console.log(mongoid,db)
mongoose.connect(`${mongoid}${db}?retryWrites=true&w=majority`)
    .then(()=>{
        const port=process.env.PORT||8080
            app.listen(port,()=>{
            console.log(`connect to port:${port}
            database is active`)
        })
    })
    .catch((err)=>{
        console.log('my error->',err)
    })
