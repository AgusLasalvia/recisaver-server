// services/UserService.ts
import { UserRepository } from "../../infrastructure/repositories/user.repository";
import * as dto from "../../app/dto/user.dto";

export class AuthService {

	static async findByUsernameAndPassword(username: string, password: string): Promise<dto.LoginDto | null> {
		const user = await UserRepository.findByUsernameAndPassword(username, password);
		return user != null ? user : null;
	}

}
