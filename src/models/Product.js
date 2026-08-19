import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        minLength: 5,
        required:[true, "Product name is required"],
    },
    brand:String,
    category:{
        type: String,
        required: [true, "Category is required"],
    },
    price:{
        type: Number,
        required: [true, "Price is required"],
        min: 100,
    },
    description:String,
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    stock:{
        type:Number,
        default: 1,
        min:[0, "stock cannot be lessthan 0"]
    },
    imageUrls: [String],
});

export default mongoose.model("Product", productSchema);