import express from 'express';
import dbConnection from './config/dbConnect.js';
import routes from './routes/index.js';

const connection = await dbConnection();

connection.on('error', (err) => {
  console.error('Erro de conexão com o banco', err);
});

connection.once('open', () => {
  console.log('Conexão com o banco feita com sucesso');
});

const app = express();

routes(app);

export default app;
