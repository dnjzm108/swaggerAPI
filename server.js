const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const app = express();

const options = {
    swaggerDefinition: {
        openapi: "3.0.0",
        info: {
            version: "0.0.1",
            title: 'swagger-test',
            description: "swagger test",
            // 접근하는 경로에 대한 정보
        },
        servers: [{
            description: "test 중입니다.",
            url: "http://localhost:3001"
        }]
    },
    apis: [
        "swagger/models.js",
        "api/*.js",
        "api/**/*.js"
    ]
}

const swaggerDoc = swaggerJsDoc(options);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

const route = require('./api');

app.use('/api', route)


app.listen(3001, () => {
    console.log('serveer start')
})