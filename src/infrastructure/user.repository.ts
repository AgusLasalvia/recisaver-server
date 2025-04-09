import { IUserRepository } from "@core/interfaces/IUserRepository";
import prisma from "./database/prisma";

export class UserRepository implements IUserRepository {
	async findByUsernameAndPassword(username: string, password: string): Promise<any | null> {
		const user = await prisma.user.findFirst({
			where: {
				username,
				password,
			},
		});

		return user;
	}
	
}