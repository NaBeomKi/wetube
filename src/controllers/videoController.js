const videos = [
  {
    title: "hello",
    rating: 5,
    comments: 10,
    createdAt: "2 minutes ago",
    views: 1,
    id: 1,
  },
  {
    title: "video 2",
    rating: 5,
    comments: 10,
    createdAt: "2 minutes ago",
    views: 65,
    id: 2,
  },
  {
    title: "im ki",
    rating: 5,
    comments: 10,
    createdAt: "2 minutes ago",
    views: 65,
    id: 3,
  },
];

export const trending = (req, res) =>
  res.render("home", { pageTitle: "Home", videos });
export const watch = (req, res) => {
  const {
    params: { id },
  } = req;
  const video = videos[id - 1];
  return res.render("watch", { pageTitle: `Watching ${video.title}`, video });
};
export const getEdit = (req, res) => {
  const {
    params: { id },
  } = req;
  const video = videos[id - 1];
  return res.render("editVideo", {
    pageTitle: `Editing: ${video.title}`,
    video,
  });
};
export const postEdit = (req, res) => {
  const {
    params: { id },
    body: { title },
  } = req;
  videos[id - 1].title = title;
  return res.redirect(`/videos/${id}`);
};
export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("Upload");
export const deleteVideo = (req, res) => res.send("Delete Video");
