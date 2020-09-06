import { videos } from "../db";

export const home = (req, res) => {
  res.render("home", { pageTitle: "Home", videos });
};
export const search = (req, res) => {
  // const searchingBy = req.query.term; 똑같음!
  const {
    query: { term: searchingBy },
  } = req;

  //   res.render("search", { pageTitle: "Search", searchingBy: searchingBy }); 똑같음!
  res.render("search", { pageTitle: "Search", searchingBy });
};
// export const videos = (req, res) =>
//   res.render("videos", { pageTitle: "Videos" }); 삭제
export const upload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });
export const videoDetail = (req, res) =>
  res.render("videoDetail", { pageTitle: "Video Detail" });
export const editVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "Edit Video" });
export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "Delete Video" });
