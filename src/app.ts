import express, { Express } from 'express';
import dotenv from 'dotenv';

import usersRoute from './routes/users';
import { notFound } from './controllers/not-found';

dotenv.config();

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', usersRoute);

app.use(notFound);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(
    `server is listening in ${process.env.NODE_ENV} mode on port ${port}...`
  );
});
