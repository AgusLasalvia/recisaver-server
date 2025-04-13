import { UserService } from "../app/services/user.service";
import { User } from "../core/entities/User";
import { Request, Response } from "express";

export class UserController {
	static async register(req: Request, res: Response) {
		const { username, password, email } = req.body;

		const auxiliar = new User(username, password, email);
		const user = await UserService.register(auxiliar);

		user != null
			? res.status(201).json(user)
			: res.status(400).json({ message: "Error registering user" });

	}

}