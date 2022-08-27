const tweeter = TweeterModule();
const render = TweeterRender();

render.renderPosts(tweeter.getPosts());

$("#posts").on("click", ".delete", function () {
  let postId = $(this).closest(".post").data().id;
  tweeter.removePost(postId);
  render.renderPosts(tweeter.getPosts());
});

$("#posts").on("click", ".add", function () {
  let commentText = $(this).closest(".comments").find(".comment-input").val();
  let postId = $(this).closest(".post").data().id;
  tweeter.addComment(postId, commentText);
  render.renderPosts(tweeter.getPosts());
  $("#comment-input").val("");
  console.log(tweeter.getPosts());
});

$("#posts").on("click", ".delete-comment", function () {
  let commentId = $(this).closest("div").data().id;
  let postId = $(this).closest(".post").data().id;
  console.log(commentId);
  console.log(postId);
  tweeter.removeComment(postId, commentId);
  render.renderPosts(tweeter.getPosts());
});

$("#post").on("click", function () {
  let postText = $("#post-input").val();
  tweeter.addPost(postText);
  render.renderPosts(tweeter.getPosts());
  $("#post-input").val("");
  console.log(tweeter.getPosts());
});
