import express from "express";
import swaggerUi from "swagger-ui-express";
import "dotenv/config";
import chalk from "chalk";

import { openapiSpecification } from "./configs/swagger.config.js";

const app = express();

app.use("/docs", swaggerUi.serve, swaggerUi.setup(openapiSpecification));

/**
 * @openapi
 * /timestamp:
 *   get:
 *     description: Get a current timestamp.
 *     summary: Get the current timestamp.
 *     tags:
 *       - timestamp
 *     responses:
 *       200:
 *         description: The current timestamp in ISO8601.
 */
app.get("/timestamp", (req, res) => {
  res.send({ "Node Server Timestamp": new Date().toISOString() });
});

/**
 * @openapi
 * /timestamp/python:
 *   get:
 *     description: Get a current timestamp from the python date server.
 *     summary: Get the current timestamp.
 *     tags:
 *       - timestamp
 *       - python integration
 *     responses:
 *       200:
 *         description: The current timestamp in ISO8601 returned by the python server.
 */
app.get("/timestamp/python", async (req, res) => {
  const pythonTimestamp = await (
    await fetch(process.env.PYTHON_SERVER + "/timestamp")
  ).json();
  res.send({ "Python Response": pythonTimestamp });
});

/**
 * @openapi
 * /*:
 *   get:
 *     description: Returns an error string for invalid endpoints.
 *     summary: Lets you know you don't belong here.
 *     tags:
 *       - any path
 *     responses:
 *       200:
 *         description: Returns a string that lets you know you don't belong here.
 */
app.get("/*", (req, res) => {
  res.send("Oopsie, you have wandered too far. Go back to where you belong!");
});

app.listen(3000, (error) => {
  if (error) {
    console.error(error);
  }

  console.log(
    chalk.yellowBright("Server has started on port"),
    chalk.redBright("3000")
  );
});
