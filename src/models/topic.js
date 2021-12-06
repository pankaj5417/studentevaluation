const mongoose = require("mongoose");

// Tags Mongoose => Post and Tags are in a many to many relationship
const topicSchema = new mongoose.Schema(
  {
    topic_name: { type: String, required: true },
   // date_of_evaluation:{ type: Number ,required: true}
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("topic", topicSchema); // tags collection
