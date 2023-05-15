import express, { Express } from 'express';

import usersRoute from './routes/users';

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', usersRoute);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server is listening on port ${port}...`);
});
