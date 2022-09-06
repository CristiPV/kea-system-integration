import express from "express";
import chalk from "chalk";

import {
  readTxt,
  readXml,
  readYml,
  readJson,
  readCsv,
} from "./utils/file-reader.js";

const app = express();

app.get("/text", (req, res) => {
  res.send(readTxt());
});

app.get("/yml", (req, res) => {
  res.send(readYml());
});

app.get("/xml", async (req, res) => {
  res.send(await readXml());
});

app.get("/json", (req, res) => {
  res.send(readJson());
});

app.get("/csv", (req, res) => {
  readCsv((content) => {
    res.send(content);
  });
});

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
