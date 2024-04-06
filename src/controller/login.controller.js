const { AdminService } = require("../service");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");  
const jwtSecrectKey = "cdccsvavsvfssbtybnjnu";

const AdminLogin = async (req, res) => {
    try {
        // validation;
        const { email, password } = req.body;

        const findUser = await AdminService.Findemail(email);

        if (!findUser) throw Error("User not found");

        const passwordMatch = await bcrypt.compare(password, findUser.password);
        if (!passwordMatch) {
            return res.status(401).json({ message: "Invalid password" });
        }
        let option = {
            email,
            password,
        };


        let token = await jwt.sign(option, jwtSecrectKey);

        let data;
        if (token) {
            data = await AdminService.AdminUpdate(findUser._id, token);
        }
       console.log(data);
        res.status(200).json({
            success: true,
            message: "Admin Data Login successfully!",
            data: data
        });
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

module.exports = {
    AdminLogin
}