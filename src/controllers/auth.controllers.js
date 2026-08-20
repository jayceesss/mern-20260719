import authServices from "../services/auth.services.js";

const login = (req, res) => {
    authServices.login();

    res.send("Login");
};

const register = async (req, res) => {

    try {
        const data = await authServices.register();
    
        res.json(req.body);
        
    } catch (error) {
        res.status(400).json({
            message: error.message,
        });
    };
};

export default {login, register};