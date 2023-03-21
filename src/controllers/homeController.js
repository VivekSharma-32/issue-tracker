const Project = require("../models/project.model");

export const homeController = async (req, res) => {
  try {
    let projects = await Project.find({}).sort("-createdAt");
    return res.render("home", {
      title: "Issue Tracker | Home",
      projects,
    });
  } catch (error) {
    console.log("Error");
    return;
  }
};
