import mongoose from "mongoose"

const connectDB = async () => {
    await mongoose.connect(process.env.MONGODB_URI, {
        dbName: process.env.DB_NAME
    });

    console.log(`Your mongoDB database(${process.env.DB_NAME}) is connected... `);
}

export default connectDB;