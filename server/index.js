import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import postsRoute from './routes/posts.js';

const app = express();

app.use('/posts', postsRoute)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(cors());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running in port: ${PORT}`))