const express = require("express");

const usersController = require("./controllers/users.controller");
const evaluationController = require("./controllers/evaluation.controller");
const studentController = require("./controllers/student.controller");
const topicController = require("./controllers/topic.controller");

const app = express();

app.use(express.json());

app.use("/students", studentController);
app.use("/topics", topicController);
app.use("/users", usersController);
app.use("/evaluations", evaluationController);

module.exports = app;
