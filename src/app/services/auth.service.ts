// services/UserService.ts
import { UserRepository } from "../../infrastructure/repositories/user.repository";
import { User } from "../../core/entities/User";

export class AuthService {

	static async findByUsernameAndPassword(username: string, password: string) {
		const user = await UserRepository.findByUsernameAndPassword(username, password);

		if (!user) {
			throw new Error("User not found");
		}
		return user;
	}


	static async register(user: User) {
		const newUser = await UserRepository.register(user);
		if (!newUser) {
			throw new Error("User registration failed");
		}

		// Retornamos el usuario registrado
		return newUser;
	}
}
