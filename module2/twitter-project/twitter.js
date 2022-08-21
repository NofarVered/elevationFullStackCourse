// Date.now() --- allows us to get the number of miliseconds elapsed since January 1, 1970

const LogicTweeter = function () {
  let _DATA = [];

  const addPost = function (str) {
    _DATA.push({ text: str, id: "p" + Date.now(), comments: [] });
  };

  const addComment = function (curId, str) {
    _DATA.forEach((post) => {
      if (curId == post.id) {
        post.comments.push({ id: "c" + Date.now(), test: str });
      }
    });
  };

  const removePost = function (curId) {
    _DATA = _DATA.filter((post) => post.id !== curId);
  };

  const removeComment = function (postId, comId) {
    _DATA.forEach((post) => {
      if (post.id == postId) {
        post.comments = post.comments.filter((c) => c.id !== comId);
      }
    });
  };

  const getPosts = function () {
    console.log(_DATA);
  };

  return {
    addPost: addPost,
    addComment: addComment,
    removePost: removePost,
    removeComment: removeComment,
    getPosts: getPosts,
  };
};

const tweeter = LogicTweeter();
function tester() {
  tweeter.addPost("This is my own post!");
  tweeter.addPost("2");
  tweeter.addPost("3");
  tweeter.addPost("4");
  tweeter.addPost("5");
  console.log(tweeter.getPosts());

  tweeter.removePost("p2");
  tweeter.removePost("p3");
  console.log(tweeter.getPosts());

  tweeter.addComment("p1", "aiiiii");
  tweeter.addComment("p1", "biiiii");
  tweeter.addComment("p2", "ciiiii");
  tweeter.addComment("p4", "diiiii");
  tweeter.addComment("p5", "eiiiii");
  console.log(tweeter.getPosts());

  tweeter.removeComment("p1", "c2");
  tweeter.removeComment("p4", "c3");
  console.log(tweeter.getPosts());
}
