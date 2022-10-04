import swaggerJSDoc from "swagger-jsdoc";

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Date Server",
      version: "0.0.1",
      description:
        "Date server that returns the current timestamp in ISO8601 standard.",
    },
  },
  apis: ["./routers/*.js", "./app.js"],
};

export const openapiSpecification = swaggerJSDoc(swaggerOptions);