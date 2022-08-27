const tweeter = TweeterModule();
const render = TweeterRender();

render.renderPosts(tweeter.getPosts());
