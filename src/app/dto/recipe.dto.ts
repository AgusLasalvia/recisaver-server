export class CreateRecipeDto {
	constructor(
		public title: string,
		public description: string,
		public instructions: string,
		public img_url: string,
		public user_id: number,
		public category_id: number,
	) { }
}


export class RandomRecipesDto {
	constructor(
		public id: number,
		public title: string,
		public img_url: string,
	) { }
}