const routes = (module.exports = require("next-routes")());

routes
  .add("about")
  .add("posts")
  .add("post-detail", "post-detail/:id")
  .add("integrations")
  .add("error")

