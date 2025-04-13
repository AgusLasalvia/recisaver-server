import * as dto from "../../app/dto/recipe.dto";
import { Prisma } from "@prisma/client";
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
				category_id: recipe.category_id,
			},
		});
		return newRecipe;
	}

	static async getRandomRecipes(): Promise<dto.RandomRecipesDto[] | []> {
		const recipes = await prisma.$queryRaw<dto.RandomRecipesDto[]>(Prisma.sql`
			SELECT id, title, img_url
			FROM "Recipe"
			ORDER BY RANDOM()
			LIMIT 6
		`);

		return recipes.length > 0 ? recipes : [];
	}
}
