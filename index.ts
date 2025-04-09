import express, { Application, Request, Response } from 'express';
import { config } from 'dotenv';
import cors from 'cors';

config();

const app: Application = express();
const PORT = process.env.PORT || 3000;



// 
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.listen(PORT, () => {
	console.log("SERVER IS RUNNING");
})