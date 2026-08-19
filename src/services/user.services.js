import User from '../models/User.js'

const getUsers = async () => {
const users = await User.find();

return users
};

const getUserById = async (id) => {
    const user = await User.findById(id);

    return user;
};

const createUser = async () => {
    return await User.create({
        name: "Kala Chaudhary",
        email: "kala@gmail.com",
        phone: 9800000005,
        password: "123456",
        address: {
            city: "Dulari",
        },
    });
};

const deleteUser = async (id) => {
    await User.findByIdAndDelete(id);
}

export default {getUsers, getUserById, createUser, deleteUser};