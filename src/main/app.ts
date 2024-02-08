import express from 'express';
import {createDB} from "../db/db";
import {addRoutes} from "./routes";

export const app = express();

export const db = createDB();

addRoutes(app);

const jsonBodyMiddleware = express.json();
app.use(jsonBodyMiddleware);

