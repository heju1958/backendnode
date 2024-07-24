import swaggerJsdoc from "swagger-jsdoc";

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Documentation",
      version: "1.0.0",
      description: "API Backend Node",
    },
  },
  apis: ["./src/routers/*.ts"], // Ajuste o caminho para onde suas rotas estão definidas
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;
