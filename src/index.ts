import express, { Application } from 'express';
import { config } from 'dotenv';
import cors from 'cors';


import UserRoutes from './routes/user.routes';
import AuthRoutes from './routes/auth.routes';


config();

const app: Application = express();
const PORT = process.env.PORT || 3000;




// 
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use('/user', UserRoutes);
app.use('/auth', AuthRoutes);


app.listen(PORT, () => {
	console.log("SERVER IS RUNNING");
	console.log(PORT)
})