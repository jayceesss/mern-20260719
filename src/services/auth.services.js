import User from "../models/User.js";

const login = () => {};

const register = async (input) => {
    return await User.create({
        name: input.name,
        email: input.email,
        password: input.password,
        address: input.address,
        phone: input.phone,
    });

    
};

export default {login, register};