import express from "express";
import routes from "../routes";
import {
  userDetail,
  editProfile,
  changePassword,
} from "../controllers/userController";
import { onlyPrivate } from "../Middleware";

const userRouter = express.Router();

userRouter.get(routes.userDetail(), onlyPrivate, userDetail);
userRouter.get(routes.editProfile, onlyPrivate, editProfile);
userRouter.get(routes.changePassword, changePassword);

export default userRouter;
