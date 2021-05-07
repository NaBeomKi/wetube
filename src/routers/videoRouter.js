import express from "express";

const videoRouter = express.Router();

const handleWatchVideo = (req, res) => res.send("Watch Video");

export default videoRouter.get("/watch", handleWatchVideo);
