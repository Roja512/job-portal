import mongoose, { connect } from "mongoose";

// Function to connect to the MongoDB database
const connectDB = async () => {
    mongoose.connection.on('connected',()=> console.log('Databse Connected'))

    await mongoose.connect(`${process.env.MONGODB_URI}/job-portal`)
}

export default connectDB