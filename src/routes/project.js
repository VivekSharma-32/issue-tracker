const express = require("express");
const router = express.Router();
const {
  createProjectController,
  createIssueByIdController,
  getProjectByIdController,
} = require("../controllers/projectController");

router.post("/create", createProjectController);

router.get("/:id", getProjectByIdController);

router.post("/:id", createIssueByIdController);

module.exports = router;
