import Product from "../models/Product.js";

const createProduct = async () => {
    return await Product.create({
        name: "OnePlus 12",
        brand: "One Plus",
        category: "Smart Phone",
        price: 100000,
    });
};

export default { createProduct };