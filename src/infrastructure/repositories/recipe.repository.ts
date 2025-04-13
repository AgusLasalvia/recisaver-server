import * as dto from "../../app/dto/recipe.dto";
import prisma from "../database/prisma";

export class RecipeRepository {

	static async findById(id: string): Promise<any | null> {
		throw new Error("Method not implemented.");
	}


	static async create(recipe: dto.CreateRecipeDto): Promise<dto.CreateRecipeDto | null> {
		const newRecipe = await prisma.recipe.create({
			data: {
				title: recipe.title,
				description: recipe.description,
				instructions: recipe.instructions,
				img_url: recipe.img_url,
				user_id: recipe.user_id,
				category_id: recipe.category_id, // Ensure categoryId is provided
			},
		});
		return newRecipe;
	}

	static async getRandomRecipes(): Promise<dto.RandomRecipesDto[] | []> {
		const recipes = await prisma.recipe.findMany({
			select: {
				id: true,
				title: true,
				img_url: true,
			},
			take: 6, // Limit to 6 random recipes
			orderBy: {
				id: 'asc', // Order by id in ascending order
			},
		});

		return recipes.length > 0 ? recipes : [];
	}
}
