export interface IRecipeRepository {
	findById(id: string): Promise<any | null>;
}