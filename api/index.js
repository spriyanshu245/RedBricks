import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config();
const port = 3003
const app = express()

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log('MongoDB Connected !');
}).catch((err)=> {
    console.log('Error connecting to Database !'+err);
})

app.get('/', (req, res) => {
    res.send('Root Dir')
});

app.listen(port, () => {
    console.log(`Server started on ${port}`);
 });