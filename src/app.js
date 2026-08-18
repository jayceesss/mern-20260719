import express from "express";
import config from './config/config.js';
import userRoute from './routes/user.routes.js';
import connectDB from "./config/database.js";
import productRoute from './routes/product.routes.js';


const app = express();
connectDB();

app.get('/', (req, res) => {
    res.send("Hello from Jaycees");
});

app.get('/about', (req, res) => {
    res.send("about page")
});

app.use('/users', userRoute );
app.use('/products', productRoute);


app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}...`);
});