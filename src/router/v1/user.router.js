const { UserController } = require("../../controller");
const express = require("express");
const validate = require("../../middlewares/validate");
const { upload } = require("../../middlewares/multer");
const auth = require("../../middlewares/auth");
const { Uservalidation } = require("../../validation");
const router = express.Router();

//user create
router.post(
  "/create",
  upload.single("image"),
  auth(),
  validate(Uservalidation.CreateUser),
  UserController.CreateUser
);

//user list
router.get("/list", auth(), UserController.UserList);
//user id
router.get("/find/:userId", auth(), UserController.UserId);
//delete user
router.delete("/delete/:userId", auth(), UserController.DeleteUser);

//update user
router.put(
  "/update/:userId",
  upload.single("image"),
  auth(),
  UserController.UpdateUser
);
//searching user
router.get("/search", auth(), UserController.SearchUser);

//User Pagination
router.get("/item", auth(), UserController.UserPage);

// User MultipleDelete

// router.post("/multipledelete" ,
// UserController.MultipleDelete
// )

router.delete("/muldelete", UserController.MultipleDelete);
module.exports = router;
