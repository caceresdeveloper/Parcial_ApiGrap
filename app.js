const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const mongoose = require('mongoose')

const app = express()

dotenv.config()
const corsOptions = {
    origin: true,
    credentials: true,
}

app.set('PORT', process.env.PORT)

mongoose.set('strictQuery', false);

const connect = async () => {
    try {
        await mongoose.connect(process.env.URLMONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected!');
    } catch (error) {
        console.log('MongoDB connection error: ', error);

    }
}
connect()

app.use(express.json())
app.use(cors());

app.use("/users", require('./routes/user'))
app.use("/diciplines", require('./routes/diciplines'))
app.use("/events", require('./routes/events'))


app.listen(app.get('PORT'), ()=>{
    console.log(`Server listen to port: ${app.get('PORT')}` );
})


