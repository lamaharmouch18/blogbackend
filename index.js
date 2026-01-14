import express from "express";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import multer from "multer";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

/* ================= MIDDLEWARE ================= */
app.use(cors({
  origin: "*",
  credentials: true,
}));

app.use(express.json());
app.use(cookieParser());

/* ================= HEALTH CHECK ================= */
app.get("/", (req, res) => {
  res.json({ status: "Backend is running ✅" });
});

/* ================= FILE UPLOAD (SAFE) ================= */
// ⚠️ Railway-safe: store files in memory only
const storage = multer.memoryStorage();
const upload = multer({ storage });

app.post("/api/upload", upload.single("file"), (req, res) => {
  if (!req.file) return res.status(400).json("No file uploaded");
  res.status(200).json("Upload disabled in production");
});

/* ================= ROUTES ================= */
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

/* ================= SERVER ================= */
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
