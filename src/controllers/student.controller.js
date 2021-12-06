const express = require("express");

const Student = require("../models/Student");
//const User=require("../models/Users")

const crudController = require("./crud.controller");

const router = express.Router();

// /posts "/:id" get

router.post("", crudController.post(Student));

/*
router.get(
  "",
  crudController.getAllWithTwoPopulate(
    Student,
    { path: "user_id", select: "first_name" },
    { path: "tag_ids" }
  )
);

*/

// router.get("", async (req, res) => {
//   try {
//     const posts = await Student.find()
//       .populate({ path: "user_id", select: "first_name" })
//       .populate("tag_ids")
//       .lean()
//       .exec();

//     return res.send(posts);
//   } catch (e) {
//     return res.status(500).json({ message: e.message, status: "Failed" });
//   }
// });

router.get("", crudController.getAll(Student,  { path:"user_id"}, 
));


router.get("/:id", crudController.getOne(Student));



router.patch("/:id", async (req, res) => {
  try {
    const post = await Student.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();

    return res.send(post);
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const post = await Student.findByIdAndDelete(req.params.id).lean().exec();

    return res.send(post);
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});

module.exports = router;
