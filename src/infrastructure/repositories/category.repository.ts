import prisma from "../database/prisma";

export class CategoryRepository{
	static async getAll() {
		const categories = await prisma.category.findMany({
			select: {
				id: true,
				name: true
			}
		});
		return categories;
	}
}