const mongoose=require("./connect");
const USERSCHEMA ={
  name        : String,
  email       : String,
  password    : String,
  registerdate: Date,
  sex         : String,
  addres      : String
}
const USERS = mongoose.model("users",USERSCHEMA);
module.exports=USERS;
