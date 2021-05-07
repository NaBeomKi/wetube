import express from "express";

const globalRouter = express.Router();

const handleHome = (req, res) => res.send("Home");

export default globalRouter.get("/", handleHome);
