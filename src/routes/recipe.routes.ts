import { Router } from "express";
import { RecipeController } from "../controllers/recipe.controller";

const router = Router();

router.get("/random", RecipeController.getRandomRecipe);

export default router;