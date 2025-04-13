import { Request, Response } from 'express';
import { RecipeService } from '../app/services/recipe.service';

export class RecipeController {
	static async getRandomRecipe(req: Request, res: Response) {
		const recipes = await RecipeService.getRandomRecipes();
		res.status(200).json(recipes)
	}

	static async createRecipe(req: Request, res: Response): Promise<void> {
		const recipe = req.body;
		const file = req.file;
	
		if (!file) {
			res.status(400).json({ message: 'File is required' });
			return;
		}
	
		const newRecipe = await RecipeService.create(recipe, file);
	
		if (!newRecipe) {
			res.status(500).json({ message: 'Error creating recipe' });
			return;
		}
	
		res.status(201).json(newRecipe);
	}
	
}