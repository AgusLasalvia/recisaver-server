import express, { Application } from 'express';
import { config } from 'dotenv';
import cors from 'cors';


import UserRoutes from './src/routes/user.routes';
import AuthRoutes from './src/routes/auth.routes';
import CategoryRoute from './src/routes/category.routes'


config();

const app: Application = express();
const PORT = process.env.PORT || 3000;


// 
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use('/user', UserRoutes);
app.use('/auth', AuthRoutes);
app.use('/category', CategoryRoute);

app.listen(PORT, () => {
	console.log("SERVER IS RUNNING");
	console.log(PORT)
})