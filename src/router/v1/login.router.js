const { LoginController} = require("../../controller");
const express = require("express");
const { LoginAdmin } = require("../../validation");
const validate = require("../../middlewares/validate");
const router = express.Router();


router.post("/admin" ,
validate(LoginAdmin.AdminLogin),
 LoginController.AdminLogin )

module.exports = router;    