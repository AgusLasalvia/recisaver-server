import { Request, Response } from 'express';
import { RecipeService } from '../app/services/recipe.service';

export class RecipeController {
	static async getRandomRecipe(req: Request, res: Response) {
		const recipes = await RecipeService.getRandomRecipes();
		res.status(200).json(recipes)
	}
}