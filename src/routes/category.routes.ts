import { Router } from "express";
import { CategoryController } from "../controllers/category.controller";

const router = Router();

router.get("/all", CategoryController.getAll);

// router.post("/create", CategoryController.create);

export default router;