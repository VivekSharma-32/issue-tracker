const express = require("express");
const router = express.Router();
const { homeController } = require("../controllers/homeController");

router.get("/");
router.use("/project", require("./project"));

module.exports = router;
