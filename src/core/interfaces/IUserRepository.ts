export interface IUserRepository {
	findByUsernameAndPassword(username: string, password: string): Promise<any | null>;
	// findById(id: string): Promise<User | null>;
	// create(user: User): Promise<User>;
	// update(user: User): Promise<User>;
	// delete(id: string): Promise<void>;
}