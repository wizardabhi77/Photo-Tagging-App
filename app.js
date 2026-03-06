
import express, { json } from "express";
import { configDotenv } from "dotenv";
import cors from "cors";
import userRouter from "./Routers/userRouter.js";

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

app.use("/", userRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, (error) =>{
    if(error) throw new Error(error.message);

    console.log("SEVER RUNNING AT "+PORT);
})


