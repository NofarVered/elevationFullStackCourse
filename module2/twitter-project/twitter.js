const LogicTweeter = function () {
  let _DATA = [];

  const addPost = function (str) {
    _DATA.push({
      text: str,
      id: "p" + Math.floor(Math.random() * 100),
      comments: [],
    });
  };

  const addComment = function (curId, str) {
    _DATA.forEach((post) => {
      if (curId == post.id) {
        post.comments.push({
          id: "c" + Math.floor(Math.random() * 100),
          test: str,
        });
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
