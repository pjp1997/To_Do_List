import express from 'express';
import cors from 'cors';
import connection from './database/db.js';
import Route from './routes/route.js';



const app = express();
app.use(cors());
app.use(express.json({extends:true}));
app.use(express.urlencoded({extends:true}))

app.use('/',Route)
const PORT = 8000;
connection();

app.listen(PORT,()=>{

    console.log(`Your server is running sucessfully on port no ${PORT} `)

})