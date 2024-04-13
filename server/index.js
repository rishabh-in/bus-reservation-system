import express from 'express';
import cors from 'cors';
import http from 'http';
import dotevn from 'dotenv';
import socketConfig from './config/socketConfig.js';
import connectDB from './config/connectDB.js';

dotevn.config()
connectDB();
const app = express();
const server = http.createServer(app);
export const soc = socketConfig(server);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

server.listen(process.env.PORT, () => {
  console.log("Server started running on ", process.env.PORT);
})

