import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import morgan from 'morgan';
import bodyParser from 'body-parser';

dotenv.config();

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/ping', (_req, res) => {
  console.log('someone pinged here');
  res.send('pong');
});

const port = 4000;

app.listen(port, () => {
  console.log(colors.cyan.underline(`Server listen on PORT ${port}`));
});
