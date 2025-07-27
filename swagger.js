import swaggerAutogen from 'swagger-autogen';

const outputFile = './swagger.json';
const endPointsFiles = ['./src/routes/casos.routes.js'];

const doc = {
    info: {
        title: 'API CRUD casos MP',
        description: 'API para crear modificar y eliminar casos MP'
    },
    host: 'localHost:3000',
    schemes: ['http']    
}

swaggerAutogen(outputFile, endPointsFiles, doc);