const TweeterModule = function () {
  let DATA = [
    {
      text: "First post!",
      key: "p1",
      comments: [
        { id: "c1", text: "First comment on first post!" },
        { id: "c2", text: "Second comment on first post!!" },
      ],
    },
    {
      text: "Second post!",
      key: "p2",
      comments: [
        {
          id: "c4",
          text: "First comment on second post!",
        },
        { id: "c5", text: "Second comment on second post!" },
      ],
    },
  ]; // STRUCT --> [{key: "", text: "", comments: [{key:"", text:""}, ....]}, ...]

  // Adding a post by a given string.
  const addPost = function (str) {
    try {
      DATA.push({
        key: "p" + Math.random(),
        text: str,
        comments: [],
      });
    } catch (error) {
      console.error(error);
    }
  };

  // Removing a post in place.
  const removePost = function (curKey) {
    try {
      DATA.forEach((item, index) => {
        item.key == curKey ? DATA.splice(index, 1) : null;
      });
    } catch (error) {
      console.error(error);
    }
  };

  // Adding a comment by a given string.
  const addComment = function (postKey, str) {
    try {
      DATA.forEach((item) => {
        item.key == postKey
          ? item.comments.push({
              key: "c" + Math.random(),
              text: str,
            })
          : null;
      });
    } catch (error) {
      console.error(error);
    }
  };

  // Remove a comment in place.
  const removeComment = function (postKey, commentKey) {
    try {
      DATA.forEach((item) => {
        item.key == postKey
          ? item.comments.forEach((com, index) => {
              com.key == commentKey ? item.comments.splice(index, 1) : null;
            })
          : null;
      });
    } catch (error) {
      console.error(error);
    }
  };

  // print data
  const getPosts = function () {
    try {
      return DATA;
    } catch (error) {
      console.error(error);
    }
  };

  return {
    addPost: addPost,
    addComment: addComment,
    removePost: removePost,
    removeComment: removeComment,
    getPosts: getPosts,
  };
};
