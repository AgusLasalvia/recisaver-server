import { UserController } from "../controllers/user.controller";
import { Router } from "express";

const router = Router();

router.post("/register", UserController.register);
export default router;