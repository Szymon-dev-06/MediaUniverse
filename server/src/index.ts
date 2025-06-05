import cors from "cors";
import multer from "multer";
import fs from "fs";
import path from "path";
import express from "express";
import type { Request, Response } from "express";

const app = express();
const PORT = 3000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const uploadDir = path.join(__dirname, "uploads");
app.use("/uploads", express.static(uploadDir));

const storage = multer.diskStorage({
	destination: uploadDir,
	filename: (
		req: Request,
		file: Express.Multer.File,
		cb: (error: Error | null, filename: string) => void
	) => {
		const ext = path.extname(file.originalname) || ".png";
		const purpose = req.query.purpose as string | undefined;

		if (purpose === "profile") {
			cb(null, `userProfilePhoto${ext}`);
		} else {
			try {
				const existingFiles = fs
					.readdirSync(uploadDir)
					.filter(f => !f.startsWith(".") && !f.startsWith("userProfilePhoto"));
				const index = existingFiles.length + 1;
				cb(null, `${index}${ext}`);
			} catch (error) {
				cb(new Error("Failed to read upload directory"), "");
			}
		}
	},
});
const upload = multer({ storage });

app.post("/upload", upload.single("image"), (req: any, res: Response) => {
	if (!req.file) {
		res.status(400).json({ error: "No file uploaded" });
		return;
	}

	res.json({ path: `/uploads/${req.file.filename}` });
});

app.get("/photos", (req, res) => {
	try {
		const files = fs.readdirSync(uploadDir).filter(f => {
			return (
				!f.startsWith(".") &&
				!f.toLowerCase().startsWith("userprofilephoto")
			);
		});

		res.json(files);
	} catch (error) {
		res.status(500).json({ error: "Failed to read photos directory" });
	}
});

app.delete("/uploads/:name", async (req: Request, res: Response) => {
	const filename = path.basename(req.params.name);
	const filepath = path.join(uploadDir, filename);

	try {
		if (!fs.existsSync(filepath)) {
			res.status(404).json({ error: "File not found" });
			return;
		}

		await fs.promises.unlink(filepath);
		res.status(200).json({ message: "File deleted" });
	} catch (error) {
		res.status(500).json({ error: "Failed to delete file" });
	}
});

app.listen(PORT, () =>
	console.log(`Server running at http://localhost:${PORT}`)
);