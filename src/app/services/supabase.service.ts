import supabase from "../../infrastructure/database/supabase";

export class SupabaseService {
	static async saveRecipeImage(file: Express.Multer.File, recipeId: string) {
		const { data, error } = await supabase.storage
			.from("recipe-images")
			.upload(`recipes/${recipeId}`, file.buffer, {
				contentType: file.mimetype,
				upsert: true,
			});
		if (error) {
			return null;
		}
		return data;
	}
}