import { IRecipeRepository } from "@core/interfaces/IRecipeRepository";
import prisma from "./database/prisma";


export class RecipeRepository implements IRecipeRepository {
	
	findById(id: string): Promise<any | null> {
		throw new Error("Method not implemented.");
	}

}
