import { CategoryRepository } from "src/infrastructure/repositories/category.repository";

export class CategoryService {
	static async getAllCategories() {
		const categories = await CategoryRepository.getAll();
		
		return categories;
	}
}