import express from 'express';
import { setup } from './database/connection';
import { Router } from 'express';
import { postRouter } from './routes/posts.routes'
const app = express();
app.use(express.json());
setup();
app.use('/posts', postRouter);
app.listen(2702);
