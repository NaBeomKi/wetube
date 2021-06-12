const videoContainer = document.getElementById("videoContainer");
const form = document.getElementById("commentForm");
const videoComments = document.querySelector(".video__comments ul");
const commentsArray = Array.from(videoComments.querySelectorAll("li"));

const handleDelete = async (event) => {
  const li = event.target.parentNode;
  const commentId = li.dataset.id;

  const response = await fetch(`/api/comments/${commentId}`, {
    method: "DELETE",
  });
  if (response.status === 200) {
    videoComments.removeChild(li);
  }
};

const addComment = (text, id) => {
  const newComment = document.createElement("li");
  newComment.className = "video__comment";
  newComment.dataset.id = id;
  const icon = document.createElement("i");
  icon.className = "fas fa-comment";
  const span = document.createElement("span");
  span.innerText = ` ${text}`;
  const delBtn = document.createElement("i");
  delBtn.className = "far fa-trash-alt delBtn";
  delBtn.addEventListener("click", handleDelete);
  newComment.append(icon, span, delBtn);
  videoComments.prepend(newComment);
};

const handleSubmit = async (event) => {
  event.preventDefault();
  const textarea = form.querySelector("textarea");
  const text = textarea.value;
  const videoId = videoContainer.dataset.id;
  if (text === "") {
    return;
  }
  const response = await fetch(`/api/videos/${videoId}/comment`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text }),
  });
  if (response.status === 201) {
    textarea.value = "";
    const { newCommentId } = await response.json();
    addComment(text, newCommentId);
  }
};

if (form) {
  form.addEventListener("submit", handleSubmit);
}

commentsArray.map((comment) => {
  const delBtn = comment.querySelector(".delBtn");
  if (delBtn) {
    delBtn.addEventListener("click", handleDelete);
  }
});
