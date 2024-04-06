const express = require("express");
const   userRouter = require("./user.router");
const AdminRouter = require("./admin.router") ;
const LoginRouter =require("./login.router");
const router = express.Router();

router.use("/user" , userRouter);
router.use("/admin" , AdminRouter);
router.use("/login" , LoginRouter)

module.exports  = router;