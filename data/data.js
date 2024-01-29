import mongoose from 'mongoose'

export const connectDB = () => {
  mongoose
    .connect(process.env.mongoUrl, {
      dbName: 'Testing',
    })
    .then(() => {
      console.log('Database connected')
    })
    .catch((err) => {
      console.log(err)
    })
}
