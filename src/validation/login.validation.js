const joi  =require("joi");

//create user
const AdminLogin = {
    body :joi.object().keys({
        email : joi.string().trim().email().required(),
        password : joi.string().required(),
        
    })
};

module.exports = {
    AdminLogin
}