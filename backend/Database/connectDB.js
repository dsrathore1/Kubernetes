import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI || process.env.MONGODB_URI_K8S || process.env.MONGODB_URI_DOCKER || process.env.MONGODB_URI_LOCAL

const connectDB = async () => {
    await mongoose.connect(MONGODB_URI, {
        dbName: process.env.DB_NAME
    })

    console.log(`Your mongoDB database(${process.env.DB_NAME}) is connected... `);
}

export default connectDB;