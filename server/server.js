import express from 'express'
import cors from 'cors'
import 'dotenv/config'


const app=express();

const PORT=process.env.PORT || 3000;

app.use(express.json())
app.use(cors())


app.get('/',(req,res)=> {
    res.send("CHAL RAHA HAI");
})


app.listen(PORT, ()=>{
    console.log("running!");
})