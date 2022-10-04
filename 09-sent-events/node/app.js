import express from "express";
import "dotenv/config";
import chalk from "chalk";

const app = express();

app.use(express.static("public"));

app.get("/synchronizeTime", (req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
    Connection: "keep-alive",
  });
  setInterval(() => {
    res.write("data: " + new Date().toLocaleDateString() + "\n\n");
  }, 1000);
});

app.listen(8080, (error) => {
  if (error) {
    console.error(error);
  }

  console.log(
    chalk.yellowBright("Server has started on port"),
    chalk.redBright("8080")
  );
});
