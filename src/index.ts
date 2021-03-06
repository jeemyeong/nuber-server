import dotenv from "dotenv";
dotenv.config();

import app from "./app";
import { Options } from "graphql-yoga";
import { createConnection } from "typeorm";
import connectionOptions from "./ormConfig";


const PORT : number | string = process.env.PORT || 4000;
const PLAYGROUND : string = "/playground";
const GRAPHQL_ENDPOINT : string = "/graphql";

const addOptions: Options = {
  port: PORT,
  playground: PLAYGROUND,
  endpoint: GRAPHQL_ENDPOINT
};

const handleAppStart = () => console.log(`Listening on port ${PORT}`)

createConnection(connectionOptions).then(() => {
  app.start(addOptions, handleAppStart);
});

