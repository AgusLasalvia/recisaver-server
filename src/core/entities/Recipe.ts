export class Recipe {

	private readonly id?: number;
	private title: string;
	private description: string;
	private instructions: string;
	private imgUrl: string;
	private userId: number;
	private categoryId: number

	constructor(
		title: string,
		description: string,
		instructions: string,
		imgUrl: string,
		userId: number,
		categoryId: number
	) {
		this.title = title;
		this.description = description;
		this.instructions = instructions;
		this.imgUrl = imgUrl;
		this.userId = userId;
		this.categoryId = categoryId
	}
}