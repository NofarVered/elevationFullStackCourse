const TweeterRender = function () {
  const renderPosts = function (DATA) {
    const postsContainer = $("#posts");
    postsContainer.empty();
    const source = $("#post-template").html();
    const template = Handlebars.compile(source);
    let newHTML = template({ DATA });
    postsContainer.append(newHTML);
  };
  return {
    renderPosts: renderPosts,
  };
};
