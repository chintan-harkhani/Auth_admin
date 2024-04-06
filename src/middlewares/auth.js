const jwt = require("jsonwebtoken");
const { AdminModel } = require("../model");
const jwtSecrectKey = "cdccsvavsvfssbtybnjnu";

// auth function create
const auth = () => async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return next(
        res.status(401).json({
          success: false,
          message: "Plesase Authentication....",
        })
      );
    }
    const decoded = jwt.verify(token.replace("Bearer ", ""), jwtSecrectKey);
    console.log(decoded);
    if (!decoded) {
      return next(new Error("Please Enter Valid Token !"));
    }
    const Admin = await AdminModel.findOne({ email: decoded.email });
    if (!Admin) {
      return next(new Error("Please Authenticate ..."));
    }
    req.email = Admin;
    next();
  } catch (error) {
    return next(new Error(error));
  }
};

module.exports = auth;
