import express from 'express';
import bodyParser from 'body-parser';
import { setEmailRoutes } from './routes/emailRoutes';
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

setEmailRoutes(app);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});