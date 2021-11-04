const path = require('path');

exports.createPages = ({ actions }) => {
  const { createPage } = actions;

  createPage({
    path: '/test',
    component: path.resolve('./src/templates/test.js'),
    defer: true,
  });
}
