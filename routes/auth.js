import express from "express";
import { login, register, logout } from "../controller/auth.js";
import { db } from "../db.js";

const router = express.Router();

// 🔥 DB GUARD — REQUIRED
router.post("/register", (req, res, next) => {
  if (!db) return res.status(503).json("Auth disabled (DB not connected)");
  next();
}, register);

router.post("/login", (req, res, next) => {
  if (!db) return res.status(503).json("Auth disabled (DB not connected)");
  next();
}, login);

router.post("/logout", logout);

export default router;
