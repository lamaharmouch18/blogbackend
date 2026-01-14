import express from "express";
import { db } from "../db.js";

const router = express.Router();

router.get("/", (req, res) => {
  if (!db) return res.json([]);
  res.json([]);
});

export default router;
