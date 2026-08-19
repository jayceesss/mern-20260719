import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "User name is required."],
        minLength: 5,
        maxLength: 50,
    },
    email: {
        type: String,
        required: [true, "Email cannot be empty."],
        minLength: 10,
        maxLength: 40,
        unique: true,
        lowercase: true,
        validate: {
            validator: (value) => {
                const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

                return emailRegex.test(value);
            },
            message: "Invalid email address.",
        },
    },
    phone: {
        type: String,
        minLength: 6,
        maxLength: 15,
        required: [true, "Phone number cannot be empty."],
        unique: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    password: {
        type: String,
        required: [true, "Password must be at least 6 digit"],
    },
    role: {
        type: [String],
        default: ["CUSTOMER"],
        enum: ["CUSTOMER", "MERCHANT", "ADMIN", "SUPER_ADMIN"],
    },
    address: {
        city: {
            type: String,
            required: true,
        },
        province: String,
        country: {
            type: String,
            default: "Nepal",
        },
    },
});

export default mongoose.model("User", userSchema);