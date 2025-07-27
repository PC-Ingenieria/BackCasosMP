import express from 'express';
import cors from 'cors';
import casosRoutes from './routes/casos.routes.js';
import swaggerUI from 'swagger-ui-express';
import swaggerDocumentation from '../swagger.json' with {type:'json'};

const app = express();



app.use(cors());
app.use(express.json());

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocumentation));

app.use(casosRoutes);

export default app;
