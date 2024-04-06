const { AdminService } = require("../service");
const bcrypt = require("bcrypt");  
//crete admin
const CreateAdmin = async (req, res) => {
  try {
    const { username, email, password, confirm_password } = req.body;

    // password check
    if (password !== confirm_password) {
      return res.status(400).json({ message: "Passwords do not match" });
    }
    const Email = await AdminService.Findemail(email);
    if (Email) {
      throw new Error(
        "Email Already Registered this Email (" +
        Email.email +
          ") Please Create By onther Email..!"
      );
    }
    // Encrypt password
    const Password = await bcrypt.hash(password, 10);

    let data = {
      username,
      email,
      password :Password,

    }

    let admin = await AdminService.CreateAdmin(data);

    if (!admin) {
      throw new Error(" admin Not Created , Please Try  Again Later");
    }

    res.status(200).json({
      success: true,
      message: " SuccessFully  Admin Created ..!",
      data: admin,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

//admin List
const AdminList = async (req, res) => {
  try {
    const List = await AdminService.AdminList(req, res);

    res.status(200).json({
      success: true,
      message: " Admin Data SuccessFully List Get !.....",
      data: List,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// admin Id
const AdminId = async (req, res) => {
  try {
    const AdminId = req.params.adminId;
    const ID = await AdminService.FindId(AdminId);
    if (!ID) {
      throw new Error("Admin Not Found !...");
    }
    res.status(200).json({
      success: true,
      message: "Suucessfully Admin List Get!....",
      data: ID,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

//delete Admin
const DeleteAdmin = async (req, res) => {
  try {
    const AdminId = req.params.adminId;
    const ID = await AdminService.FindId(AdminId);
    if (!ID) {
      throw new Error("Admin Not Found !...");
    }
    await AdminService.DeleteAdmin(AdminId);
    res.status(200).json({
      success: true,
      message: "Suucessfully Admin Data Deleted!....",
      data: ID,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
module.exports = {
  CreateAdmin,
  AdminList,
  AdminId,
  DeleteAdmin
};

