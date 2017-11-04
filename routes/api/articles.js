const router = require("express").Router();
const articleController = require("../../controllers/articleController");

// Matches with "/api/articles"
router
  .route("/")
  .get(articleController.findAll)
  .post(articleController.create);

router
  .route("api/articles/saved/:id")
  .get(articleController.findById)
  .post(articleController.create);

router
  .route("/results")
  .get(articleController.findAll)
  .post(articleController.create);


module.exports = router;