// Date.now() --- allows us to get the number of miliseconds elapsed since January 1, 1970

const Twitter = function () {
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
