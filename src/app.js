import express, { json } from 'express';
import db from './config/dbConnect.js';
import routes from './routes/index.js';

db.on("error", console.log.bind(console,'Error of connecting'))
db.once("open", () => {
    console.log('Sucessful bank connection')
})

const app = express();

app.use(express.json());

routes(app);

export default app