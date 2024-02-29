import { Router } from "express";
import { createReceiptController } from "./dependencies";

export const ReceiptRoute = Router();

ReceiptRoute.post("/", createReceiptController.run.bind(createReceiptController));