import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import connect from './database/conn.js';
import productRouter from './routes/product.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());
app.use(morgan('tiny'));
app.disable('x-powered-by');

const port = 8000;

app.get('/api', (req, res) => {
  res.status(200).json('Home GET Request');
});

app.use('/api/products', productRouter);

connect()
  .then(() => {
    app.listen(port, '0.0.0.0', () => {
      console.log(`Server started on port ${port}`);
    });
  })
  .catch((err) => {
    console.error('Cannot connect to the database: ' + err);
    process.exit(1);
  });
