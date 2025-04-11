import { Request, Response } from "express";
import { CategoryService } from "../app/services/category.service";
export class CategoryController {
	static async getAll(req: Request, res: Response) {
		const categories = await CategoryService.getAllCategories();
		categories != null
			? res.status(200).json(categories)
			: res.status(404).json([]);
	}
}