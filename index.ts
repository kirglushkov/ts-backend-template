import "dotenv/config";
import cors from "cors";
import express from "express";

import http from "node:http";
import { mongooseConnect } from "./utils/mongoConnect";
import { example } from "./routes/imports";

const isProduction = process.env.NODE_ENV === "production";
const port = Number(process.env.PORT || 3000);

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

const server = http.createServer(app);

/** Rest API */
app.use(express.json({ limit: "50mb", type: "application/json" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

app.use("/", example);

async function start() {
  try {
    await mongooseConnect();
    server.listen(port, () => {
      const url = `http${isProduction ? "s" : ""}://localhost:${port}`;
      const mode = isProduction ? "production" : "development";
      console.log(`[Server] Сервер запущен по адресу ${url} в режиме ${mode}`);
    });
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}
start();
