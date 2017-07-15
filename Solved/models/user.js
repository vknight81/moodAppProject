var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var userSchema = new Schema({
  username: String,
  email: String,
  password: {
  	type: String,
  	require: true
  },
  mood: Number,
    // This only saves one note's ObjectId, ref refers to the Note model
  quote: {
    type: Schema.Types.ObjectId,
    ref: "Quote"
  }
});

var User = mongoose.model("User", userSchema);

module.exports = User;