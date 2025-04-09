import { IUserRepository } from "@core/interfaces/IUserRepository";
import { User } from "@core/entites/user.entity";

export class LoginUseCase {

	constructor(private readonly userRepository: IUserRepository) { }

	async execute(username: string, password: string): Promise<User | null> {
		const user = await this.userRepository.findByUsernameAndPassword(username, password);
		return user;
	}
}