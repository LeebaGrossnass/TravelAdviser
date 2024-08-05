import { configDotenv } from 'dotenv';
import  express  from 'express';
import destinationsRouter from './routers/destinationsRouter.js';
import attractionsRouter from './routers/attractionsRouter.js';

configDotenv()
const app = express();
const hostname = process.env.HOST_NAME;//'127.0.0.1';//localhost
const port = process.env.PORT;
app.use(express.json());//will extract data from body - so we don't ned to register to 'data' and 'end' events


app.use('/api/destinations',destinationsRouter );
app.use('/api/attractions', attractionsRouter );
app.use('/', (req, res) => {
    res.send('welcome to our api');
})

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})

