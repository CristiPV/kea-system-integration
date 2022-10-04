import express from "express";
import swaggerUi from "swagger-ui-express";
import chalk from "chalk";

import {
  readTxt,
  readXml,
  readYml,
  readJson,
  readCsv,
} from "./utils/file-reader.js";
import { openapiSpecification } from "./configs/swagger.config.js";

const app = express();

app.use("/docs", swaggerUi.serve, swaggerUi.setup(openapiSpecification));

/**
 * @openapi
 * /text:
 *   get:
 *     description: Get the contents of a text file.
 *     summary: Read text.
 *     tags:
 *       - formats
 *     responses:
 *       200:
 *         description: The contents of the text file.
 */
app.get("/text", (req, res) => {
  res.send(readTxt());
});

/**
 * @openapi
 * /yml:
 *   get:
 *     description: Get the contents of a yml file.
 *     summary: Read yml.
 *     tags:
 *       - formats
 *     responses:
 *       200:
 *         description: The contents of the yml file.
 */
app.get("/yml", (req, res) => {
  res.send(readYml());
});

/**
 * @openapi
 * /xml:
 *   get:
 *     description: Get the contents of a xml file.
 *     summary: Read xml.
 *     tags:
 *       - formats
 *     responses:
 *       200:
 *         description: The contents of the xml file.
 */
app.get("/xml", async (req, res) => {
  res.send(await readXml());
});

/**
 * @openapi
 * /json:
 *   get:
 *     description: Get the contents of a json file.
 *     summary: Read json.
 *     tags:
 *       - formats
 *     responses:
 *       200:
 *         description: The contents of the json file.
 */
app.get("/json", (req, res) => {
  res.send(readJson());
});

/**
 * @openapi
 * /csv:
 *   get:
 *     description: Get the contents of a csv file.
 *     summary: Read csv.
 *     tags:
 *       - formats
 *     responses:
 *       200:
 *         description: The contents of the csv file.
 */
app.get("/csv", (req, res) => {
  readCsv((content) => {
    res.send(content);
  });
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
