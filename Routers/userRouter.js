
import { Router } from "express";

import userController from "../controllers/userController.js"

const userRouter = Router();

userRouter.get("/", userController.getPhotos);

userRouter.get("/match/:imgId", userController.getMatch);

userRouter.get("/scoreBoard", userController.getScoreBoard);

userRouter.post("/score",userController.postScore);



export default userRouter;