import {Router} from "express";
import {deleteAllController} from "./deleteAllController";


export const testingRouter = Router();

testingRouter.get('/', deleteAllController);