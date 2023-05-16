import express, { Express } from 'express';

import usersRoute from './routes/users';
import { notFound } from './controllers/not-found';

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', usersRoute);

app.use(notFound);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server is listening on port ${port}...`);
});
