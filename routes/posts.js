import express from "express";
import { db } from "../db.js";

const router = express.Router();

router.get("/", (req, res) => {
  // 🔥 NO DB? RETURN EMPTY ARRAY
  if (!db) return res.json([]);

  const q = req.query.cat
    ? "SELECT * FROM posts WHERE cat=?"
    : "SELECT * FROM posts";

  db.query(q, req.query.cat ? [req.query.cat] : [], (err, data) => {
    if (err) return res.status(500).json(err);
    res.json(data);
  });
});

export default router;
