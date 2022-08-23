const factory = function () {
  let DATA = []; // STRUCT --> [{key: "", text: "", comments: [{key:"", text:""}, ....]}, ...]

  // Adding a post by a given string.
  const addPost = function (str) {
    try {
      DATA.push({
        key: "p" + Math.floor(Math.random() * 100),
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
        item.key == curKey ? DATA.splice(index) : null;
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
              key: "c" + Math.floor(Math.random() * 100),
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
          ? item.comments.forEach((item, index) => {
              item.key == commentKey ? item.splice(index) : null;
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
      console.log(DATA);
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
