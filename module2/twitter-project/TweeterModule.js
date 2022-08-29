const TweeterModule = function () {
  let DATA = [
    {
      text: "First post!",
      id: "p1",
      comments: [
        { id: "c1", text: "First comment on first post!" },
        { id: "c2", text: "Second comment on first post!!" },
      ],
    },
  ];

  // Adding a post by a given string.
  const addPost = function (str) {
    try {
      DATA.push({
        id: "p" + Math.random(),
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
        item.id == curKey ? DATA.splice(index, 1) : null;
      });
    } catch (error) {
      console.error(error);
    }
  };

  // Adding a comment by a given string.
  const addComment = function (postKey, str) {
    try {
      DATA.forEach((item) => {
        item.id == postKey
          ? item.comments.push({
              id: "c" + Math.random(),
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
    console.log("hello");
    try {
      DATA.forEach((item) => {
        item.id == postKey
          ? item.comments.forEach((com, index) => {
              com.id == commentKey ? item.comments.splice(index, 1) : null;
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
