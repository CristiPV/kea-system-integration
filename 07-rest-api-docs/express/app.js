import express from "express";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import "dotenv/config";
import chalk from "chalk";

import { usersRouter } from "./routers/users.js";

const PORT = process.env.SERVER_PORT || 8080;

const app = express();

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "No thank you",
      version: "0.0.1",
    },
  },
  apis: ["./routers/*.js", "./app.js"],
};

const openapiSpecification = swaggerJSDoc(swaggerOptions);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(openapiSpecification));
app.use(express.json());

app.use("/users", usersRouter);

/**
 * @openapi
 * /timestamp:
 *   get:
 *     description: Get a current timestamp.
 *     responses:
 *       200:
 *         description: The current timestamp in ISO8601.
 */
app.get("/timestamp", (req, res) => {
  res.send({ "Node Server Timestamp": new Date().toISOString() });
});

/**
 * @openapi
 * /*:
 *   get:
 *     description: Returns an error string for invalid endpoints.
 *     responses:
 *       200:
 *         description: Returns a string that lets you know you don't belong here.
 */
app.get("/*", (req, res) => {
  res.send("Oopsie, you have wandered too far. Go back to where you belong!");
});

app.post("/github", (req, res) => {
  console.log(req.body);
});

app.listen(PORT, (error) => {
  if (error) {
    console.error(error);
  }

  console.log(
    chalk.yellowBright("Server has started on port"),
    chalk.redBright(PORT)
  );
});
