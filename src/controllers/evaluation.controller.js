const express = require("express");
const Evaluation = require("../models/Evaluation");

//const Topic = require("../models/topic");

const crudController = require("./crud.controller");

const router = express.Router();

router.get("", crudController.getAllStudents(Evaluation,  { path:"user_id"}, {path:"topic_id"}
));

router.get("/:id", crudController.getOneStudent(Evaluation, { path:"user_id"},{path:"topic_id"}));


router.post("",crudController.post(Evaluation))

router.patch("/:id", async (req, res) => {
  try {
    const tag = await Tag.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();

    return res.status(200).send(tag);
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const tag = await Tag.findByIdAndDelete(req.params.id).lean().exec();

    return res.status(200).send(tag);
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});

router.get("/:id/posts", async (req, res) => {
  try {
    const tag = await Tag.findById(req.params.id).lean().exec();
    const posts = await Post.find({ tag_ids: tag._id })
      .populate("tag_ids")
      .lean()
      .exec();

    return res.status(200).send({ posts, tag });
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});

module.exports = router;
