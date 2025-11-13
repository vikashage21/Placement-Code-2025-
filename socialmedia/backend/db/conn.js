import mongoose from "mongoose";

export const connectDB = async () => {
    try {

      await  mongoose.connect(process.env.MONGOOSE_URL)
      console.log('connected to mongoDB successfully ✅')

    } catch (error) {

        console.error('failed to connect to mongodb' , error.message)

    }
}