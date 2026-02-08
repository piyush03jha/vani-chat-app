import fs from "fs";
import path from "path";
import dotenv from "dotenv";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const envFilePath = path.resolve(__dirname, "../.env");
const envSamplePath = path.resolve(__dirname, "../.env.sample");

if (fs.existsSync(envFilePath)) {
  dotenv.config({ path: envFilePath });
} else if (fs.existsSync(envSamplePath)) {
  dotenv.config({ path: envSamplePath });
  console.warn(
    "server/.env not found. Loaded server/.env.sample. Create server/.env for local secrets."
  );
} else {
  dotenv.config();
}

import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: process.env.CLIENT_URL,
  },
});

const userSocketMap = {
    // userId : socketId,
}

io.on("connection", (socket) => {
  const userId = socket.handshake.query.userId;

  if (!userId) return;

  userSocketMap[userId] = socket.id;

  io.emit("onlineUsers", Object.keys(userSocketMap))

  socket.on("disconnect", () => {
    delete userSocketMap[userId];
    io.emit("onlineUsers", Object.keys(userSocketMap));
  });
});

const getSocketId = (userId) =>{
    return userSocketMap[userId];
}

export { io, app, server, getSocketId };
