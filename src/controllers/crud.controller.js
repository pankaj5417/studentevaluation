const post = (model) => async (req, res) => {
  try {
    const item = await model.create(req.body);

    return res.status(201).send(item);
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
};

const getAll = (model,populate1) => async (req, res) => {
  try {
    const items = await model.find().populate(populate1).sort({marks:1}).limit(1).lean().exec();

    return res.send(items);
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
};


const getAllStudents = (model,populate1,populate2) => async (req, res) => {
  try {
    const items = await model.find().populate(populate1).populate(populate2).lean().exec();

    return res.send(items);
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
};

const getOneStudent = (model,populate1,populate2) => async (req, res) => {
  try {
    const items = await model.findById(req.params.id).populate(populate1).populate(populate2).lean().exec();

    return res.send(items);
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
};

const getOne = (model) => async (req, res) => {
  try {
    const item = await model.findById(req.params.id).lean().exec();

    return res.send(item);
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
};

// const getAllWithOnePopulate = (model) => async (req, res) => {};

const getAllWithTwoPopulate =
  (model, populate1, populate2) => async (req, res) => {
    try {
      const items = await model
        .find()
        .populate(populate1)
        .populate(populate2)
        .lean()
        .exec();

      return res.send(items);
    } catch (e) {
      return res.status(500).json({ message: e.message, status: "Failed" });
    }
  };

const updateOne = (model) => async (req, res) => {
  try {
    const item = await model
      .findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      })
      .lean()
      .exec();

    return res.status(201).send(item);
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
};

const deleteOne = (model) => async (req, res) => {
  try {
    const item = await model.findByIdAndDelete(req.params.id).lean().exec();

    return res.status(200).send(item);
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
};

module.exports = {
  post,
  getAll,
  getAllStudents,
  getOneStudent,
  getOne,
  getAllWithTwoPopulate,
  updateOne,
  deleteOne,
};
