import { CategoryRepository } from "../../infrastructure/repositories/category.repository";

export class CategoryService {
	static async getAllCategories() {
		const categories = await CategoryRepository.getAll();
		
		return categories;
	}
}