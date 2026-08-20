import express from "express";
import config from './config/config.js';
import userRoutes from './routes/user.routes.js';
import productRoutes from './routes/product.routes.js';
import authRoutes from './routes/auth.routes.js';
import connectDB from "./config/database.js";


const app = express();
connectDB();

// use this instead of bodyparser.json()
app.use(express.json());


app.get('/', (req, res) => {
    res.send("Hello from Jaycees");
});

app.get('/about', (req, res) => {
    res.send("about page")
});

app.use('/api/users', userRoutes );
app.use('/api/products', productRoutes);
app.use('/api/auth', authRoutes);


app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}...`);
});