var mongoose = require("mongoose");
var schema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  firstName: { type: String, default: "" },
  lastName: { type: String, default: "" },
  phone: {type:String , default:""}
}); 

var user = new mongoose.model("User", schema);
module.exports = user;
