import { User } from "../entities/User";
import prisma from "./database/prisma";

export class UserRepository {
	static async findByUsernameAndPassword(username: string, password: string): Promise<User | null> {
		const user = await prisma.user.findUnique({
			where: {
				username: username,
				password: password
			}
		});

		if (!user) {
			return null;
		}

		return new User(user.username, user.password, user.email);
	}



	static async register(user: User): Promise<User | null> {
		const existingUser = await prisma.user.findUnique({
			where: {
				username: user.username
			}
		});

		if (existingUser) {
			return null; 
		}

		const newUser = await prisma.user.create({
			data: {
				username: user.username,
				password: user.password,
				email: user.email
			}
		});

		return new User(newUser.username, newUser.password, newUser.email);
	}
}
