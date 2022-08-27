const tweeter = TweeterModule();
const render = TweeterRender();
const posts = tweeter.getPosts();
render.renderPosts(posts);
