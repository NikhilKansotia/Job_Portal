import express from "express";
import {
  login,
  logout,
  register,
  updateProfle,
} from "../controllers/user.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { singleUpload } from "../middlewares/multer.js";

const router = express.Router();

router.post("/register", singleUpload, register);
router.post("/login", login);
router.post("/profile/update", isAuthenticated, singleUpload, updateProfle);
router.get("/logout", isAuthenticated, logout);

export default router;
