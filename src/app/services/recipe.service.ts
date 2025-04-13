import { RecipeRepository } from "../../infrastructure/repositories/recipe.repository";
import * as dto from "../dto/recipe.dto";

export class RecipeService {
	static async getRandomRecipes(): Promise<dto.RandomRecipesDto[] | []> {
		const recipes = await RecipeRepository.getRandomRecipes();
		return recipes;
	}
}