import express from "express";
import {PORT, mongoDBURL} from "./config.js";
import mongoose from 'mongoose';
import {Voter} from './models/voterModel.js';
import votersRoute from "./routes/votersRoute.js";
import cors from 'cors';

const app = express();

app.use(express.json());

app.use(cors());

/* app.use(
    cors({
        origin: 'http://localhost:3001/',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type'],
    })
)  */
app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('Welcome to MERN Stack Tutorial');
});

app.use('/voters', votersRoute);
mongoose
.connect(mongoDBURL)
.then(()=>{
    console.log('App connected to database');
    app.listen(PORT, () => {
        console.log(`App is listening to port: ${PORT}`);
    })
})
.catch((error)=>{
    console.log(error);

});