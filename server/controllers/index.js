const blog_controller = require('./blog.controller');
const user_controller = require('./user.controller');
const tag_controller = require('./tag.controller');

const controller = {
    blog: blog_controller,
    user: user_controller,
    tag: tag_controller
};

module.exports = controller;