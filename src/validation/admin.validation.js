const joi  =require("joi");

//create user
const CreateAdmin = {
    body :joi.object().keys({
        username : joi.string().min(1).max(50).pattern(/^[a-zA-Z\s]*$/).trim().required(),
        email : joi.string().trim().email().required(),
        password : joi.string().min(8).max(30).required(),
        confirm_password :joi.string().min(8).max(30).required(),
        
    })
};

module.exports = {
     CreateAdmin
}