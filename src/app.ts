import express, { Express } from 'express';

import usersRoute from './routes/users';

const app: Express = express();

const port = process.env.PORT || 3000;

app.use('/', usersRoute);

app.listen(port, () => {
  console.log(`server is listening on port ${port}...`);
});
