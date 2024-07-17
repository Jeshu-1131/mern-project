import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from './routes/auth.js';

dotenv.config();
const app = express();

mongoose
  .connect(process.env.MONGO_URL, {})
  .then(() => console.log("Mongodb connected successfully"))
  .catch((err)=>console.log(err,"Error occured in DB connection"))
 
app.use(cors())

  app.use(express.json());
  app.use('/api/auth',authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running under ${PORT}`));
