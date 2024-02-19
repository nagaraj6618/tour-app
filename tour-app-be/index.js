import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import tourRoute from './routes/tours.js'
import userRoute from './routes/users.js'
import authRoute from './routes/auth.js'
import reviewRoute from './routes/reviews.js'
import bookingRoute from './routes/bookings.js'
import bodyParser from 'body-parser'
dotenv.config()

const app = express()
const port = process.env.PORT || 8000;
const corsOptions = {
  origin: true,
  credentials: true
}
app.get('/', (req, res) => {
  res.send("Working");
})
app.get('/api/v1/tour', (req, res) => {
  res.json({message:"Working"});
})
mongoose.set("strictQuery", false)
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log("MongoDb databse connected")

  }
  catch (err) {
    console.log(err)
    console.log('Mongodb database Connection failed')
  }

}
app.use(express.json())
app.use(bodyParser.json());
app.use(cors(corsOptions))
app.use(cookieParser())
app.use('/api/v1/auth', authRoute)
app.use('/api/v1/tours', tourRoute)
app.use('/api/v1/users', userRoute)
app.use('/api/v1/review', reviewRoute)
app.use('/api/v1/booking', bookingRoute)
app.listen(port, () => {
  connect()
  console.log('server listening on port', port)
})