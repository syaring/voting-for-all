import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import schema from './schema';

dotenv.config()

const app = express();
const server = new ApolloServer({
  schema,
  playground: process.env.NODE_ENV === 'development' ? true : false,
  introspection: true,
  tracing: true,
});

server.applyMiddleware({
  app,
  path: '/',
  cors: true,
  onHealthCheck: () => new Promise(
    (resolve, reject) => {
      if (mongoose.connection.readyState > 0) {
        resolve();
      } else {
        reject();
      }
    }
  ),
})

app.get(
  '/',
  (req, res) => res.send('Express + TypeScript Server'),
);

app.listen(process.env.PORT, () => {
  console.log(`⚡️[server]: Server is running at https://${process.env.HOST}:${process.env.PORT}`);
});
