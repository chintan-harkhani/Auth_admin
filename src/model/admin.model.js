const mongoose = require("mongoose");
// user model schema defiend
const AdminSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
    },
    password: {
      type: String,
      trim: true,
    },
    confirm_password: {
      type: String,
      trim: true,
    },
    token: {
      type: String,
    },
    is_active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
// model create
const Admin = mongoose.model("Admin", AdminSchema);
//module expoart
module.exports = Admin;
