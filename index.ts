import { AppDataSource } from './src/data-source';
import * as bodyParser from 'body-parser';
import { User } from './src/entities';

const express = require('express');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('<p>Hello World!</p>');
});

app.post('/user', async (req, res) => {
  const user = new User();
  user.name = req.body.name;
  user.email = req.body.email;
  user.password = req.body.password;

  const userEntity = await AppDataSource.manager.save(user);

  res.status(200).send({
    message: '유저가 생성되었습니다.',
    data: userEntity,
  });
});

app.listen(port, () => {
  AppDataSource.initialize().catch((error) => console.error(error));
  console.log(`Example app listening on port ${port}`);
});
