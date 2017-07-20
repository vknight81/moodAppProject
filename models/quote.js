var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var quoteSchema = new Schema({
  text: String,
  favorited: {
    type: Boolean,
    default: false
  },
  mood: Number
});

var Quote = mongoose.model("Quote", quoteSchema);

module.exports = Quote;