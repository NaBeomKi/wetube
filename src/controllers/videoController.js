import Video from "../models/Video";

export const home = async (req, res) => {
  const videos = await Video.find({});
  return res.render("home", { pageTitle: "Home", videos });
};
export const watch = (req, res) => {
  const {
    params: { id },
  } = req;

  return res.render("watch", { pageTitle: `Watching` });
};
export const getEdit = (req, res) => {
  const {
    params: { id },
  } = req;
  return res.render("editVideo", {
    pageTitle: `Editing`,
  });
};
export const postEdit = (req, res) => {
  const {
    params: { id },
    body: { title },
  } = req;
  return res.redirect(`/videos/${id}`);
};
export const search = (req, res) => res.send("Search");
export const getUpload = (req, res) =>
  res.render("uploadVideo", { pageTitle: "Upload Video" });
export const postUpload = (req, res) => {
  const {
    body: { title },
  } = req;
  return res.redirect("/");
};
export const deleteVideo = (req, res) => res.send("Delete Video");
