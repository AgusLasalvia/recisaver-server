import supabase from "../../infrastructure/database/supabase";

export class SupabaseService {
	static async saveRecipeImage(file: Express.Multer.File, recipeId: string) {
		const fileName = `${Date.now()}-${file.originalname}`;

		const { data, error } = await supabase.storage
			.from("recisaver")
			.upload(fileName, file.buffer, {
				contentType: file.mimetype,
				upsert: false,
			});

		if (error) {
			console.error('❌ Error uploading to Supabase:', error.message);
			return null;
		}

		const { data: publicData } = supabase.storage
			.from("recisaver")
			.getPublicUrl(data.path);

		return {
			path: data.path,
			publicUrl: publicData.publicUrl,
		};
	}
}
