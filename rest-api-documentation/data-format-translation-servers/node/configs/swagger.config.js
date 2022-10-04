import swaggerJSDoc from "swagger-jsdoc";

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Data Format Translation Server",
      version: "0.0.1",
      description: `Data Format Translation Server allows you to read and parse data
        from multiple formats.\n
        Supported formats: txt, yml, xml, json.`,
    },
  },
  apis: ["./routers/*.js", "./app.js"],
};

export const openapiSpecification = swaggerJSDoc(swaggerOptions);
