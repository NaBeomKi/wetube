import express from "express";

const userRouter = express.Router();

const handleEditUser = (req, res) => res.send("Edit User");

export default userRouter.get("/edit", handleEditUser);
