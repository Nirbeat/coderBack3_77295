import { Router } from "express";
import { divide, errorResponse } from "../controllers/operation.controllers.js";
import { handleOperationsError } from "../middlewares/operation.middlewares.js";

const router = Router();

router.get("/division/:dividendo/:divisor", divide);
router.get("/operation-error", errorResponse)

router.use(handleOperationsError);

export default router;