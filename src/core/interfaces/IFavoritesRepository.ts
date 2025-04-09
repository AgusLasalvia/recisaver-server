export interface IFavoritesRepository {
	findByUserIdAndRecipeId(userId: string, recipeId: string): Promise<any | null>;
	addToFavorites(userId: string, recipeId: string): Promise<any>;
	removeFromFavorites(userId: string, recipeId: string): Promise<any>;
	getFavoritesByUserId(userId: string): Promise<any[]>;
	getAllFavorites(): Promise<any[]>;
}