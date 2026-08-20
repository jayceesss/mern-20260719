import User from "../models/User.js";

const login = () => {};

const register = async () => {
    await User.create({
        name: "Kala Chaudhary",
        email: "kala@gmail.com",
        phone: 9800000005,
        password: "123456",
        address: {
            city: "Dulari",
        },
    });
};

export default {login, register};