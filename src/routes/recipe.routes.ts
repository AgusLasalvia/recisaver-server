import multer from 'multer';

const storage = multer.memoryStorage(); // o diskStorage si querés guardar en disco
const upload = multer({ storage });


import { Router } from "express";
import { RecipeController } from "../controllers/recipe.controller";

const router = Router();

router.get("/random", RecipeController.getRandomRecipe);

router.post("/create", upload.single('image'), RecipeController.createRecipe);

export default router;