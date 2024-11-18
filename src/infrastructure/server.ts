const express = require('express');
import MovieRoutes from './routes/MovieRoutes';
import swaggerUi from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';
import config from './adapters/tmdb/tmdbConfig';

const app = express();
const port = config.port;

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Hexagonal BFF Example API',
      version: '1.0.0',
      description: 'API Documentation for Hexagonal BFF Example',
    },
    servers: [
      {
        url: `http://localhost:${port}`,
      },
    ],
  },
  apis: ['./src/infrastructure/routes/*.ts'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use('/movies', MovieRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});