import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { config } from 'dotenv';
import { router } from './router/route.js';
import ProductRouter from "./router/ProductRouter.js"
import bodyParser from 'body-parser';


/** import connection file */
import connect from './database/conn.js';
const app = express();
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());

app.use(bodyParser.json());
config();
const port = process.env.PORT || 8080;


/** routes */
app.use('/api', router);
//app.use('/api', ProductRouter);

app.get('/', (req, res) => {
    try {
        res.json("Get Request")
    } catch (error) {
        res.json(error)
    }
})

/** start server only when we have valid connection */
connect().then(() => {
    try {
        app.listen(port, () => {
            console.log(`Server connected to http://localhost:${port}`)
        })
    } catch (error) {
        console.log("Cannot connect to the server");
    }
}).catch(error => {
    console.log("Invalid Database Connection", error.message);
})
