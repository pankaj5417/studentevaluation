const express = require("express");

const Topic = require("../models/topic");

const crudController = require("./crud.controller");

const router = express.Router();

router.post("", crudController.post(Topic));
router.get("", crudController.getAll(Topic));
router.get("/:id", crudController.getOne(Topic));

router.patch("/:id", async (req, res) => {
  try {
    const topic = await Topic.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();

    return res.send(topic);
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const topic = await Topic.findByIdAndDelete(req.params.id)
      .lean()
      .exec();

    return res.send(topic)
;
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});

module.exports = router;
