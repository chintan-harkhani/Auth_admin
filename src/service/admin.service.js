const { AdminModel } = require("../model");

//create user
const CreateAdmin = async (body) => {
  return AdminModel.create(body);
};

// find user
const AdminList = async () => {
  return AdminModel.find();
};

//find  email
const Findemail = async (email) => {
  return AdminModel.findOne({ email });
};

//find Id
const FindId =async (adminId) =>{
    return AdminModel.findById(adminId)
}

//delete admin
const DeleteAdmin = (adminId) =>{
    return AdminModel.findByIdAndDelete(adminId)
}

// admin update
const AdminUpdate = async (_id, token) => {
    return await AdminModel.findByIdAndUpdate(
        { _id },
        {
            $set: { token },
        },
        { new: true }
    );
};


module.exports ={
    CreateAdmin,
    AdminList,
    Findemail,
    FindId,
    DeleteAdmin,
    AdminUpdate
}
