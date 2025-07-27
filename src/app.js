import express from 'express';
import cors from 'cors';
import casosRoutes from './routes/casos.routes.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(casosRoutes);

export default app;
