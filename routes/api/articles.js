const router = require("express").Router();
const articleController = require("../../controllers/articleController");

// Matches with "/api/articles"
router
  .route("/")
  .get(articleController.findAll)
  .post(articleController.create);

router
  .route("/saved/:id")
  .get(articleController.findAll)
  .post(articleController.create);


module.exports = router;