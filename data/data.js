import mongoose from 'mongoose'

export const connectDB = () => {
  mongoose
    .connect(process.env.mongoUrl, {
      dbName: 'Testing',
    })
    .then((c) => {
      console.log(`Database connected at ${c.connection.host}`)
    })
    .catch((err) => {
      console.log(err)
    })
}
