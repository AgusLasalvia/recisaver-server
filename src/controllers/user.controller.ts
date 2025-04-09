import { UserService } from "@services/user.service";
import { User } from "../entities/User";
import { Request, Response } from "express";

export class UserController {

	static async login(req: Request, res: Response) {
		const { username, password } = req.body;

		try {
			const user = await UserService.findByUsernameAndPassword(username, password);
			res.status(200).json(user);
		} catch (error) {
			res.status(401).json({ message: "Invalid credentials" });
		}
	}


	static async register(req: Request, res: Response) {
		const { username, password, email } = req.body;


		const auxiliar = new User(username, password, email);
		const user = await UserService.register(auxiliar);
		
		user != null 
			? res.status(201).json(user)
			:res.status(400).json({ message: "Error registering user" });

	}
}