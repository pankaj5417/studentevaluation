const mongoose = require("mongoose");

// Tags Mongoose => Post and Tags are in a many to many relationship
const evaluationSchema = new mongoose.Schema(
  {
    instructor_id: { 
      type:String,
      required:false
     },
    date_of_evaluation:{ type: String ,required: true},
    user_id:{
       type : mongoose.Schema.Types.ObjectId,
      ref:"user",
      required:true
    },
  
  topic_id:{
    type : mongoose.Schema.Types.ObjectId,
    ref:"topic",
    required:false
  
  
 }},
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("evaluation", evaluationSchema); // tags collection
