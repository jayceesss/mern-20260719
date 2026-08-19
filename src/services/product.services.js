import Product from "../models/Product.js";

const createProduct = async () => {
    return await Product.create({
        name: "Asus Tuff F15",
        brand: "ASUS",
        category: "Laptop",
        price: 200000,
    });
};

export default { createProduct };