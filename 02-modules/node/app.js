import express from "express";
import path from "path";
const app = express();

app.use(express.static("public"));

app.get("/endpoint", (req, res) => {
  res.send({ message: "ok ok ok" });
});

app.get("/encoding", (req, res) => {
  const stringToEncode = "I am a string, and I want to be encoded lol";
  const encodedString = btoa(stringToEncode);

  res.send(`Encoded: ${encodedString}<br/> Decoded: ${atob(encodedString)}`);
});

// __dirname is only available on commonjs
// path is used for modules
app.get("/duck", (req, res) => {
  // res.sendFile(__dirname + "/public/duck.html");
  res.sendFile(path.resolve("./public/duck.html"));
});

app.get("/python", async (req, res) => {
  const response = await fetch("http://127.0.0.1:8000/");
  res.send(await response.json());
});

app.listen(3000, () => {
  console.log("Server is running on", 3000);
});
