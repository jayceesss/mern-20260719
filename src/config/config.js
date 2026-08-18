import dotenv from 'dotenv';

dotenv.config();

const config = {
    port: process.env.PORT || 8000,
    montodbUrl: process.env.MONGODB_URL || "",

}

export default config;