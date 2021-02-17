import mongoose from 'mongoose'

async function dbConnect() {
    try {
        if (mongoose.connection.readyState >= 1)
            return
            
        return mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
    } catch (err) {
        console.log(err);
    }

}

export default dbConnect()