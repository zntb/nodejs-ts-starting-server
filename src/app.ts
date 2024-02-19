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

app.get('/', (req, res) => {
  res.send('<h1>Hello from server!</h1>');
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(colors.cyan.underline(`Server listen on PORT ${port}`));
});
