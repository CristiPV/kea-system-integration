import express from "express";
import "dotenv/config";
import chalk from "chalk";

const app = express();

app.get("/timestamp", (req, res) => {
  res.send({ "Node Server Timestamp": new Date().toISOString() });
});

app.get("/timestamp/python", async (req, res) => {
  const pythonTimestamp = await (await fetch(process.env.PYTHON_SERVER + "/timestamp")).json();
  res.send({ "Python Response": pythonTimestamp });
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
