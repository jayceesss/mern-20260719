import productServices from "../services/product.services.js";

const createProduct = async (req, res) => {
    try {
        const createdProduct = await productServices.createProduct();

        res.status(201).json(createdProduct);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

export default { createProduct };