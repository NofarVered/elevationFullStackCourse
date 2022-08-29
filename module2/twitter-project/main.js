const tweeter = TweeterModule();
const render = TweeterRender();

const rendering = function () {
  $("#posts").empty();
  render.renderPosts(tweeter.getPosts());
};
rendering();

$("#posts").on("click", ".delete", function () {
  let postId = $(this).closest(".post").data().id;
  tweeter.removePost(postId);
  rendering();
});

$("#posts").on("click", ".add", function () {
  let commentText = $(this).closest(".comments").find(".comment-input").val();
  let postId = $(this).closest(".post").data().id;
  tweeter.addComment(postId, commentText);
  rendering();
  $("#comment-input").val("");
});

$("#posts").on("click", ".delete-comment", function () {
  let commentId = $(this).closest("div").data().id;
  let postId = $(this).closest(".post").data().id;
  tweeter.removeComment(postId, commentId);
  rendering();
});

$("#post").on("click", function () {
  let postText = $("#post-input").val();
  tweeter.addPost(postText);
  rendering();
  $("#post-input").val("");
});
