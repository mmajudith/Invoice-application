import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import invoicesRoute from './routes/invoices.js';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(cors());

app.use('/invoices', invoicesRoute)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running in port: ${PORT}`))