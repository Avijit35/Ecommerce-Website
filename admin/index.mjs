import express from "express";
import cors from "cors";
import "dotenv/config";
import path from "path";
// import { fileURLToPath } from "url";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
const __dirname = path.resolve();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
