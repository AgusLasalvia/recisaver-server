import { RecipeRepository } from "../../infrastructure/repositories/recipe.repository";
import { SupabaseService } from "./supabase.service";
import * as dto from "../dto/recipe.dto";

export class RecipeService {
	static async getRandomRecipes(): Promise<dto.RandomRecipesDto[] | []> {
		const recipes = await RecipeRepository.getRandomRecipes();
		return recipes;
	}

	static async create(recipe: dto.CreateRecipeDto, file: Express.Multer.File): Promise<any | null> {
		const img = await SupabaseService.saveRecipeImage(file, String(recipe.id));
		if (img == null) {
			return null;
		}
		const recipeWithImg = {
			...recipe,
			img_url: img.fullPath,
		};
		const newRecipe = await RecipeRepository.create(recipeWithImg);
		return newRecipe;
		// const recipe = await RecipeRepository.create();
		// return recipe;
	}
}