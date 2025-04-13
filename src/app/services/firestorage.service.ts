

export class FireStorageService {
	static async uploadImage(image: Express.Multer.File) {
		
		try {
			const { Storage } = require("@google-cloud/storage");
			const storage = new Storage({
				projectId: process.env.GOOGLE_PROJECT_ID,
				keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS,
			});
			const bucket = storage.bucket(process.env.GOOGLE_BUCKET_NAME);
			const blob = bucket.file(image.originalname);
			const blobStream = blob.createWriteStream({
				resumable: false,
			});

			return new Promise((resolve, reject) => {
				blobStream
					.on("error", (err: any) => {
						reject(err);
					})
					.on("finish", () => {
						resolve(`https://storage.googleapis.com/${process.env.GOOGLE_BUCKET_NAME}/${image.originalname}`);
					})
					.end(image.buffer);
			});
		} catch (error) {
			throw new Error("Error uploading image to FireStorage");
		}
	}
}