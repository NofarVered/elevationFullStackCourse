const util = function () {
  let DATA = []; // STRUCT --> [{key: "", text: "", comments: [{key:"", text:""}, ....]}, ...]

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
  const getData = function () {
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
    getData: getData,
  };
};

const factory = util();
