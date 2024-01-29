import { app } from './app.js'
import { connectDB } from './data/data.js'

connectDB()
app.listen(process.env.PORT, () => {
  console.log(
    `server is working at Port :${process.env.PORT} in ${process.env.NODE_ENV} mode`
  )
})
