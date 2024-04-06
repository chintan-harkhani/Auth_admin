const { AdminController } = require("../../controller");
const express = require("express");
const { AdminValidation } = require("../../validation");
const validate = require("../../middlewares/validate");
const router = express.Router();

//Admin create
router.post(
  "/create",
  validate(AdminValidation.CreateAdmin),
  AdminController.CreateAdmin
);

// Admin List
router.get("/list", AdminController.AdminList);

//Admin Find
router.get("/find/:adminId" , 
AdminController.AdminId
)

//admin Delete 
router.delete("/delete/:adminId" , 
AdminController.DeleteAdmin
)

module.exports = router;
