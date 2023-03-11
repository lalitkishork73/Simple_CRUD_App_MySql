import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express()
const PORT = 3001;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

app.use('/', (req, res) => {
    console.log("happy codding")
    res.send({Message:"working"})
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`server is Running on Port: ${process.env.PORT || PORT}`)
})

