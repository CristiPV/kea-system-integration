import express from "express";
import http from "http";
import { Server } from "socket.io";
import "dotenv/config";
import chalk from "chalk";
import { SocketAddress } from "net";

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static("public"));

io.on("connection", (socket) => {
  console.log(
    chalk.yellowBright("New socket connected"),
    chalk.redBright(socket.id)
  );

  socket.on("ping", (data) => {
    console.log(
      chalk.yellowBright("Received ping: "),
      chalk.redBright(data.message)
    );
    socket.emit("pong", { message: data.message });
  });
});

server.listen(8080, (error) => {
  if (error) {
    console.error(error);
  }

  console.log(
    chalk.yellowBright("Server has started on port"),
    chalk.redBright("8080")
  );
});
