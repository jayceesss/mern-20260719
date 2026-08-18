import productServices from "../services/user.services.js";

const createProduct = async (req, res) => {
    producServices.createProduct();

    res.send("Product Created.");
}

export default {createProduct};