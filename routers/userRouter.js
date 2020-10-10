import express from "express";
import routes from "../routes";
import {
  userDetail,
  editProfile,
  changePassword,
} from "../controllers/userController";
import { onlyPublic } from "../Middleware";

const userRouter = express.Router();

userRouter.get(routes.userDetail(), onlyPublic, userDetail);
userRouter.get(routes.editProfile, onlyPublic, editProfile);
userRouter.get(routes.changePassword, changePassword);

export default userRouter;
