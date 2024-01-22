import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017' || process.env.MONGODB_URI_K8S

const connectDB = async () => {
    await mongoose.connect(MONGODB_URI, {
        dbName: process.env.DB_NAME
    });

    console.log(`Your mongoDB database(${process.env.DB_NAME}) is connected... `);
}

export default connectDB;