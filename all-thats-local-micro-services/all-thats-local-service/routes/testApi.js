var express = require("express");
var router = express.Router();
const testController = require('../controllers/testController');

router.get("/", testController.getTests);
router.post("/add", testController.create);

module.exports = router;
